import { CanDeactivateFn } from '@angular/router';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<
  RecipeEditComponent
> = (component) => {
  if (component.editForm?.dirty) {
    return confirm(
      'Are you sure you want to continue? Any unsaved changes will be lost'
    );
  }

  return true;
};
