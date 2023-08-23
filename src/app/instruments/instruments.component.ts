import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent {

  constructor(private router: Router) { }
  
  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
  }

}
