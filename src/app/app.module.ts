import {CommonModule} from '@angular/common';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {MatStepperModule} from '@angular/material/stepper';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const ngElement = createCustomElement(AppComponent, { injector });
    customElements.define('stepper-component', ngElement);
  }

  ngDoBootstrap() {}
}
