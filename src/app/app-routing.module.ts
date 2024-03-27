import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/native-federation";

const routes: Routes = [
  {
    path: 'agenda',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module'
      })
        .then(m => m.SaAgendaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
