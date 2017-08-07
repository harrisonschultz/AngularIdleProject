import { Component, OnInit } from '@angular/core';
import { ResourcesComponent } from './resources/resources.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ResourceService } from './resource.service';
import { WorkersComponent } from './workers/workers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // providers: [ResourceService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public resources: ResourceService) {
  }

  currentFood() {
    console.log(this.resources.food);
  }

  ngOnInit() {
    setInterval(() => {
      this.resources.food = this.resources.food  + (1 * this.resources.foodMultiplier);
      this.resources.wood = this.resources.wood  + (1 * this.resources.woodMultiplier);
      this.resources.stone = this.resources.stone + (1 * this.resources.stoneMultiplier);
    }, 1000);
  }
}
