import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RabbitComponent } from "./rabbit/rabbit.component";

const routes: Routes = [
  {
    path: "rabbit",
    component: RabbitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerbivoresRoutingModule {}
