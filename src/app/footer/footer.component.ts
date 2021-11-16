import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MessageInputComponent } from './message-input/message-input.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  @ViewChild(MessageInputComponent) child;

  constructor() {}

  ngAfterViewInit(): void {}
}
