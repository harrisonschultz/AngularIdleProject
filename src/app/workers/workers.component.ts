import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  farmers = 0;
  miners = 0;
  lumberjacks = 0;

  constructor() { }

  ngOnInit() {
  }

  buyFarmer(){
    this.farmers++;
  }
  buyMiner(){
    this.miners++;
  }
  buyLumberjack(){
    this.lumberjacks++;
  }
}
