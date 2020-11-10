import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AvisoTrabajo } from '@core/model/aviso-trabajo.model';
import { AvisosTrabajosService } from '@core/service-providers/avisos-trabajos/avisos-trabajos.service';
import { FireauthService } from '@core/services/fireauth/fireauth.service';
import { ToastrService } from 'ngx-toastr';
import { MapaCrearAvisoComponent } from '../mapa-crear-aviso/mapa-crear-aviso.component';
declare var $: any;

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.component.html',
  styleUrls: ['./crear-aviso.component.css']
})
export class CrearAvisoComponent implements OnInit {
  @ViewChild(MapaCrearAvisoComponent) mapa: MapaCrearAvisoComponent;
  mapaObtenerCentro: number[] = [];
  usuario = null;
  formularioCreacion: FormGroup = new FormGroup({
    nombreAviso: new FormControl('', [Validators.required, ]),
    desc: new FormControl('', Validators.required)
  });

  constructor(private authSvc: FireauthService, private toastr: ToastrService, private avisoSvc: AvisosTrabajosService) {}
  // tslint:disable-next-line: typedef
  async userQuePublica(){
    const user = await this.authSvc.getUserAuth();
    return user;
  }
  ngOnInit(): void {
    this.userQuePublica().then((e) => {
      this.usuario = e.uid;
    });
  }

  // tslint:disable-next-line: typedef
  obtenerMiUbicacion(){
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.mapaObtenerCentro = [position.coords.longitude, position.coords.latitude];
      });
      console.log(this.mapaObtenerCentro);
    } else {
      alert('La geolocalización parece no estar disponible en tú navegador :(');
    }
  }
  // tslint:disable-next-line: typedef
  crearAviso(){
    const nombreAviso = this.formularioCreacion.value.nombreAviso;
    const descAviso = this.formularioCreacion.value.desc;
    if (this.formularioCreacion.invalid){
      if (nombreAviso === ''){
        this.toastr.warning('Debe ponerle nombre al aviso');
      }
      if (descAviso === ''){
        this.toastr.warning('No ha descrito su problema');
      }
      return null;
    }
    else{
      const avisoTrabajo: AvisoTrabajo = {
        nombreAviso: null,
        descAviso: null,
        idUsuarioPosteador : null,
        fechaCreacion: null,
        ubicacion: null
      };
      avisoTrabajo.nombreAviso = nombreAviso;
      avisoTrabajo.descAviso = descAviso;
      avisoTrabajo.estado = 'activo';
      avisoTrabajo.fechaCreacion = new Date();
      avisoTrabajo.idUsuarioPosteador = this.usuario;
      avisoTrabajo.ubicacion = [this.mapa.obtenerLatLngMark().lng, this.mapa.obtenerLatLngMark().lat];
      this.avisoSvc.createAviso(avisoTrabajo);
      $('#modalCrearAviso').modal('toggle');
    }
  }

}
