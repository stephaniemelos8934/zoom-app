import { Component } from '@angular/core';

@Component({
  selector: 'app-caderno',
  templateUrl: './caderno.component.html',
  styleUrls: ['./caderno.component.css']
})
export class CadernoComponent {

  nomeCaderno = 'Meu primeiro caderno';
  conteudo: string | undefined;

  constructor() { 
    //
  }

}
