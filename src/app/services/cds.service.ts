import { Injectable } from '@angular/core';
import { Cd } from '../models/cd';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getAllCDs(): Cd[] {
    return [
      
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
          title: 'graduation',
          author: 'kanye west',
          price: 5,
          thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Graduationcover.png',
          dateDeSortie: new Date('2007-09-11'),
          quantite: 15,
        }, {
          id: 3,
          title: 'Wholle Lotta Red',
          author: 'Playboi Carti',
          price: 7,
          thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Whole_Lotta_Red.png',
          dateDeSortie: new Date('2020-07-31'),
          quantite: 1,
        }
      ];
  }
}
