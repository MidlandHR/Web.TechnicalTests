import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'train-ticket',
  templateUrl: './train-ticket.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./train-ticket.component.scss']
})
export class TrainTicketComponent {
}
