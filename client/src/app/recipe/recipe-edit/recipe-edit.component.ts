import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Recipe } from 'src/app/_models/recipe';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  @HostListener('window:beforeunload', ['$event']) unloadNotification(
    $event: any
  ) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }
  user: User | null = null;
  recipe: Recipe | undefined;

  constructor(
    private accountService: AccountService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => (this.user = user),
    });
  }
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

  updateRecipe() {
    if (this.recipe) {
      this.recipeService
        .updateRecipe(this.recipe?.id, this.editForm?.value)
        .subscribe({
          next: () => {
            this.toastr.success('Recipe updated successfully');
            this.editForm?.reset(this.recipe);
          },
        });
    }
  }
}
