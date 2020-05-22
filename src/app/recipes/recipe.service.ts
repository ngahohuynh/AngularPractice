import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Hamburger', 'Hamburger Recipe',
      'http://icons.iconarchive.com/icons/pixelkit/tasty-bites/256/hamburger-icon.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Beef', 1),
        new Ingredient('Salad', 3)
      ]),
    new Recipe('Sandwich', 'Sandwich',
      'http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32386-sandwich-icon.png',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Ham', 1),
        new Ingredient('Salad', 4),
        new Ingredient('Tomatoes', 4)
      ]),
    new Recipe('Omelette', 'Omelette Recipe',
      'http://icons.iconarchive.com/icons/graphicloads/food-drink/256/egg-2-icon.png',
      [
        new Ingredient('Eggs', 2),
        new Ingredient('Ham', 3)
      ]),
    new Recipe('Steak', 'Steak Recipe',
      'http://icons.iconarchive.com/icons/aha-soft/desktop-buffet/256/Steak-icon.png',
      [
        new Ingredient('Beef', 3),
        new Ingredient('Potatoes', 6)
      ])
  ];

  // recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngrediensToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
