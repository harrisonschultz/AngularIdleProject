import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ResourceService } from '../resource.service';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})


export class ResourcesComponent{
// Resources

  constructor(public resources: ResourceService){}


  stoneClick(amt: number){
    this.resources.stone = this.resources.stone + amt;
  }
  woodClick(amt: number){
    this.resources.wood = this.resources.wood + amt;
  }
  foodClick(amt: number){
    this.resources.food = this.resources.food + amt;
  }

}
