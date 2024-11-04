import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DBZService {
    public characters: Character[] = [
        {
            name: 'Krillin',
            power: 1000
        },
        {
            name: 'Goku',
            power: 9500
        },
        {
            name: 'Vegeta',
            power: 8500
        }
    ];
    
    onNewCharacter( charac: Character) {
        console.log('MainPage');
        console.log(charac);
        this.characters.push({...charac});
        
    }

    onEventDeleteCharacter(i:number):void {
        this.characters.splice(i,1);
    }
}