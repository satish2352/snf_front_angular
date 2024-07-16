import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-clean-water-projects',
  templateUrl: './on-going-projects-clean-water-projects.component.html',
  styleUrls: ['./on-going-projects-clean-water-projects.component.css']
})
export class OnGoingProjectsCleanWaterProjectsComponent implements OnInit {
  upcomingEvents: any;
  activeTab: number = 1; // Initialize activeTab with a default value

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getupcomingevents().subscribe(
      (response) => {
        console.log(response);
        this.upcomingEvents = response;
        if (this.upcomingEvents.length > 0) {
          this.activeTab = this.upcomingEvents[0].id; // Set activeTab to the ID of the first event
        }
      },
      (error) => {
        console.error('Error fetching project data', error);
      }
    );
  }

  // Method to handle tab click and set activeTab
  setActiveTab(tabId: number): void {
    this.activeTab = tabId;
  }

  // Optional method to check if a tab is active
  isTabActive(tabId: number): boolean {
    return this.activeTab === tabId;
  }
}
