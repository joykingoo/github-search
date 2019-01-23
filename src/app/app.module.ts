import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { RepositoryComponent } from './repository/repository.component';
import { HighlightDirective } from './highlight.directive';
import { CustompipePipe } from './custompipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoryComponent,
    HighlightDirective,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProfileComponent
      }, {
        path: 'repo',
        component: RepositoryComponent
      },
    ])
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
