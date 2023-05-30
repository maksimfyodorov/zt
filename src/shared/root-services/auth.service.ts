import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProfileService } from "./profile.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private profileService: ProfileService,
    ) {}

    login(): Observable<any[]> {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    }

    logout() {
        this.profileService.destroyProfile()
    }
}
