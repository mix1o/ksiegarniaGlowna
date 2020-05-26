import {useState, useEffect} from 'react';

export const useLocalStorage = (key) => {
    // inicjujesz state
    const [value, setValue] = useState(() => {
        try {
            // pobierasz z localstorage item
            const item = window.localStorage.getItem(key);
            // zwracasz przeparsowanego jsona
            return item ? JSON.parse(item) : null;
        } catch (error) {
            return null;
        }
    })

    useEffect(() => {
        // w momencie kiedy zmienia sie cos w local storage to lapiesz ten event
        window.addEventListener('storage', () => {
            // pobierasz nowa wartosc
            const v = window.localStorage.getItem(key);
            // przypisujesz nowa wartosc do lokalnego state
            setValue(v ? JSON.parse(v) : null);
        });
    }, [key]);

// zapisujesz nowa wartosc local storage
    const setItem = (val) => {
        try {
            // zapisujesz do lokalnego state
            setValue(val);
            // zapisujesz do localstorage wartosc jsona
            window.localStorage.setItem(key, JSON.stringify(val));
            // rzucasz event storage zeby sie odswiezylo tez w tej samej karcie
            window.dispatchEvent(new Event('storage'));
        } catch (e) {
        }
    }

    return [value, setItem];
}

export const useCart = () => {
    // pobierasz wartosc cart z local storage
    return useLocalStorage('cart');
}

export const useCartItems = () => {
    // pobierasz sobie itemsy z local storage
    let [items, setItems] = useLocalStorage('cart_items');
    let [cart, setCart] = useCart();

    if(items === null) {
        items = [];
    }

    // tutaj przeliczasz totale koszyka
    const calculateTotals = () => {
        if(!cart) {
            cart = {};
        }
            cart.amount = 0;
            cart.items = 0;
        items.forEach(i => {
            cart.amount = i.price * i.quantity;
            cart.items += i.quantity;
        })
        setCart(cart);
    }

    // tutaj ponizej masz 3 funkcje do zarzadzania itemami
    // add do dodawania

    const addItem = (item) => {
        const itemIdx = items.findIndex(i => i.id === item.id);// ta funckja sprawdza czy juz w itemach masz ksiazke z tym id
        if(itemIdx > -1) { // jak istnieje to podwyzszasz tylko quantity
            items[itemIdx].quantity += item.quantity;
        } else { // jak nie to dodajesz nowy element do tablicy
            items.push(item);
        }
        setItems(items);//zapisujesz aktualne itemy
        calculateTotals(); // przeliczasz total koszyka
    }

    const removeItem = (id) => {
        const idx = items.findIndex(i => i.id === id); // szukasz czy masz juz item a jak tak to na jakim indexie
        if(idx !== -1) {
            items.splice(idx, 1); // jak jest to usuwasz
            setItems(items); // i zapisujesz
            calculateTotals();
        }
    }

    const updateItem = (item) => {
        const idx = items.findIndex(i => i.id === item.id); // szukasz czy masz id
        if(idx !== -1) {
            items[idx].quantity = item.quantity; // jak masz to podwyzszasz quantity
            setItems(items);
            calculateTotals();
        }
    }

    // zwracasz tablice ze swoimi hookami
    return [items, addItem, removeItem, updateItem];
}
// no czaje
