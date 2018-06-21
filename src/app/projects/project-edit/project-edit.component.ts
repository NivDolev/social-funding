import { FormsModule } from '@angular/forms';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  project: Project;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.clearProject();
  }

  onAddProject(): void {
    this.projectsService.addProject(this.project);
    this.clearProject();
  }

  clearProject(): void {
    this.project = new Project('', new Date(), +'', '');
  }
}

