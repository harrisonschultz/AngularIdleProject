import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources/resources.component';
import { AppComponent } from './app.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { WorkersComponent } from './workers/workers.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
