import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

export interface INotification {
  type: 'vote' | 'comment';
  text: string;
}

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  public notifications: Array<INotification>;

  constructor(activatedRoute: ActivatedRoute) {
    this.notifications = activatedRoute.snapshot.data.notifications;
  }
}
