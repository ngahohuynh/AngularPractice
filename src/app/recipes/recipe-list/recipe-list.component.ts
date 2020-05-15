import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Hamburger Recipe', 'http://icons.iconarchive.com/icons/pixelkit/tasty-bites/256/hamburger-icon.png'),
    new Recipe('Sandwich', 'Sandwich', 'http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32386-sandwich-icon.png'),
    new Recipe('Omelette', 'Omelette Recipe', 'http://icons.iconarchive.com/icons/graphicloads/food-drink/256/egg-2-icon.png'),
    new Recipe('Steak', 'Steak Recipe', 'http://icons.iconarchive.com/icons/aha-soft/desktop-buffet/256/Steak-icon.png')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
