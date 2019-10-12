import { Component } from '@angular/core';
import { Fornecedor } from './fornecedor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FORNECEDOR';

  Fornecedor: Fornecedor = new Fornecedor();

  salvar() {
    console.log(this.Fornecedor);
    
  }
}

