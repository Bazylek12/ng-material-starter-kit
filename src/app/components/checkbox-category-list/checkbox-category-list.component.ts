import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-checkbox-category-list',
  styleUrls: ['./checkbox-category-list.component.scss'],
  templateUrl: './checkbox-category-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoryListComponent {
  readonly categories$: Observable<ProductModel[]> = this._categoriesService.getCategories();

  constructor(private _categoriesService: CategoriesService) {
  }
}
