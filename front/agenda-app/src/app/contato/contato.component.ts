import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;


  constructor(
    private service: ContatoService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    })

  }

  submit(){
    const valores = this.formulario.value;
    let contato: Contato = new Contato(valores.nome, valores.email)

    /*this.service.save(c)
    .subscribe(resposta => {
      console.log(resposta);
    })*/
  }
}
