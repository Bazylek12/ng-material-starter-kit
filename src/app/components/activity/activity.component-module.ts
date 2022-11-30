import { NgModule } from '@angular/core';
import { ActivityComponent } from './activity.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    AsyncPipe,
    NgIf
  ],
  declarations: [ActivityComponent],
  providers: [],
  exports: [ActivityComponent]
})
export class ActivityComponentModule {
}
