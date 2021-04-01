import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
   bmi:number;
   resultado:string;
   interpretacion:string;

  constructor(private route:ActivatedRoute) { 
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if (this.bmi <= 18) {
      this.resultado = 'Bajo de peso';
      this.interpretacion = 'Tienes un peso corporal inferior al normal.';
      console.log(this.interpretacion)
    } else if (this.bmi >= 18.01 && this.bmi <= 24.99) {
      this.resultado = 'Peso normal';
      this.interpretacion = 'Tienes un peso corporal normal.';
    } else if (this.bmi >= 25 && this.bmi <= 29.99) {
      this.resultado = 'Sobre peso';
      this.interpretacion = 'Tienes un peso corporal levemente superior al normal.';
    } else if (this.bmi >= 30 && this.bmi <= 34.99) {
      this.resultado = 'Obesidad';
      this.interpretacion = 'Tienes un peso corporal superior al normal.';
    } else if (this.bmi >= 35) {
      this.resultado = 'Obesidad extrema';
      this.interpretacion = 'Tienes un peso corporal extremadamente superior al normal.';
    }
  }
}
