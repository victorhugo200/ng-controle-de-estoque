import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageErrorComponent implements OnInit {
  @Input() message!: string;

  constructor() {}

  ngOnInit(): void {}
}
