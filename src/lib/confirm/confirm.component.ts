import { Component, OnInit } from '@angular/core';
import { Confirm } from './confirm';

@Component({
    selector: 'ng-plus-confirm',
    styleUrls: ['confirm.component.css', '../assets/animate.css', '../assets/btn.css', '../assets/default-styles.css'],
    templateUrl: 'confirm.component.html'
})

export class ConfirmComponent implements OnInit {

    model: Confirm;

    constructor() {
        this.model = new Confirm();
    }

    ngOnInit() {
    }
}
