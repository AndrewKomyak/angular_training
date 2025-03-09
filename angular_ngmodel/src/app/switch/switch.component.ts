import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
}

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {

  state = 'off';

  private onChange = (value: any) => { }

  setState(state: string) {
    this.state = state;

    this.onChange(state);
  }

  writeValue(obj: any): void {
    this.state = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }
}
