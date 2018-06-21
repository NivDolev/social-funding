import { ProjectEditComponent } from './../projects/project-edit/project-edit.component';
import { HomeComponent } from './../home/home.component';
import { ProjectsListComponent } from './../projects/projects-list/projects-list.component';
import { HighlightsComponent } from './../highlights/highlights.component';
import { UserLoginComponent } from './../accounts/user-login/user-login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'new', component: ProjectEditComponent },
    { path: 'projects', component: ProjectsListComponent }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }