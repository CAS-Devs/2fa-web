import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/token.service';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: LoginService) {

  }

  public credentials: Login

  ngOnInit(): void {
    this.credentials = new Login();
  }

  public login() {
    this.service.post(this.credentials).subscribe(resultado => {
      console.log(resultado);
    }, erro => {
      console.log(erro);
      // alert("Sem acesso ao servidor");
    });
    // this.router.navigate(['token']);
  }


}
