/* Standard Modules */
import { Component, Input, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

/* Custom Services */
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('total') totalProps: number;
  @Input('limit') limitProps: number;
  @Input('url') baseUrlProps: string;
  @Input('currentPage') currentPageProps: number;

  pagesCount: number;
  pages: number[];

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pagesCount = this.sharedService.getPaginationPagesAmount(this.totalProps, this.limitProps);
    this.pages = this.sharedService.range(1, this.pagesCount);
  }

}
