import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    //id: uuid(),
    name:'Trunk',
    power:10
    }];

@Output()
public Ondelete: EventEmitter<string> = new EventEmitter();

    //OnDeleteId



OnDeleteCharacter(id? : string ):void{
  //TODO: Index capturar
  //console.log('index: '+index)
  if(!id) return;
  //console.log('id: '+id)
  this.Ondelete.emit(id);

}


}
