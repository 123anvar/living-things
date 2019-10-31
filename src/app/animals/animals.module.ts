import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnimalsRoutingModule } from "./animals-routing.module";
import { AnimalsComponent } from "./animals.component";
import { HerbivoresModule } from "./herbivores/herbivores.module";

@NgModule({
  declarations: [AnimalsComponent],
  imports: [CommonModule, HerbivoresModule, AnimalsRoutingModule]
})
export class AnimalsModule {}
