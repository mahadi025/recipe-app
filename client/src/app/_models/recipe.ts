import { Ingredient } from './ingredient';
import { Tag } from './tag';

export interface Recipe {
  id: string;
  title: string;
  time_minutes: number;
  price: string;
  tags: Tag[];
  ingredients: Ingredient[];
  description: string;
  image: string;
  link: string;
}
