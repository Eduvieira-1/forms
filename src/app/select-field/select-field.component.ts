import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup, FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,],
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
export class SelectFieldComponent implements ControlValueAccessor, OnInit {
  
  @Input() parentGroup: FormGroup;

  name: string = '';

  constructor(private formBuilder: FormBuilder) {
  }
  
 
  
  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void{
   
  }

  writeValue(name: string){
    this.name = name;
  }
  registerOnChange(fn: any){
    this.onChange = fn;
  }
  registerOnTouched(fn: any){
    this.onTouched = fn;
  }

 
}
