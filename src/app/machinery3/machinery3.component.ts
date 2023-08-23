import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-machinery3',
  templateUrl: './machinery3.component.html',
  styleUrls: ['./machinery3.component.scss']
})
export class Machinery3Component {

  constructor(private router: Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
