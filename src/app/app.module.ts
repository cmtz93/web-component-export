import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ GreeterComponent ]
})
export class AppModule implements DoBootstrap {
	constructor(private injector: Injector) {}
	ngDoBootstrap() {
		const myCustomElement = createCustomElement(GreeterComponent, { injector: this.injector });
		customElements.define("app-greeter", myCustomElement)
	}
}
