import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {
  private baseUrl: string = 'https://calendrier.api.gouv.fr/jours-feries/'

  constructor(private http: HttpClient) { }
  getHolidaysByZone(zone: string): Observable<any> {
    return this.http.get(this.baseUrl + zone);
  }

}
