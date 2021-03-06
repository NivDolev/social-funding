import { ProjectErrorComponent } from './../projects/project-error/project-error.component';
import { ProjectEditComponent } from './../projects/project-edit/project-edit.component';
import { HomeComponent } from './../home/home.component';
import { ProjectsListComponent } from './../projects/projects-list/projects-list.component';
import { UserLoginComponent } from './../accounts/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'projects', component: ProjectsListComponent},
    { path: 'projects/new', component: ProjectEditComponent },
    { path: ':id', component: ProjectEditComponent },
    { path: ':id/edit', component: ProjectEditComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
