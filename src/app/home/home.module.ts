import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { AdministrationEducationComponent } from './administration-education/administration-education.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AdministrationEducationComponent,
    HeroComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
