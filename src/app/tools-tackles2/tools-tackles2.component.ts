import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools-tackles2',
  templateUrl: './tools-tackles2.component.html',
  styleUrls: ['./tools-tackles2.component.scss']
})
export class ToolsTackles2Component {

  constructor(private router:Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
