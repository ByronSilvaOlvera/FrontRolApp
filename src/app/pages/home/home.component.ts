import { Component, OnInit } from '@angular/core';
import { EntidadUser } from '../../models/rol-app';
import { RolappuserService } from '../../services/rolappuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarioName : string ="Pablo";

  Usuarios : EntidadUser [] = [];
  rowData : any [] ;
  constructor( private rolapp: RolappuserService ) { }

  public defaultColDef ;

  columnDefs = [
    { headerName: 'Nombre' ,field: 'make' },
    { headerName: 'Edad' ,field: 'model' },
    { headerName: 'Email' ,field: 'price'},
    { headerName: 'roles' ,field: 'roles'},
    { headerName: 'Aplicacion' ,field: 'aplicacion'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
    let TrowData : any [] = []
    this.rolapp.getUsuarios().subscribe(
      data => {
        this.Usuarios = [ ...data.entidad ];
        //console.log( this.Usuarios); 
        data.entidad.map( (dt:EntidadUser) => {
          TrowData.push(
            { make: dt.nombre+' '+ dt.apellido 
              ,model: dt.edad 
              ,price: dt.email
              ,roles: 'Roles'
              ,aplicacion : 'Aplicacion' 
            },
          )        
        })
        this.rowData = TrowData; 
    });
      //console.log(this.rowData);

      this.defaultColDef = {
        resizable: true,
      };
      
  }




  nuevaTarea(){

  }

}
