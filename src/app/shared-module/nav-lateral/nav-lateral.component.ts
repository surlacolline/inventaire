import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-lateral',
  templateUrl: './nav-lateral.component.html',
  styleUrls: ['./nav-lateral.component.scss']
})
export class NavLateralComponent implements OnInit {

  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor() { }

  ngOnInit() {
  }



}
