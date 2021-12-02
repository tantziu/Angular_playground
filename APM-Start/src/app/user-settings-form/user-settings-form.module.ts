import { NgModule } from '@angular/core';
import { UserSettingsFormComponent } from './user-settings-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    UserSettingsFormComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'user-settings', component: UserSettingsFormComponent}
    ]),
    SharedModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule.forRoot()
  ]
})
export class UserSettingsFormModule { }
