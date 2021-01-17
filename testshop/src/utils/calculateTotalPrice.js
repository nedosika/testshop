export default function calculateTotalPrice(cart){
    const reducer = (accumulator, currentValue) => ({...accumulator, total: accumulator.total + currentValue.total});
    return cart.length && cart.reduce(reducer).total;
}
