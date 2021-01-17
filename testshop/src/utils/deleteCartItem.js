export default function deleteCartItem(cartItems, index){
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)]
}