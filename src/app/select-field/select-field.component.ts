import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectFieldComponent,
      multi: true
    }
  ]
})
export class SelectFieldComponent implements ControlValueAccessor {

  states = [
    { name: 'MG'},
    { name: 'MT'},
    { name: 'RJ'},
    { name: 'BA'},
    { name: 'SP'},
  ];

  onChange: any = () => {};
  onTouched: any = () => {};
  touched = false;
  disabled = false;


  writeValue(state: string[]){
    this.states = [{name: state[0]}]
  }
  registerOnChange(onChange: any){
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any){
    this.onTouched = onTouched;
  }
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  ngOnInit(){
  }
 
}
