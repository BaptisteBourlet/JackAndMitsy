import { AboutComponent } from './component/about/about.component';
import { InspiComponent } from './component/inspi/inspi.component';
import { ProjectComponent } from './component/project/project.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'https://baptistebourlet.github.io/jackAndMitsy/project',
    component: ProjectComponent,
  },
  {
    path: 'https://baptistebourlet.github.io/jackAndMitsy/inspiration',
    component: InspiComponent,
  },
  {
    path: 'https://baptistebourlet.github.io/jackAndMitsy/contact',
    component: ContactComponent,
  },
  {
    path: 'https://baptistebourlet.github.io/jackAndMitsy/about',
    component: AboutComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
