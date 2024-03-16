import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.loadRecipe();
  }

  loadRecipe() {
    this.recipeService.getRecipes().subscribe({
      next: (recipes) => (this.recipes = recipes),
    });
  }
}
