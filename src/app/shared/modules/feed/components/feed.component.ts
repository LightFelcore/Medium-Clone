/* Standard Modules */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

/* Interfaces */
import { GetGlobalFeedResponseInterface } from 'src/app/global-feed/types/get-global-feed-response.interface';

/* Serivces */
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  globalFeedState: GetGlobalFeedResponseInterface;

  // Pagination component variables
  baseUrl: string;
  limit: number = environment.limit;
  @Input('currentPage') currentPageProps: number;

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.baseUrl = this.router.url.split('?')[0];
    this.globalFeedState = this.sharedService.getGlobalFeedState();
  }
}
