import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    public get profile$() { return of({}); }
}
