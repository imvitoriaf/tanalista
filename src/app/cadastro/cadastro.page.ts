import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  color: any;

  form: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrar(): void {
    if (this.form.valid) {
      this.router.navigate(['/home']);
      return;
    }
    this.form.markAllAsTouched();
  }






}
