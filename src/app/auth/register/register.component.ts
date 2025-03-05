import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../shared/form-input/form-input.component';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormInputComponent,
    ReactiveFormsModule,
    RouterLink,
    PrimaryButtonComponent
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
//implements OnInit {
  // registerForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.registerForm = this.fb.group({
  //     matricula: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
  //     nivel: ['', Validators.required],
  //     cpf: ['', Validators.required]
  //   });
  // }

  // get matriculaHasError(): boolean {
  //   const control = this.registerForm.get('matricula');
  //   return control ? control.invalid && (control.dirty || control.touched) : false;
  // }

  // get matriculaErrorMessages(): string[] {
  //   const control = this.registerForm.get('matricula');
  //   if (!control) return [];
  //   const errors = control.errors;
  //   if (!errors) return [];
  //   const messages = [];
  //   if (errors['required']) messages.push('Matrícula é obrigatória');
  //   if (errors['minlength']) messages.push('Matrícula deve ter 11 dígitos');
  //   if (errors['maxlength']) messages.push('Matrícula deve ter 11 dígitos');
  //   return messages;
  // }

  // get nivelHasError(): boolean {
  //   const control = this.registerForm.get('nivel');
  //   return control ? control.invalid && (control.dirty || control.touched) : false;
  // }

  // get nivelErrorMessages(): string[] {
  //   const control = this.registerForm.get('nivel');
  //   if (!control) return [];
  //   const errors = control.errors;
  //   if (!errors) return [];
  //   const messages = [];
  //   if (errors['required']) messages.push('Selecione um nível');
  //   return messages;
  // }

  // get cpfHasError(): boolean {
  //   const control = this.registerForm.get('cpf');
  //   return control ? control.invalid && (control.dirty || control.touched) : false;
  // }

  // get cpfErrorMessages(): string[] {
  //   const control = this.registerForm.get('cpf');
  //   if (!control) return [];
  //   const errors = control.errors;
  //   if (!errors) return [];
  //   const messages = [];
  //   if (errors['required']) messages.push('Matrícula é obrigatória');
  //   if (errors['minlength']) messages.push('Matrícula deve ter 11 dígitos');
  //   if (errors['maxlength']) messages.push('Matrícula deve ter 11 dígitos');
  //   return messages;
  // }
}