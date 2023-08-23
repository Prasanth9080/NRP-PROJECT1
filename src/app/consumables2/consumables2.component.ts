import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumables2',
  templateUrl: './consumables2.component.html',
  styleUrls: ['./consumables2.component.scss']
})
export class Consumables2Component implements OnInit {

  constructor(private router:Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
