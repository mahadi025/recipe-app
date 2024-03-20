import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recipe } from '../_models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipe[]>(this.baseUrl + 'recipe/recipes');
  }

  getRecipe(id: string) {
    return this.http.get<Recipe>(this.baseUrl + 'recipe/recipes/' + id);
  }

  updateRecipe(id: string, recipe: Recipe) {
    return this.http.patch(this.baseUrl + `recipe/recipes/${id}/`, recipe);
  }
}
