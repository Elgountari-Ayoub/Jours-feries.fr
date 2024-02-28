import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HolidaysComponent } from './components/holidays/holidays.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'holidays', component: HolidaysComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
