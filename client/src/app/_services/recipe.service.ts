import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recipe } from '../_models/recipe';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  baseUrl = environment.apiUrl;
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  getRecipes() {
    if (this.recipes.length > 0) return of(this.recipes);
    return this.http.get<Recipe[]>(this.baseUrl + 'recipe/recipes').pipe(
      map((recipes) => {
        this.recipes = recipes;
        return recipes;
      })
    );
  }

  getRecipe(id: string) {
    const recipe = this.recipes.find((x) => x.id == id);
    if (recipe) return of(recipe);
    return this.http.get<Recipe>(this.baseUrl + 'recipe/recipes/' + id);
  }

  updateRecipe(id: string, recipe: Recipe) {
    return this.http.patch(this.baseUrl + `recipe/recipes/${id}/`, recipe).pipe(
      map(() => {
        const index = this.recipes.indexOf(recipe);
        this.recipes[index] = { ...this.recipes[index], ...recipe };
      })
    );
  }
}
