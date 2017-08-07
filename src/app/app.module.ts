import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ResourcesComponent } from './resources/resources.component';
import { AppComponent } from './app.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { WorkersComponent } from './workers/workers.component';
import { ResourceService } from './resource.service';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    UpgradeComponent,
    WorkersComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
