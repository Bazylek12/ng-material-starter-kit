import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent {
  readonly data$: Observable<ActivityModel> = this._activityService.getActivity();

  constructor(private _activityService: ActivityService) {
  }
}
