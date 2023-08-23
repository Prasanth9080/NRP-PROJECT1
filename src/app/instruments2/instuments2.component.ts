import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-instuments2',
  templateUrl: './instuments2.component.html',
  styleUrls: ['./instuments2.component.scss']
})
export class Instuments2Component {

  constructor(private router:Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }


}
