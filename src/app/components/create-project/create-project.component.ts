import { Router } from '@angular/router';
import { ProjectService } from './../../services/project.service';
import { Project } from './../../models/projects';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
project:FormGroup;
  constructor(private fb:FormBuilder, private projectService:ProjectService, private snackbar:MatSnackBar, private router:Router) {
    this.project=this.fb.group({
      projectName: ['', Validators.required],
      description:['']
    })
   }

  ngOnInit(): void {
  }
  createProject(project:any){
    console.log(project);
    const projectInfo= {
      ...project,
      projectId: this.getProjectId(),
      timeSpent:0
    }
    this.projectService.createProject(projectInfo);
    console.log(this.projectService.getProject());
    this.snackbar.open('Project Created Successfully!',);
    this.router.navigate(['/dashboard']);

  }
  /* async test(){
    const res=await this.waitForExecution();
  }
  waitForExecution(){
    return new Promise(resolve)
  } */

  getProjectId(){

    const projectList=this.projectService.projects.length
    return (projectList+1).toString();
  }
  cancel(){
    this.router.navigate(['/dashboard']);
  }
isValidForm(){
  return this.project.valid;
}
}
