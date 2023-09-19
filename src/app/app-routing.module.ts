import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreaterStudentComponent } from './creater-student/creater-student.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student', component: CreaterStudentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'page not found',  component: PageNotFoundComponent  },
  { path: ' ', component: NavbarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
