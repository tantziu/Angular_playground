import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from './user-settings.service';
import { IUserSettings } from './user-settings';

@Component({
  selector: 'pm-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: IUserSettings = {
    name: 'Tania',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };

  singleModel: string = "On";
  startDate!: Date;
  startTime!: Date;
  userRating: number = 0;
  isReadonly: boolean = false;
  maxRating: number = 10;

  postError: boolean = false;
  postErrorMessage: string = '';
  subscriptionTypes!: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();

    this.startDate = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
    
  }

  onSubmit(form: NgForm) {
      console.log("in onSubmit: ", form.value);

      // if (form.valid) {
      //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      //     result => console.log('success: ', result),
      //     error => this.onHttpError(error)
      //   );
      // } else {
      //   this.postError = true;
      //   this.postErrorMessage= "Please fix the above errors"
      // }
  }

  onBlur(field: NgModel) {
    console.log("onBlur: ", field.valid);
  }
}
