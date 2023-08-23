import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manpower2',
  templateUrl: './manpower2.component.html',
  styleUrls: ['./manpower2.component.scss']
})
export class Manpower2Component {

  constructor(private router:Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
