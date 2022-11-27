import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {HolidaysListComponent} from './components/holidays-list/holidays-list.component';
import {CheckboxCategoryListComponent} from './components/checkbox-category-list/checkbox-category-list.component';
import {CategoriesMenuComponent} from './components/categories-menu/categories-menu.component';
import {ProductSearchComponent} from './components/product-search/product-search.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CategoryListComponentModule} from './components/category-list/category-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CryptoListComponentModule} from './components/crypto-list/crypto-list.component-module';
import {CryptosServiceModule} from './services/cryptos.service-module';
import {HolidaysListComponentModule} from './components/holidays-list/holidays-list.component-module';
import {HolidaysServiceModule} from './services/holidays.service-module';
import {
  CheckboxCategoryListComponentModule
} from './components/checkbox-category-list/checkbox-category-list.component-module';
import {CategoriesMenuComponentModule} from './components/categories-menu/categories-menu.component-module';
import {ProductSearchComponentModule} from './components/product-search/product-search.component-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';
import {EmployeeFormComponentModule} from './components/employee-form/employee-form.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';
import {LoginFormComponentModule} from './components/login-form/login-form.component-module';
import {LoginServiceModule} from './services/login.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: ProductListComponent}, {
    path: 'categories',
    component: CategoryListComponent
  }, {path: 'crypto', component: CryptoListComponent}, {
    path: 'public-holidays',
    component: HolidaysListComponent
  }, {path: 'checkbox-categories', component: CheckboxCategoryListComponent}, {
    path: 'categories-menu',
    component: CategoriesMenuComponent
  }, {path: 'product-search', component: ProductSearchComponent}, {
    path: 'create-product',
    component: ProductFormComponent
  }, {path: 'create-employee', component: EmployeeFormComponent}, {
    path: 'login',
    component: LoginFormComponent
  }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptosServiceModule, HolidaysListComponentModule, HolidaysServiceModule, CheckboxCategoryListComponentModule, CategoriesMenuComponentModule, ProductSearchComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeesServiceModule, LoginFormComponentModule, LoginServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
