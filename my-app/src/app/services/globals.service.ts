import { Injectable } from '@angular/core';
import { LanguageBase } from '../shared/language';

@Injectable()

export class GlobalsService {
    public ip:string = "";
    public username:string = "";
    public isLoggedIn = false;
    public isDev = true;
    public lang: LanguageBase;
    public spinnerConfig = {
        insideElement: {
            bdColor: null,
            size: null,
            color: null,
            type: null
        },
        main:{
            bdColor: 'rgba(51, 51, 51, 0.8)',
            size: 'medium',
            color: 'rgba(51, 51, 51, 0.8)',
            type: 'ball-fussion'
        }
    }
    constructor() {
    }

}