import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
// import { UserSettingsFormComponent } from '../user-settings-form/user-settings-form.component';

@NgModule({
  declarations: [
    StarComponent,
    // UserSettingsFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    // UserSettingsFormComponent
  ]
})
export class SharedModule { }
