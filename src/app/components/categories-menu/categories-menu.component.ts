import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-categories-menu',
  styleUrls: ['./categories-menu.component.scss'],
  templateUrl: './categories-menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuComponent {
  readonly menu$: Observable<ProductModel[]> = this._categoriesService.getCategories();

  constructor(private _categoriesService: CategoriesService) {
  }
}
