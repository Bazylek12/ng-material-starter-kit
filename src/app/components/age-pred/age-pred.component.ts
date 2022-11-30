import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgeModel } from '../../models/age.model';
import { AgePredictionService } from '../../services/age-prediction.service';

@Component({
  selector: 'app-age-pred',
  templateUrl: './age-pred.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredComponent {
  readonly details$: Observable<AgeModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._agePredictionService.getAge(data['name'])));

  constructor(private _agePredictionService: AgePredictionService, private _activatedRoute: ActivatedRoute) {
  }
}
