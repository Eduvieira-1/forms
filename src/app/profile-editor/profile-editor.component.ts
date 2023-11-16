import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { client } from './client';
import { SelectFieldComponent } from '../select-field/select-field.component';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectFieldComponent],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  profileForm: FormGroup;


  ngOnInit() {
    this.createForm(new client());
  }

  createForm(client: client) {
    this.profileForm = this.formBuilder.group({
      firstName: this.formBuilder.control(client.firstName, [Validators.required]),
      lastName: this.formBuilder.control(client.lastName),
      email: this.formBuilder.control(client.email, Validators.required),
      password: this.formBuilder.control(client.password, Validators.required),
      stateX: this.formBuilder.control(client.state),
      address: this.formBuilder.group({
        street: this.formBuilder.control(client.street),
        zip: this.formBuilder.control(client.zip),
        city: this.formBuilder.control(client.city),
        state: this.formBuilder.control(client.state)
      }),
      aliases:
        this.formBuilder.array([this.formBuilder.control('')])
    })
  }

  // ngOnInit(): void {
  //   this.profileForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: [''],
  //     password: ['', Validators.required],
  //     address: this.formBuilder.group({
  //       street: [''],
  //       city: [''],
  //       state: [''],
  //       zip: [1],
  //     }),
  //     aliases:
  //     this.formBuilder.array([this.formBuilder.control('')])
  //   })
  // }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value)
  }
}
