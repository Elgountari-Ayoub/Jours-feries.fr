import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FrenchTerritories } from 'src/app/Model/FrenchTerritories';
import { HolidaysService } from 'src/app/services/holidays.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  public holidays: any = {};

  public zone: FrenchTerritories | null = null;
  public year?: number;
  public territories: string[] = Object.values(FrenchTerritories);
  public minYear: number;
  public maxYear: number;

  constructor(private route: ActivatedRoute, private holidaysService: HolidaysService, private router: Router, private translate: TranslateService) {

    translate.setDefaultLang('en');
    translate.use('en');
    const currentYear = new Date().getFullYear();
    this.minYear = currentYear - 24;
    this.maxYear = currentYear + 4;
  }
  ngOnInit() {
  }
  fetchHolidays() {
    if (this.zone && this.year !== undefined && this.isYearInRange(this.year)) {
      this.getHolidays(this.zone, this.year);
    } else {
      alert('Veuillez sélectionner un territoire français valide et une année dans la plage autorisée.');
      this.holidays = [];
    }
  }

  public getHolidays(zone: string, year?: number) {
    this.holidaysService.getHolidays(zone, year).subscribe(res => {
      this.holidays = res;
    });
  }

  private isFrenchTerritory(value: string): value is FrenchTerritories {
    return Object.values(FrenchTerritories).includes(value as FrenchTerritories);
  }
  private isYearInRange(year: number): boolean {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 24;
    const maxYear = currentYear + 4;

    console.log(currentYear, minYear, maxYear, year);

    return year >= minYear && year <= maxYear;
  }

  switchLang(e: Event) {
    const target = e.target as HTMLTextAreaElement
    this.translate.use(target.value);
  }
}
