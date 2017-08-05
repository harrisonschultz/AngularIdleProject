import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
