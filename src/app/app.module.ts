import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnimalsComponent } from "./animals/animals.component";
import { AnimalsModule } from "./animals/animals.module";

@NgModule({
  declarations: [AppComponent, AnimalsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, AnimalsComponent]
})
export class AppModule {}
