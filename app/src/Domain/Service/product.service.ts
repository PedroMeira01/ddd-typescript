import Product from '../Domain/Entity/product';

export default class ProductService {
    static increasePrice(products: Product[], percentage: number):void {
        products.forEach(product => {
            product.changePrice((product.price * percentage)/100 + product.price)
        });
    }
}