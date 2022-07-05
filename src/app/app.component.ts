import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    count = 0;
    nome = 'Ana Flávia Veloso';
    text = '';

    pessoas = [
      {
        nome: "Ana",
        sobrenome: "Veloso"
      },
      {
        nome: "Matias",
        sobrenome: "Silva"
      },
      {
        nome: "Aline",
        sobrenome: "Costa"
      },
      {
        nome: "Jack",
        sobrenome: "Cunha"
      }
    ]

    constructor(){

    }

    ngOnInit(){
      console.log(this.pessoas);
      let interval = setInterval(() => {
        this.count++;
        if(this.count === 10) {
          clearInterval(interval)
        }
      }, 1000)
    }

    clicou(nome: string): void {
      console.log('Clicou em mim', nome)
    }
}
