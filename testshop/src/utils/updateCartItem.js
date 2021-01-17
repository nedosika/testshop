import calculateDiscount from "./clculateDiscount";

export default function updateCartItem(product, item = {}){
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