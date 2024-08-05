import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/form/create-thought/create-thought.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListThoughtComponent } from './components/form/list-thought/list-thought.component';
import { ThoughtComponent } from './components/form/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcludeThoughtComponent } from './components/form/exclude-thought/exclude-thought.component';
import { EditThoughtComponent } from './components/form/edit-thought/edit-thought.component';
import { ButtonLoadMoreComponent } from './components/form/list-thought/button-load-more/button-load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    ExcludeThoughtComponent,
    EditThoughtComponent,
    ButtonLoadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
