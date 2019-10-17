import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
