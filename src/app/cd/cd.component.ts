import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cd } from 'src/app/models/cd';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements OnInit {
  @Input() leCd!: Cd;
  unCd!: Cd;
  idcd!: string;

  constructor(private cdservice: CdsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idcd = this.route.snapshot.params['id'];
    if (this.idcd !== undefined) {
      this.unCd = this.cdservice.getCdById(+this.idcd);
    } else {

      this.unCd = this.leCd;
    }
  }

  onAddCD() {
    this.leCd.quantite++;
  }
}
