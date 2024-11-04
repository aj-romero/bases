import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class DBZService {
    public characters: Character[] = [
        {
            id: v4(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: v4(),
            name: 'Goku',
            power: 9500
        },
        {
            id: v4(),
            name: 'Vegeta',
            power: 8500
        }
    ];
    
    onNewCharacter( charac: Character) {
        const newCharacter: Character = { id: v4(), ...charac};
        this.characters.push(newCharacter);
        console.log(this.characters)
    }

    onEventDeleteCharacter(id:string):void {
       // this.characters.splice(i,1);
       this.characters = this.characters.filter((c) => c.id !==id);
    }
}