import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TrainTicketComponent } from './components/train-ticket/train-ticket.component';
const routes: Routes = [
  {
    path: 'train-ticket',
    component: TrainTicketComponent
  }
];

@NgModule({
  declarations: [
    TrainTicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class TrainTicketModule { }
