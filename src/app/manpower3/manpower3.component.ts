import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manpower3',
  templateUrl: './manpower3.component.html',
  styleUrls: ['./manpower3.component.scss']
})
export class Manpower3Component {

  constructor(private router: Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
