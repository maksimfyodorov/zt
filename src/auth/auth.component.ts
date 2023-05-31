import { Component, OnInit } from "@angular/core";
import { AUTH_PASSWORD, PROJECT_NAME } from "../shared/consts/consts";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ControlDataModel } from "../shared/components/inputs/models/control-data.model";
import { AuthService } from "../shared/root-services/auth.service";
import { delay, take } from "rxjs";
import { RouterService } from "../shared/root-services/router.service";
import { ProfileService } from "../shared/root-services/profile.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
    projectName = PROJECT_NAME;
    form!: FormGroup
    emailControlData!: ControlDataModel;
    passwordControlData!: ControlDataModel;
    isLoading = false
    isAuthError = false

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private profileService: ProfileService,
        private router: RouterService,
    ) { }

    ngOnInit() {
        this.initForm()
        this.getControlsData()
    }

    login() {
        this.isLoading = true
        this.isAuthError = false

        this.authService.login()
            .pipe(
                delay(500),
                take(1)
            )
            .subscribe(profiles => {
                const profile = profiles.find(p => p.email === this.form.value.email)
                const isCorrectPassword = this.form.value.password === AUTH_PASSWORD
                if (profile && isCorrectPassword) {
                    profile.role = profile.id % 2 ? 'operator' : 'manager'
                    this.profileService.setProfile(profile)
                    this.router.goToApp()
                } else {
                    this.isAuthError = true
                }
                this.isLoading = false
            })
    }

    private initForm() {
        this.form = this.fb.group({
            email: [""],
            password: [""],
        })
    }

    private getControlsData() {
        this.emailControlData = {
            control: this.form.get('email') as FormControl,
            id: 'auth-page-email',
            label: 'Email address',
        } as ControlDataModel

        this.passwordControlData = {
            control: this.form.get('password') as FormControl,
            id: 'auth-page-password',
            label: 'Password',
            type: 'password'
        } as ControlDataModel
    }
}
