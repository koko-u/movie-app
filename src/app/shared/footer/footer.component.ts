import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'mvi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  date: Date

  constructor() {
    this.date = new Date()
  }

  ngOnInit(): void {}
}
