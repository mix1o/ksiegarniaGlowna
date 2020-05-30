import {useState, useEffect, useReducer} from 'react';

export const useLocalStorage = (key) => {

    const [value, setValue] = useState(() => {
        try {
           
            const item = window.localStorage.getItem(key);
            
            return item ? JSON.parse(item) : null;
        } catch (error) {
            return null;
        }
    })

    useEffect(() => {
        
        window.addEventListener('storage', () => {
           
            const v = window.localStorage.getItem(key);
           
            setValue(v ? JSON.parse(v) : null);
        });
    }, [key]);


    const setItem = (val) => {
        try {
           
            setValue(val);
           
            window.localStorage.setItem(key, JSON.stringify(val));
            
            window.dispatchEvent(new Event('storage'));
        } catch (e) {
        }
    }

    return [value, setItem];
}

export const useCart = () => {


    const clearCart = () => {
        window.localStorage.removeItem('cart');
        window.localStorage.removeItem('cart_items');
    }

    return [...useLocalStorage('cart'), clearCart];
}

export const useCartItems = () => {
    
    let [items, setItems] = useLocalStorage('cart_items');
    let [cart, setCart] = useCart();

    if(items === null) {
        items = [];
    }


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

  

    const addItem = (item) => {
        const itemIdx = items.findIndex(i => i.id === item.id);
        if(itemIdx > -1) { 
            items[itemIdx].quantity += item.quantity;
        } else { 
            items.push(item);
        }
        setItems(items);
        calculateTotals();
    }

    const removeItem = (id) => {
        const idx = items.findIndex(i => i.id === id);
        if(idx !== -1) {
            items.splice(idx, 1); 
            setItems(items); 
            calculateTotals();
        }
    }

    const updateItem = (item) => {
        const idx = items.findIndex(i => i.id === item.id); 
        if(idx !== -1) {
            items[idx].quantity = item.quantity; 
            setItems(items);
            calculateTotals();
        }
    }

  

    return [items, addItem, removeItem, updateItem];
}

