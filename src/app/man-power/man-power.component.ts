import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-man-power',
  templateUrl: './man-power.component.html',
  styleUrls: ['./man-power.component.scss']
})
export class ManPowerComponent {

  constructor(private router: Router) { }
  
  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
  }

}
