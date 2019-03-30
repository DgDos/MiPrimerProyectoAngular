import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FabianComponent } from './fabian/fabian.component';
import { JaimeComponent } from './jaime/jaime.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'heroe', component: JaimeComponent},
  {path: 'villano', component: FabianComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    FabianComponent,
    JaimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }
