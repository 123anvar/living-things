import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarnivoresRoutingModule } from './carnivores-routing.module';
import { CarnivoresComponent } from './carnivores.component';
import { LionComponent } from './lion/lion.component';


@NgModule({
  declarations: [CarnivoresComponent, LionComponent],
  imports: [
    CommonModule,
    CarnivoresRoutingModule
  ]
})
export class CarnivoresModule { }
