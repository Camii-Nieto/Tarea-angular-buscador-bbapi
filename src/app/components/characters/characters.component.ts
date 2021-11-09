import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  characters: any = [];
  filtrado: any = [];
  constructor(private service: CharactersService) { }

  async ngOnInit() {
    const characters: any = await this.service.getAll();
    this.characters = characters;
    this.filtrado= characters
  }

  nombre: string = '';
  filtrar() {
    this.filtrado = this.characters.filter((character : any) => {
      return character.name === this.nombre
    })
  }

}

