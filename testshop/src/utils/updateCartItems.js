export default function updateCartItems(cartItems, index, newProduct){
    if (index > -1) {
        return [...cartItems.slice(0, index), newProduct, ...cartItems.slice(index + 1)]
    } else {
        return [...cartItems, newProduct];
    }
}