import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools-tackles',
  templateUrl: './tools-tackles.component.html',
  styleUrls: ['./tools-tackles.component.scss']
})
export class ToolsTacklesComponent {

  constructor(private router: Router) { }
  
  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
  }

}
