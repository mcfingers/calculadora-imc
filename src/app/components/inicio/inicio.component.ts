import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25;
  peso = 60;
  altura = 170;
  sexo = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  masculino(){
    this.sexo = 'M';
  }
  
  femenino(){
    this.sexo = 'F';
  }

  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100,2);
    this.router.navigate(['/resultado', BMI.toFixed(2)]);
  }
}
