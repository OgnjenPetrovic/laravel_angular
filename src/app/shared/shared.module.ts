import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactResolver } from './resolvers/contact.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  	ContactsService,
    ContactResolver
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }
