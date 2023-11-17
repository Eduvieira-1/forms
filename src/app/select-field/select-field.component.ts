import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup, FormsModule, FormBuilder } from '@angular/forms';

type State = { city: string; ab: string };

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
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
  
  @Input() states: State[] = [
    {city: 'Minas', ab: 'MG'},
    {city: 'Bahia', ab: 'BA'},
    {city: 'Rio', ab: 'RJ'},
  ]
  

  stateText: string = '';
  displayText = '';
  protected disabled: boolean = true;
  protected value: string = '';

  onChanged: any = () => {};
  onTouched: any = () => {};


  writeValue(value: string){
    this.value = value;
  }
 
  registerOnChange(fn: (city: string) => void) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
 
  onSelectChange(selectedValue: string): void {
    this.displayText = selectedValue;
    // You can also perform additional actions here if needed
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setState(state: State): void {
    if (!this.disabled) {
      this.stateText = state.ab;
      this.writeValue(state.city);
      this.onChanged(state.city);
      this.onTouched();
    }
  }
}
