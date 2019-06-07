import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgLoaderComponent } from './svg-loader/svg-loader.component';
import { SvgCanvasLoaderComponent } from './svg-canvas-loader/svg-canvas-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgLoaderComponent,
    SvgCanvasLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
