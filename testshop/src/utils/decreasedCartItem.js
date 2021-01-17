import calculateDiscount from "./clculateDiscount";

export default function decreasedCartItem(product, {id, name, count, price}){
    const discount = calculateDiscount(product.discount, count - 1);

    return {
        id,
        name,
        price,
        count: count - 1,
        discount,
        total: price * (count - 1) - discount
    }
}