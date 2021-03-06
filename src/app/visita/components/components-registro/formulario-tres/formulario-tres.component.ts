import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-tres',
  templateUrl: './formulario-tres.component.html',
  styleUrls: ['./formulario-tres.component.css']
})
export class FormularioTresComponent implements OnInit {
  url: string | ArrayBuffer;
  formFoto = new FormGroup({
    foto: new FormControl(null, Validators.required)
  });

  // tslint:disable-next-line: variable-name
  constructor(private _elementRef: ElementRef, private toastr: ToastrService) { }
  // tslint:disable-next-line: typedef
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const booleanVal = this.validation(event.target.files[0].name);
      if (!booleanVal){
        this.toastr.warning('Sube un archivo de imagen permitido porfavor');
        this._elementRef.nativeElement.querySelector(`#upload`).value = null;
        this.formFoto.patchValue({
          foto: null
        });
        this.url = null;
        return;
      }
      const reader = new FileReader();
      this.formFoto.patchValue({
        foto: event.target.files[0]
      });
      reader.readAsDataURL(event.target.files[0]); // read file as data url


      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }
  // tslint:disable-next-line: typedef
  validation(name: string){
    const ext = name.substring(name.lastIndexOf('.'));
    const extensionesPermitidas = ['.png', '.jpg', '.jpeg'];
    let validacionAca = false;
    extensionesPermitidas.forEach(e => {
      if (ext === e){
        validacionAca = true;
      }
    });

    return validacionAca;
  }
  ngOnInit(): void {
  }

}
