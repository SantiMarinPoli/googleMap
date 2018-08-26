import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import { EditarMapaComponent } from '../../components/mapa/editar-mapa.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  // GETITEM() su funcion es recibir el dato del localStorage y 
  // la funcion setItem() es asignar la informacion del localStorage en el marcador

  constructor(public snackBar:MatSnackBar,
  			  public dialog: MatDialog) { 

  	if (localStorage.getItem('marcadores')) {
  		this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
  	}

  }

  ngOnInit() {
  }

  agregarMarcador(evento){

  	const coords:{lat:number,lng:number}= evento.coords;

  	const nuevoMarcador = new Marcador(coords.lat,coords.lng);

  	this.marcadores.push(nuevoMarcador);

  	this.guardarStorage();

  	this.snackBar.open('Marcador Agregado', 'Cerrar',{duration:3000});

  }

  borrarMarcador(i:number){

  	this.marcadores.splice(i,1);
  	this.guardarStorage();
  	this.snackBar.open('Marcador Borrado', 'Cerrar',{duration:3000});
  }

  editarMarcador(marcador:Marcador):void{

  	const dialogRef = this.dialog.open(EditarMapaComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (!result) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;
      this.guardarStorage();
      this.snackBar.open('Marcador actualizado.', 'Cerrar',{duration:3000});

    });

  }

  guardarStorage(){
  	localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }


}
