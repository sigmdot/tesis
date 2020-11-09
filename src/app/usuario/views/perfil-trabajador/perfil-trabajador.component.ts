import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-perfil-trabajador',
  templateUrl: './perfil-trabajador.component.html',
  styleUrls: ['./perfil-trabajador.component.css']
})
export class PerfilTrabajadorComponent implements OnInit, OnDestroy {
  trabajador$: Subscription;
  usuario$: Observable<Usuario>;
  constructor(private route: ActivatedRoute, private usuarioSvc: CollecionUsuariosService) { }
  ngOnDestroy(): void {
    this.trabajador$.unsubscribe();
    console.log('L O L');
  }

  ngOnInit(): void {
    this.trabajador$ = this.route.params.subscribe(e => {
      console.log(e.id);
      this.usuario$ = this.usuarioSvc.getUsuario(e.id);
    });
  }

}
