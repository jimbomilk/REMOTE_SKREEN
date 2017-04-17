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
  @Input() pusher;

  constructor(private config: AppConfig ) {
  }

  getMessages(): void {
    let location = this.config.getConfig('location');
    this.channel1 = this.pusher.subscribe(location);
    this.channel1.bind('App\\Events\\MessageEvent', (data) => {
      this.newMessage(data.message);
    });

    this.channel2 = this.pusher.subscribe(location);
    this.channel2.bind('App\\Events\\SmallAdsEvent', (data) => {
      this.newMessage(data.message);
    });

    this.subscribed = true;
  }

  private newMessage(received: Screen) {

    let host = this.config.getConfig('host_images');
    let splited=received.image.split("/");
    received.image= host + '/' + splited[0] + '/' + splited[1];


    this.messages.push(received);
    if (this.messages.length>4)
    {
      this.messages.shift();
    }
  }

  ngOnInit(): void {
    this.getMessages();
    this.messages=[];
  }

}
