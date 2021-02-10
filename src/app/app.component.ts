import { Component } from '@angular/core';
import { convert } from '../util/convertNumber'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conversions';
  converterType = 'dollar'
  result = ''
  number = ''

  onChangeConverterType(type: string): void {
    this.converterType = type
  }

  onConvert() {
    this.result = convert(this.number, this.converterType === 'dollar')
  }
}
