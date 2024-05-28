import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  name = '';
  image: File | null = null;
  carrosalData: any;
  newsData:any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  constructor(private service: ServiceService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.fetchCarrosalData();
    this.fetch2cardsData();
    this.fetch4CardsData();
    this.fetchsupporterData();
    this.fetchNewsData();

  }

  fetchCarrosalData() {
    this.service.getCarrosalData().subscribe(
      (response) => {
        console.log(response);
        this.carrosalData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
//News data from Home
   fetchNewsData() {
  this.service.getHome_Media().subscribe(
  (response) => {      console.log(response);
   this.newsData = response;
     }
    );
 }
 



  // 2 cards 
  showFullPara2cards: false = false;
  toggleFullPara2cards(item: { showFullPara2cards: boolean; }): void {
    item.showFullPara2cards = !item.showFullPara2cards;
  }

  name2 = '';
  para2 = '';
  image2: File | null = null;
  Home_2_Cards_Data: any;
  selectedItem2: any = { _id: '', name2: '', para2: '', imageUrl: '' };

  fetch2cardsData() {
    this.service.get_Home_2_Cards().subscribe(
      (response) => {
        console.log(response);
        this.Home_2_Cards_Data = response;
      }
    );
  }

  onFileChange2(event: any): void {
    this.image2 = event.target.files[0];
  }


  // 4 Cards
  showFullPara4cards: false = false;
  toggleFullPara4cards(item: { showFullPara4cards: boolean; }): void {
    item.showFullPara4cards = !item.showFullPara4cards;
  }
  name4 = '';
  para4 = '';
  image4: File | null = null;
  Home_4_Cards_Data: any;
  selectedItem4: any = { _id: '', name4: '', para4: '', imageUrl: '' };

  fetch4CardsData() {
    this.service.get_Home_4_Cards().subscribe(
      (response) => {
        console.log(response);
        this.Home_4_Cards_Data = response;
      }
    );
  }
  onFileChange4(event: any): void {
    this.image = event.target.files[0];
  }



  // supporter image 
  namesup = '';
  image_sup: File | null = null;
  support_data: any;
  selectedItem_sup: any = { _id: '', namesup: '', imageUrl: '' };

  fetchsupporterData() {
    this.service.getSupporters().subscribe(
      (response) => {
        console.log(response);
        this.support_data = response;
      }
    );
  }

  onFileChange_sup(event: any): void {
    this.image = event.target.files[0];
  }
}
