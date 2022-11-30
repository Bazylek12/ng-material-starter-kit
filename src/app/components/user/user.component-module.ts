import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './user.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [MatButtonToggleModule, MatCardModule, AsyncPipe, NgIf],
  declarations: [UserComponent],
  providers: [],
  exports: [UserComponent]
})
export class UserComponentModule {
}
