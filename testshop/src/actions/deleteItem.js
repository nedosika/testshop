import deleteCartItem from "../utils/deleteCartItem";

export default function delItemFromCart(state, setState, id){
    const delIndex = state.cart.findIndex(item => item.id === id)

    setState({...state, cart: deleteCartItem(state.cart, delIndex)});
}
