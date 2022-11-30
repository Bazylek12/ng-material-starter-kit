import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AgePredComponent } from './age-pred.component';
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, JsonPipe, NgIf, AsyncPipe],
  declarations: [AgePredComponent],
  providers: [],
  exports: [AgePredComponent]
})
export class AgePredComponentModule {
}
