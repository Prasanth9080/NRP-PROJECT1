import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-safety-tools3',
  templateUrl: './safety-tools3.component.html',
  styleUrls: ['./safety-tools3.component.scss']
})
export class SafetyTools3Component {

  constructor(private router: Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
