import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

type CardContent = {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  cards = Observable<[]>;


  public carouselImages: any[] = [];
  currentIndex = 0;




  constructor() {
    // veranderen van de logica hieronder om het duidelijker en dynamisher te maken

    // const cards: CardContent[]= [];
    // for (let i = 0; i < this.images.length; i++) {
    //   cards.push({
    //     title: `Card ${i + 1}`,
    //     description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. `,
    //     imageUrl: `https://source.unsplash.com/random/500X500?${this.images[i]}`,
    //   });
    // }

    this.carouselImages = [
      {
        title: "Bulk Sale",
        imageUrl: 'assets/img/BulkSale.jpg',
        description: 'Week 47-48'
      },
      {
        title: "Electronics",
        imageUrl: 'assets/img/fillerElectronica.jpg',
        description: 'Week 47-48'
      },
      {
        title: "Biological Product",
        imageUrl: 'assets/img/Biologisch.jpg',
        description: 'Week 47-48'
      },
    ];
  }

  ngOnInit(): void {


  }


  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }

}
