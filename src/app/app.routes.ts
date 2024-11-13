import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAboutComponent } from './component-about/component-about.component';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentServiceComponent } from './component-service/component-service.component';
import { ComponentContactComponent } from './component-contact/component-contact.component';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';


export const routes: Routes = [

  { path: '', component: ComponentHomeComponent },
  { path: 'about', component: ComponentAboutComponent},
  { path: 'services', component: ComponentServiceComponent},
  { path: 'contact', component: ComponentContactComponent },
  { path: 'not-found', component: ComponentNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
