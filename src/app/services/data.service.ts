import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private groupsUrl = 'assets/data/worldcup.groups.json';
  private resultsUrl = 'assets/data/Teams final results.json';

  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get(this.groupsUrl);
  }

  getResults(): Observable<any> {
    return this.http.get(this.resultsUrl);
  }
}
