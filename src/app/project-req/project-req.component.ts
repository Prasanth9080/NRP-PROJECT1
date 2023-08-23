import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-req',
  templateUrl: './project-req.component.html',
  styleUrls: ['./project-req.component.scss']
})


export class ProjectReqComponent{

  constructor(private router:Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

}
