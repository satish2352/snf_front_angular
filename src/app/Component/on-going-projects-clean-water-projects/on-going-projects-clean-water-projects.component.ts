import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-clean-water-projects',
  templateUrl: './on-going-projects-clean-water-projects.component.html',
  styleUrls: ['./on-going-projects-clean-water-projects.component.css']
})
export class OnGoingProjectsCleanWaterProjectsComponent implements OnInit {
  name = '';
  image: File | null = null;
  upcomingEvents: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  projectDetails: any = { id: 0, name: '', category: '', ProjectTitle: '', Paragraph: '', mainImageUrl: '', images: [] };

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getupcomingevents().subscribe(
      (response) => {
        console.log(response);
        this.upcomingEvents = response;
       
      },
      (error) => {
        console.error('Error fetching project data', error);
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
}
