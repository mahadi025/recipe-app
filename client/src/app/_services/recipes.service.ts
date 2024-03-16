import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recipe } from '../_models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipe[]>(
      this.baseUrl + 'recipe/recipes',
      this.getHttpOptions()
    );
  }

  getRecipe(id: number) {
    return this.http.get<Recipe>(
      this.baseUrl + 'recipe/recipes/' + id,
      this.getHttpOptions()
    );
  }

  getHttpOptions() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    return {
      headers: new HttpHeaders({
        Authorization: 'Token ' + user.token,
      }),
    };
  }
}
