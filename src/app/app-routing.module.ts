import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrochureListComponent} from "./components/brochure-list/brochure-list.component";
import {BrochureDetailsComponent} from "./components/brochure-details/brochure-details.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'brochures', component: BrochureListComponent},
  {path: 'brochureDetail', component: BrochureDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
//we
}
