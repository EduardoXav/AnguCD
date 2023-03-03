import { Component, Input } from '@angular/core';
import { Cd } from 'src/app/models/cd';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent {
  @Input() leCd!: Cd;
}
