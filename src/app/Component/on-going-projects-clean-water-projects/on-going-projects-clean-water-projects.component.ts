import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-clean-water-projects',
  templateUrl: './on-going-projects-clean-water-projects.component.html',
  styleUrls: ['./on-going-projects-clean-water-projects.component.css']
})
export class OnGoingProjectsCleanWaterProjectsComponent {
  name = '';
  image: File | null = null;
  OnGoingProject_Clean_Water_ProjectData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getOnGoingProject_Clean_Water_Project().subscribe(
      (response) => {
        console.log(response);
        this.OnGoingProject_Clean_Water_ProjectData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
}
