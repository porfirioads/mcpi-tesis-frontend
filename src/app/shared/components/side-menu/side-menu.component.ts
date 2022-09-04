import { Component, Input, OnInit } from '@angular/core';
import { IMenuOption } from './menu-option.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() menuOptions: IMenuOption[] = [];

  constructor() {}

  ngOnInit(): void {}
}
