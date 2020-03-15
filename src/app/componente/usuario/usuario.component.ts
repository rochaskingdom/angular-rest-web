import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../service/usuario.service';
import {Observable} from 'rxjs';
import {Usuario} from '../../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });
  }

  deleteUsuario(id: Number) {
    this.usuarioService.deletarUsuario(id).subscribe(data => {
      console.log('Retorno do metodo delete: ' + data);
      this.usuarioService.getUsuarioList().subscribe(data => {
        this.usuarios = data;
      });
    });
  }

}
