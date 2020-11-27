import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '@core/model/comentario.model';
import { Usuario } from '@core/model/usuario.model';
import { CollecionUsuariosService } from '@core/service-providers/collecion-usuarios/collecion-usuarios.service';
import { ComentarioCollecionService } from '@core/service-providers/comentario-collecion/comentario-collecion.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-perfil-trabajador',
  templateUrl: './perfil-trabajador.component.html',
  styleUrls: ['./perfil-trabajador.component.css']
})
export class PerfilTrabajadorComponent implements OnInit, OnDestroy {
  trabajador$: Subscription;
  usuario$: Observable<Usuario>;
  comentario$: Observable<any>;
  constructor(
    private route: ActivatedRoute, 
    private usuarioSvc: CollecionUsuariosService, 
    private comentarioSvc: ComentarioCollecionService
  ) { }
  ngOnDestroy(): void {
    this.trabajador$.unsubscribe();
  }

  ngOnInit(): void {
    this.trabajador$ = this.route.params.subscribe(e => {
      this.usuario$ = this.usuarioSvc.getUsuario(e.id);
      this.comentario$ = this.comentarioSvc.getComentariosUsuario(e.id);
    });
  }

}
