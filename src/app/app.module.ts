import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CkeditorPageComponent } from './ckeditor-page/ckeditor-page.component';

import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [		
    AppComponent,
      CkeditorPageComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
