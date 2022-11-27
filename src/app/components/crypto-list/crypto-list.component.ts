import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptosService } from '../../services/cryptos.service';

@Component({
  selector: 'app-crypto-list',
  styleUrls: ['./crypto-list.component.scss'],
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent {
  readonly symbols$: Observable<CryptoModel[]> = this._cryptosService.getSymbols();

  constructor(private _cryptosService: CryptosService) {
  }
}
