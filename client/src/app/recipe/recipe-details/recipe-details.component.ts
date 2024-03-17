import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/_models/recipe';
import { RecipesService } from 'src/app/_services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadRecipe();
  }

  loadRecipe() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.recipeService.getRecipe(id).subscribe({
      next: (recipe) => (this.recipe = recipe),
    });
  }
}
