import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-safety-tools',
  templateUrl: './safety-tools.component.html',
  styleUrls: ['./safety-tools.component.scss']
})
export class SafetyToolsComponent {

  constructor(private router: Router) { }
  
  next(page:string):void{ 
 
    this.router.navigate([`${page}`]); 
  }

  ngOnInit(): void {
  }
}
