import { Component, OnInit } from '@angular/core';
import { Cd } from 'src/app/models/cd';

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCDsComponent implements OnInit {
  listcd!: Cd[];

  ngOnInit(): void {

    this.listcd = [
      {
        id: 1,
        title: 'The Dark Side of the Moon',
        author: 'Pink Floyd',
        price: 10,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
        dateDeSortie: new Date('1973-03-01'),
        quantite: 10,
      }, {
        id: 2,
        title: 'The Wall',
        author: 'Pink Floyd',
        price: 5,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Pink_Floyd_-_The_Wall.jpg',
        dateDeSortie: new Date('1979-11-30'),
        quantite: 15,
      }, {
        id: 3,
        title: 'Wish You Were Here',
        author: 'Pink Floyd',
        price: 7,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Pink_Floyd_-_Wish_You_Were_Here.jpg',
        dateDeSortie: new Date('1975-09-12'),
        quantite: 7,
      }
    ];
  }
}
