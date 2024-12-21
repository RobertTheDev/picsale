import type IPrice from './Price';
import type ISeller from './Seller';

export default interface IPhoto {
  id: string;
  category: string;
  description: string;
  title: string;
  url: string;
  price: IPrice;
  seller: ISeller;
}
