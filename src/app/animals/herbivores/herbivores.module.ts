import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HerbivoresRoutingModule } from "./herbivores-routing.module";
import { HerbivoresComponent } from "./herbivores.component";
import { DeerComponent } from "./deer/deer.component";
import { RabbitComponent } from "./rabbit/rabbit.component";

@NgModule({
  declarations: [HerbivoresComponent, DeerComponent, RabbitComponent],
  imports: [CommonModule, HerbivoresRoutingModule],
  exports: [HerbivoresComponent]
})
export class HerbivoresModule {}
