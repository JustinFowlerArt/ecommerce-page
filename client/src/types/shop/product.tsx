import { Image } from '../shared/image';

export type iProduct = {
    title: string;
    description: string;
    price: number;
    salePrice: number;
    images: Image[];
};