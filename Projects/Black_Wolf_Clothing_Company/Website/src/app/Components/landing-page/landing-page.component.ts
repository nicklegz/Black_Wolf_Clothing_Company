import { Component, OnInit } from '@angular/core';

export interface Tile{
  color: string;
  cols: string;
  rows: string;
  image: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent  {

  tiles: Tile[] = [
    {color: '', cols: '4', rows: '3' , image: "/assets/Images/test-landing.jpg"},
    {color: 'grey', cols: '1', rows: '2' , image: ""},
    {color: '#425042', cols: '3', rows: '2' , image: ""},
  ]
}
