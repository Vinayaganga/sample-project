import { Project } from './../models/projects';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
projects:Project[]=[];
  constructor() { }

  createProject(project:Project){
this.projects.push(project);
  }
  deleteProject(projectId:string){
    this.projects=this.projects.filter(ele=>ele.projectId!==projectId);
  }
  getProject(){
    return this.projects;
  }
}
