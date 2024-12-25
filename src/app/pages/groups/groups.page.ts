import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  groups: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getGroups().subscribe(data => {
      this.groups = data.groups;
    });
  }

  getFlagFilename(team: string): string {
    return `assets/images/flags/${team.toLowerCase().replace(' ', '_')}.png`;
  }
}
