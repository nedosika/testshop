import React, {useState, createContext} from 'react';
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export const ShopContext = createContext();

const initialState = {
    products: [
        {
            id: 0,
            name: "apple",
            img: "/assets/images/apples.jpg",
            price: 8,
            discount: 0
        },
        {
            id: 1,
            name: "banana",
            img: "/assets/images/banan.jpg",
            price: 10,
            discount: 0
        },
        {
            id: 2,
            name: "papaya",
            img: "/assets/images/papayya.jpg",
            price: 10,
            discount: 5
        }
    ],
    cart: []
}

const calculateDiscount = (discount, count) => {
    return Math.floor(count / 3 ) * discount;
}
const updateCartItem = (product, item = {}) => {
    const {
        id = product.id,
        name = product.name,
        count = 0,
    } = item;

    const discount = calculateDiscount(product.discount, count + 1);

    return {
        id,
        name,
        price: product.price,
        count: count + 1,
        discount,
        total: product.price * (count + 1) - discount
    }
}
const updateCartItems = (cartItems, index, newProduct) => {
    if (index > -1) {
        return [...cartItems.slice(0, index), newProduct, ...cartItems.slice(index + 1)]
    } else {
        return [...cartItems, newProduct];
    }
}
const deleteCartItem = (cartItems, index) => {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)]
}
const decreasedCartItem = ({id, name, count, price, discount}) => {
    return {
        id,
        name,
        price,
        count: count - 1,
        discount: calculateDiscount(discount, count - 1),
        total: price * (count - 1) - calculateDiscount(discount, count - 1)
    }
}

const App = () => {
    const [state, setState] = useState(initialState);

    const addItemToCard = (id) => {
        const product = state.products.find(product => product.id === id);
        const index = state.cart.findIndex(item => item.id === id);
        const item = state.cart[index];
        const newProduct = updateCartItem(product, item);

        setState({...state, cart: updateCartItems(state.cart, index, newProduct)});
    }
    const decItemFromCard = (id) => {
        const decIndex = state.cart.findIndex(item => item.id === id);
        const decItem = decreasedCartItem(state.cart[decIndex]);

        if (decItem.count > 0)
            setState({...state, cart: updateCartItems(state.cart, decIndex, decItem)})
        else
            setState({...state, cart: deleteCartItem(state.cart, decIndex)});
    }
    const delItemFromCard = (id) => {
        const delIndex = state.cart.findIndex(item => item.id === id)

        setState({...state, cart: deleteCartItem(state.cart, delIndex)});
    }

    return (
        <ShopContext.Provider value={[state, addItemToCard, decItemFromCard, delItemFromCard]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Products/>
                    </Route>
                    <Route path="/card">
                        <Cart/>
                    </Route>
                </Switch>
            </Router>
        </ShopContext.Provider>
    );
}

export default App;