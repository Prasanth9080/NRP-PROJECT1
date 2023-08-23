import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-safety-tools2',
  templateUrl: './safety-tools2.component.html',
  styleUrls: ['./safety-tools2.component.scss']
})
export class SafetyTools2Component {

  constructor(private router:Router) { }

  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
    
  }

}
