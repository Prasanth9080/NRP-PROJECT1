import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools-tackles3',
  templateUrl: './tools-tackles3.component.html',
  styleUrls: ['./tools-tackles3.component.scss']
})
export class ToolsTackles3Component {

  constructor(private router: Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
