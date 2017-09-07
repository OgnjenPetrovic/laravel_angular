import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { ContactResolver } from './shared/resolvers/contact.resolver';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      {
        path: ':id',
        component: ContactDetailsComponent,
        resolve: {
          contact: ContactResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
