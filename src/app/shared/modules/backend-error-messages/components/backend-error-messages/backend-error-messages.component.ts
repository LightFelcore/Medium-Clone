/* Standard Modules */
import { Component, Input, OnInit } from '@angular/core';

/* Custom Interfaces */
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {

  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | null;

  errorMessages: string[];

  constructor() { }

  ngOnInit(): void {
    if(this.backendErrorsProps != null){
      if(typeof this.backendErrorsProps == 'object') {
        this.errorMessages = Object.keys(this.backendErrorsProps)
          .map((name: string) => {
            const messages = this.backendErrorsProps![name].join(' ');
            return `${name} ${messages}`;
          }
        )
      } 
      // HTML Markup as backend response
      else if(typeof this.backendErrorsProps == 'string') {
        let errorMessagesContainer = document.querySelector('.error-messages-container');
        if(errorMessagesContainer) errorMessagesContainer.innerHTML = this.backendErrorsProps;
      }
    } 
  }


}
