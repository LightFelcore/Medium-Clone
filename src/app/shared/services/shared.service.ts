/* Standard Modules */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/* Interfaces */
import { GetGlobalFeedResponseInterface } from 'src/app/global-feed/types/get-global-feed-response.interface';
import { GetYourFeedResponseInterface } from 'src/app/your-feed/types/get-your-feed-response.interface';
import { GetTagFeedResponseInterface } from 'src/app/tag-feed/types/get-tag-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  globalFeedState: GetGlobalFeedResponseInterface;
  yourFeedState: GetYourFeedResponseInterface;
  tagFeedState: GetTagFeedResponseInterface;
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

  // Obtain your feed state on feed level
  getYourFeedState(): GetYourFeedResponseInterface {
    return this.yourFeedState;
  }

  // set your feed state on your feed level
  setYourFeedState(yourFeedState: GetYourFeedResponseInterface) {
    this.yourFeedState = yourFeedState;
  }

  // Obtain your feed state on feed level
  getTagFeedState(): GetTagFeedResponseInterface {
    return this.tagFeedState;
  }

  // set your feed state on your feed level
  setTagFeedState(tagFeedState: GetTagFeedResponseInterface) {
    this.tagFeedState = tagFeedState;
  }

  // range function
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map(element => element + start);
  }

  getPaginationPagesAmount(total: number, limit: number): number {
    return Math.ceil(total / limit);
  }


}
