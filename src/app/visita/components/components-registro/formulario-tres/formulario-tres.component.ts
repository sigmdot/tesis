import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-tres',
  templateUrl: './formulario-tres.component.html',
  styleUrls: ['./formulario-tres.component.css']
})
export class FormularioTresComponent implements OnInit {
  url: string | ArrayBuffer;

  constructor() { }
  // tslint:disable-next-line: typedef
  onSelectFile(event) {
    /* if (event.target.files && event.target.files[0]) {
      const boolean = this.validation(event.target.files[0].name)
      if (!boolean){
        this.toastr.warning('Sube un archivo de imagen permitido porfavor');
        this._elementRef.nativeElement.querySelector(`#upload`).value = '';
        this.formFoto.patchValue({
          file: null
        });
        this.url = null;
        return;
      }
      const reader = new FileReader();
      this.formFoto.patchValue({
        file: event.target.files[0]
      });
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      console.log(event.target.files[0].name);

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };



    } */
  }
  ngOnInit(): void {
  }

}
