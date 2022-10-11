import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Bruno",
      "Type": "House",
      "Price": 15000
    },
    {
      "Id": 2,
      "Name": "Heloiza",
      "Type": "House",
      "Price": 98547
    },
    {
      "Id": 3,
      "Name": "Mia",
      "Type": "House",
      "Price": 96598
    },
    {
      "Id": 4,
      "Name": "Mel",
      "Type": "House",
      "Price": 66545
    },
    {
      "Id": 5,
      "Name": "Charles",
      "Type": "House",
      "Price": 55148
    },
    {
      "Id": 6,
      "Name": "Julia",
      "Type": "House",
      "Price": 15115
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
