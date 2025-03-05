import { UpperCasePipe } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe
  ],
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ]
})
export class FormInputComponent{
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() hasError: boolean = false;
  @Input() errorMessages: string[] = [];
  @Input() formControlName: string = '';
  @Input() parentFormGroup!: FormGroup;
  @Input() options: string[] = [];
  @Input() max: number = 100;
  @Input() min: number = 1;

  // get options(): string[] {
  //   return this._options;
  // }

  // // ControlValueAccessor implementation
  // onChange: any = () => {};
  // onTouched: any = () => {};

  // writeValue(value: any): void {
  //   // Implementação para escrever o valor no input
  // }

  // registerOnChange(fn: any): void {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: any): void {
  //   this.onTouched = fn;
  // }

  // setDisabledState?(isDisabled: boolean): void {
  //   // Implementação para desabilitar o input
  // }

  // handleChange(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement | HTMLSelectElement;
  //   this.onChange(inputElement.value);
  // }

  // handleBlur(): void {
  //   this.onTouched();
  // }
}