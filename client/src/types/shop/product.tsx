import { Image } from '../shared/image';

export type iProduct = {
    id: number;
    title: string;
    description: string;
    price: number;
    salePrice: number;
    quantity: number;
    images: Image[];
};