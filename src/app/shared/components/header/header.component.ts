import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() appName = '';
  @Input() drawer!: MatDrawer;
  interceptorLoading = false;

  constructor() {}

  ngOnInit(): void {
    // this.loadingIndicatorService.onLoadingChanged.subscribe((loading) => {
    //   this.interceptorLoading = loading;
    // });
  }

  toggle(): void {
    this.drawer.toggle();
  }
}
