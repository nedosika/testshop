import decreasedCartItem from "../utils/decreasedCartItem";
import updateCartItems from "../utils/updateCartItems";
import deleteCartItem from "../utils/deleteCartItem";

export default function decItemFromCart(state, setState, id){
    const product = state.products.find(product => product.id === id);
    const decIndex = state.cart.findIndex(item => item.id === id);
    const decItem = decreasedCartItem(product, state.cart[decIndex]);

    if (decItem.count > 0)
        setState({...state, cart: updateCartItems(state.cart, decIndex, decItem)})
    else
        setState({...state, cart: deleteCartItem(state.cart, decIndex)});
}