import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../models/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})

export class ProjectsListComponent implements OnInit , OnDestroy {

  projectsList: Project[];
  activateSubscription: Subscription;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.activateSubscription = this.projectsService.getProjects().subscribe(
      (projects => this.projectsList = projects)
    );
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }
}
