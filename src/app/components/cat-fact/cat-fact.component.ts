import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatModel } from '../../models/cat.model';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactComponent {
  readonly fact$: Observable<CatModel> = this._catsService.getFact();

  constructor(private _catsService: CatsService) {
  }
}
