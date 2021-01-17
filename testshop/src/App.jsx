import React, {useState, createContext} from 'react';
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import addItemToCart from "./actions/addItemToCart";
import decItemFromCart from "./actions/decItemFromCard";
import delItemFromCart from "./actions/deleteItem";

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

const App = () => {
    const [state, setState] = useState(initialState);

    const addItem = (id) => addItemToCart(state, setState, id);
    const decreaseItem = (id) => decItemFromCart(state, setState, id);
    const deleteItem = (id) => delItemFromCart(state, setState, id)

    return (
        <ShopContext.Provider value={[state, addItem, decreaseItem, deleteItem]}>
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