import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { SelectFieldComponent } from './select-field/select-field.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, ProfileEditorComponent, SelectFieldComponent]
})
export class AppComponent implements OnInit{
  
  constructor(){}

  ngOnInit(): void {
    
  }
}
