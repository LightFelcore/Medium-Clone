/* Standard Modules */
import { Component, Input, OnInit } from '@angular/core';

/* Standard Types */
import { PopularTagType } from 'src/app/shared/types/popular-tags.type';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  @Input('tags') tagsProps: PopularTagType[];

  constructor() { }

  ngOnInit(): void {}

}
