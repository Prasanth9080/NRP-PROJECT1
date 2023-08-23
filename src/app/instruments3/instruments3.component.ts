import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-instruments3',
  templateUrl: './instruments3.component.html',
  styleUrls: ['./instruments3.component.scss']
})
export class Instruments3Component {

  constructor(private router: Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
