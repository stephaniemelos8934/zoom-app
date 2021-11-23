import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caderno',
  templateUrl: './caderno.component.html',
  styleUrls: ['./caderno.component.css']
})
export class CadernoComponent implements OnInit {

  nomeCaderno: string = 'Meu primeiro caderno'
  conteudo: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
