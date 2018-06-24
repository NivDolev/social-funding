import { PROJECTS } from '../projects/models/mock-projects';
import { Project } from './../projects/models/project.model';
import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable( { providedIn: 'root' } )
export class ProjectsService {
    constructor() {}

    getProjects(category: String): Observable<Project[]> {
        return of(PROJECTS);
    }

    addProject(project: Project) {
        PROJECTS.push(project);
    }

}
