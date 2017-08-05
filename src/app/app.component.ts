import { Component, OnInit } from '@angular/core';
import { ResourcesComponent } from './resources/resources.component'
import { UpgradeComponent }  from './upgrade/upgrade.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  resources = new ResourcesComponent;
  upgrades = new UpgradeComponent;

  constructor() {
  }

  ngOnInit(){
  setInterval(() => {
      console.log("interval");
    }, 1000);
  }
}
