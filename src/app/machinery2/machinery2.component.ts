import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-machinery2',
  templateUrl: './machinery2.component.html',
  styleUrls: ['./machinery2.component.scss']
})
export class Machinery2Component {

  constructor(private router:Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }
}
