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
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom-pipes/custom.pipe';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ParentComponent } from './component-communication/parent-to-child/parent/parent.component';
import { ChildComponent } from './component-communication/parent-to-child/child/child.component';
import { ParentComponent as ParentComponent2 } from './component-communication/child-to-parent/parent/parent.component';
import { ChildComponent as ChildComponent2 } from './component-communication/child-to-parent/child/child.component';
import { Parent3Component } from './component-communication/child-to-child/parent3/parent3.component';
import { Child3aComponent } from './component-communication/child-to-child/child3a/child3a.component';
import { Child3bComponent } from './component-communication/child-to-child/child3b/child3b.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataBindingComponent,
    InterpolationSyntaxComponent,
    DirectivesComponent,
    ExampleDirective,
    StructuralExampleDirective,
    CustomIfDirective,
    CustomForDirective,
    PipesComponent,
    CustomPipe,
    ComponentCommunicationComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent2,
    ChildComponent2,
    Parent3Component,
    Child3aComponent,
    Child3bComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CustomPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
