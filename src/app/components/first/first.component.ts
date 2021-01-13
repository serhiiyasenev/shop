import { Component, OnInit } from '@angular/core';
import {Direction} from '../../enums/direction';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name        = "FirstComponent"
  description = "FirstComponentDescription"
  price       = 123
  category    = Direction.Up
  isAvailable = true
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
