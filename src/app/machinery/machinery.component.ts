import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.scss']
})
export class MachineryComponent {

  constructor(private router: Router) { }
  
  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
  }

}
