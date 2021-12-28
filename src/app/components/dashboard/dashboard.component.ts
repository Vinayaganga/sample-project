import { ProjectService } from './../../services/project.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
projects:any[]=[];
  constructor(private router:Router, private projectServiec:ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }
deleteProject(projectId:string){
this.projectServiec.deleteProject(projectId);
this.getProjects();
}
getProjects(){
 this.projects= this.projectServiec.getProject();
}
createProject(){
this.router.navigate(['/create-project']);
}

startTimer(index:number) {
    this.projectServiec.projects[index].timeLapse = setInterval(() => {
     // if(this.projects[index].timeSpent < 9999999999999999999999999999999999999) {
        this.projects[index].timeSpent++;
     // }
    },1000)
  }

  stopTimer(index:number) {
    this.projectServiec.projects[index].timeSpent=this.projects[index].timeSpent;
    clearInterval(this.projectServiec.projects[index].timeLapse);
  }

}
