/* Standard Modules */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="spinner-border text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  `,
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
