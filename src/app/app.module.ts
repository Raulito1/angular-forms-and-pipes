import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ShortenPipe } from './pipe-example/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    PipeExampleComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
