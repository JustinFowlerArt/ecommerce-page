import { iProduct } from '../../types/shop/product';

export type iCartItem = {
    product: iProduct;
    quantity: number;
}