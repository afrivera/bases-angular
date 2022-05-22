import { Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>La base es: {{ base }}</h3>

        <button (click)="acumular( base )"> +{{ base }}</button>
        <span> {{ count }}</span>
        <button (click)="acumular( -base )"> -{{ base }}</button>

    `

})
export class ContadorComponent {
    public title: string = 'Contador App';
    public count: number = 10;
    public base: number = 5;
    
    acumular( valor: number ){
        this.count += valor
    }
}