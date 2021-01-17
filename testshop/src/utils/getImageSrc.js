export default function getImageSrc(products, item){
    const index = products.findIndex(product => product.id === item.id);
    return products[index].img;
}