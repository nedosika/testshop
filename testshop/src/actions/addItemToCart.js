import updateCartItem from "../utils/updateCartItem";
import updateCartItems from "../utils/updateCartItems";

export default function addItemToCart(state, setState, id){
    const product = state.products.find(product => product.id === id);
    const index = state.cart.findIndex(item => item.id === id);
    const item = state.cart[index];
    const newProduct = updateCartItem(product, item);

    setState({...state, cart: updateCartItems(state.cart, index, newProduct)});
}