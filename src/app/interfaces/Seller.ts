import type IPhoto from './Photo';

export default interface ISeller {
  id: string;
  firstName: string;
  imageUrl: string | null;
  lastName: string;
  photos: IPhoto[];
}
