import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.scss']
})

 
export class ConsumablesComponent implements OnInit {

  constructor(private router: Router) { }
  
  next(page:string):void{ 
 
    this.router.navigate([`${page}`]);
  }

  ngOnInit(): void {
  }

}
