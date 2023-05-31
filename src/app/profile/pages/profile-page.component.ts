import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProfileService, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS } from "../../../shared/root-services/profile.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ControlDataModel } from "../../../shared/components/inputs/models/control-data.model";
import { delay, take } from "rxjs";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
    profile = this.profileService.profile$.value
    form!: FormGroup
    emailControlData!: ControlDataModel;
    firstNameControlData!: ControlDataModel;
    lastNameControlData!: ControlDataModel;
    phoneNumberControlData!: ControlDataModel;
    websiteUrlControlData!: ControlDataModel;
    isLoading = false

    constructor(
        private profileService: ProfileService,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.profileService.isProfilePage = true
        this.initForm()
        this.getControlsData()
    }

    update() {
        this.profileService.updateProfileMessage$.next(null)
        this.isLoading = true

        this.profileService.updateProfile(this.form.value)
            .pipe(
                delay(1000),
                take(1)
            )
            .subscribe(res => {
                res ? this.handleUpdateFail(res) : this.handleUpdateSuccess()
                this.isLoading = false
            })
    }

    private initForm() {
        const [first, last] = this.profile.name.split(" ")
        const phone = this.profile.phone.split(" ")[0].replace(/[-().]/g, '').substring(0,10)
        this.form = this.fb.group({
            email: [{value: this.profile.email, disabled: true}],
            firstName: [first, Validators.required],
            lastName: [last, Validators.required],
            phone: [phone, Validators.required],
            website: [this.profile.website],
        })
    }

    private handleUpdateSuccess() {
        const profile = {
            ...this.profile,
            ...this.form.value,
            name: this.form.value.firstName + " " + this.form.value.lastName
        }
        this.profileService.setProfile(profile)
        this.profileService.updateProfileMessage$.next(UPDATE_PROFILE_SUCCESS)

    }

    private handleUpdateFail(errors: any) {
        Object.keys(errors).forEach(error => {
            this.form.get(error)?.setErrors({backendError: errors[error]})
        })
        this.profileService.updateProfileMessage$.next(UPDATE_PROFILE_FAIL)
    }

    private getControlsData() {
        this.emailControlData = {
            control: this.form.get('email') as FormControl,
            id: 'profile-page-email',
            label: 'Email',
        } as ControlDataModel

        this.firstNameControlData = {
            control: this.form.get('firstName') as FormControl,
            id: 'profile-page-first-name',
            label: 'First name',
        } as ControlDataModel

        this.lastNameControlData = {
            control: this.form.get('lastName') as FormControl,
            id: 'profile-page-last-name',
            label: 'Last name',
        } as ControlDataModel

        this.phoneNumberControlData = {
            control: this.form.get('phone') as FormControl,
            id: 'profile-page-phone-number',
            label: 'Phone number',
            mask: ' (000) 000-00-00',
            prefix: '+7',
        } as ControlDataModel

        this.websiteUrlControlData = {
            control: this.form.get('website') as FormControl,
            id: 'profile-page-website-url',
            label: 'WebSite URL',
        } as ControlDataModel
    }

    ngOnDestroy() {
        this.profileService.isProfilePage = false
    }
}
