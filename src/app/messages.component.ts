/**
 * Created by jimbomilk on 3/12/2017.
 */
import { Component,Input, OnInit } from '@angular/core';
import { AppConfig } from './app.config';
import {Screen} from "./screen";

@Component({
  moduleId: module.id,
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: [ './messages.component.css' ]
})
export class MessagesComponent implements OnInit {
  messages: Object[];
  private channel1;
  private channel2;
  private subscribed;
  private location;
  @Input() pusher;

  constructor(private config: AppConfig ) {
  }

  getMessages(): void {

    this.channel1 = this.pusher.subscribe(this.location);
    this.channel1.bind('App\\Events\\MessageEvent', (data) => {
      this.newMessage(data.message);
    });

    this.channel2 = this.pusher.subscribe(this.location);
    this.channel2.bind('App\\Events\\AdsEvent', (data) => {
      if (data.message.type =='smallpack')
        this.newMessage(data.message);
    });

    this.subscribed = true;
  }

  private newMessage(received: Screen) {
    this.messages.push(received);
    if (this.messages && this.messages.length>4)
    {
      this.messages.shift();
    }
  }

  ngOnInit(): void {


      this.location = 'location1';
      if (this.config.location!='')
        this.location = this.config.location;


    this.getMessages();
    this.messages=[];
  }

}
