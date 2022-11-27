import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ProductSearchComponent } from './product-search.component';

@NgModule({
  imports: [MatTableModule, MatCardModule, CommonModule],
  declarations: [ProductSearchComponent],
  providers: [],
  exports: [ProductSearchComponent]
})
export class ProductSearchComponentModule {
}
