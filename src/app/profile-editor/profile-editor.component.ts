import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { client } from './client';
import { SelectFieldComponent } from '../select-field/select-field.component';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectFieldComponent, FormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {

  form: FormGroup;

  @Input() disableCreateEvent: boolean = true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      state: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', ],
      email: ['', [, Validators.email]],
      password: ['', [, Validators.minLength(6)]],
      street: ['', ],
      zip: [''],
      city: ['', Validators.required],
    });
  }

  // ngOnInit() {
  //   this.createForm(new client());
  // }

  // createForm(client: client) {
  //   this.profileForm = this.formBuilder.group({
  //     firstName: this.formBuilder.control(client.firstName, [Validators.required]),
  //     lastName: this.formBuilder.control(client.lastName),
  //     email: this.formBuilder.control(client.email, Validators.required),
  //     password: this.formBuilder.control(client.password, Validators.required),
  //     name: this.formBuilder.control(client.name),
  //     state: this.formBuilder.array(client.state), 
  //     address: this.formBuilder.group({
  //       street: this.formBuilder.control(client.street),
  //       zip: this.formBuilder.control(client.zip),
  //       city: this.formBuilder.control(client.city),
  //       // state: this.formBuilder.control(client.state)
  //     }),
  //     aliases:
  //       this.formBuilder.array([this.formBuilder.control('')])
  //   })
  // }

  

  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.aliases.push(this.formBuilder.control(''));
  // }

  onSubmit(): void {
    console.warn(this.form.value)
  }
}
