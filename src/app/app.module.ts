import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InterpolationSyntaxComponent } from './interpolation-syntax/interpolation-syntax.component';
import { DirectivesComponent } from './directives/directives.component';
import { ExampleDirective } from './custom-directives/example.directive';
import { StructuralExampleDirective } from './custom-directives/structural-example.directive';
import { CustomIfDirective } from './custom-directives/custom-if.directive';
import { CustomForDirective } from './custom-directives/custom-for.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, DataBindingComponent, InterpolationSyntaxComponent, DirectivesComponent, ExampleDirective, StructuralExampleDirective, CustomIfDirective, CustomForDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
