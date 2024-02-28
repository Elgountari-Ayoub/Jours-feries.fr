import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {
  private baseUrl: string = 'https://calendrier.api.gouv.fr/jours-feries/'

  constructor(private http: HttpClient) { }
  getHolidays(zone: string, year?: number): Observable<any> {
    // if year is a number had a valid year
    if (year === undefined) {
      return this.http.get(`${this.baseUrl}${zone}.json`);
    } else {
      return this.http.get(`${this.baseUrl}${zone}/${year}.json`);
    }
  }

}
