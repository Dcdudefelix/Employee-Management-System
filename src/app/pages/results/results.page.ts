import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  results: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getResults().subscribe(data => {
      this.results = data;
      console.log(this.results); // Add this line to check if data is being loaded
    });
  }

  getFlagFilename(team: string): string {
    return `assets/images/flags/${team.toLowerCase().replace(' ', '_')}.png`;
  }
}
