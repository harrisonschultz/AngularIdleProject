import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})


export class ResourcesComponent{
//Resources
  food = 0;
  stone = 0;
  water = 0;
  favor = 0;

  testResources(){
    console.log('test');
  }
}
