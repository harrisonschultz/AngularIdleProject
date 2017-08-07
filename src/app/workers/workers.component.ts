import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  farmers = 0;
  miners = 0;
  lumberjacks = 0;
  sculptors = 0;
  lumberjacksCost = { food: 10, wood: 5, stone: 5 };
  farmersCost = { food: 10, wood: 5, stone: 5 };
  minersCost = { food: 10, wood: 5, stone: 5 };
  sculptorsCost = { food: 10, wood: 5, stone: 5 };

  constructor(public resources: ResourceService) {

  }



  buyFarmers(amt: number) {
    this.farmers++;
    this.resources.foodMultiplier++;
    this.resources.food = this.resources.food - this.farmersCost.food;
    this.resources.wood = this.resources.wood - this.farmersCost.wood;
    this.resources.stone = this.resources.stone - this.farmersCost.stone;
  }
  buyMiners(amt: number) {
    this.miners++;
    this.resources.stoneMultiplier++;
    this.resources.food = this.resources.food - this.minersCost.food;
    this.resources.wood = this.resources.wood - this.minersCost.wood;
    this.resources.stone = this.resources.stone - this.minersCost.stone;
  }
  buyLumberjacks(amt: number) {
    this.lumberjacks++;
    this.resources.woodMultiplier++;
    this.resources.food = this.resources.food - this.lumberjacksCost.food;
    this.resources.wood = this.resources.wood - this.lumberjacksCost.wood;
    this.resources.stone = this.resources.stone - this.lumberjacksCost.stone;
  }
  buySculptors(amt: number) {
    this.sculptors++;
    this.resources.food = this.resources.food - this.sculptorsCost.food;
    this.resources.wood = this.resources.wood - this.sculptorsCost.wood;
    this.resources.stone = this.resources.stone - this.sculptorsCost.stone;
  }

  ngOnInit() {
  }
}
