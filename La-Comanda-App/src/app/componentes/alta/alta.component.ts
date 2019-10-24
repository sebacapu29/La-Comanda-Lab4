import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  enviarEmpleado(){
    
  }
  backToHome(){
    this.router.navigateByUrl('');
  }
}
