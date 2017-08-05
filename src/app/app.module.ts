import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources/resources.component';
import { AppComponent } from './app.component';
import { UpgradeComponent } from './upgrade/upgrade.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    UpgradeComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
