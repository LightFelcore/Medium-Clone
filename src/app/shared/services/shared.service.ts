/* Standard Modules */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/* Interfaces */
import { GetGlobalFeedResponseInterface } from 'src/app/global-feed/types/get-global-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  globalFeedState: GetGlobalFeedResponseInterface;
  canFetchGlobalFeedData: boolean;

  constructor() { }

  // Obtain global feed state on feed level
  getGlobalFeedState(): GetGlobalFeedResponseInterface {
    return this.globalFeedState;
  }

  // set global feed state on global feed level
  setGlobalFeedState(globalFeedState: GetGlobalFeedResponseInterface) {
    this.globalFeedState = globalFeedState;
  }

  // range function
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map(element => element + start);
  }

  getPaginationPagesAmount(total: number, limit: number): number {
    return Math.ceil(total / limit);
  }


}
