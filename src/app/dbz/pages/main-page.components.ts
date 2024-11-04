import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.components.html'
})

export class MainPageComponent implements OnInit {
    
    constructor(private readonly dbzService: DBZService) { }

    ngOnInit() { }
   
    get characters(): Character [] {
        return [...this.dbzService.characters]; //mantener el objeto inmutable
    }

    onDeleteCharacter(id: string): void {
        this.dbzService.onEventDeleteCharacter(id);
    }

    onAddCharacter(n: Character): void {
        this.dbzService.onNewCharacter(n);
    }
}