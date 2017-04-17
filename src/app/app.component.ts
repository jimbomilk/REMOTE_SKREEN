import { Component, OnInit,AfterViewChecked ,ViewChild,ViewEncapsulation } from '@angular/core';

import { AppConfig } from './app.config';
import { Screen } from './screen';
import { MessagesComponent }  from './messages.component';


declare var Pusher: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class AppComponent implements OnInit, AfterViewChecked {

    @ViewChild(MessagesComponent)

    public screeny : Screen;
    public gameId;
    private channel1;
    private channel2;
    private subscribed;
    private pusher;
    public textSize;
    public colClass="6";
    public showAds: boolean = false;
    public showScreen: boolean = true;
    public typeOptions : boolean = false;
    public typeChart : boolean = false;
    public typeRanking : boolean = false;
    public host;

    public columnChartOptions:any =  {
      chartType: 'ColumnChart',
      dataTable: [
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
      ],
      options: {
        width: '100%',
        height: '500',
        animation:{
          startup: true,
          duration: 1000,
          easing: 'out',
        },
        title: 'Participation'}
    };

    constructor(private config: AppConfig )
    {
        this.pusher = new Pusher('9931344a99d006ebf67d', {
          cluster: 'eu'
        });
        this.host = this.config.getConfig('host_images');
    }

    public getBackImage()
    {
      if(this.showAds)
        return this.screeny.logo2;
      else
        return '../assets/images/'+this.screeny.logo2+'.jpg';

    }

    public getbody(val)
    {
      if (val)
        return JSON.parse(val);
    }

    public ngOnInit() {
        let location = this.config.getConfig('location');
        this.subscribeToChannel(location);
    }

    public ngAfterViewChecked() {
      var listItem = document.querySelector(".ranking");
      if (listItem) {
        listItem.scrollTop = listItem.scrollHeight;
      }
    }

    private subscribeToChannel(location: string) {
        this.channel1 = this.pusher.subscribe(location);
        this.channel1.bind('App\\Events\\ScreenEvent', (data) => {
          this.newScreen(data.screen);
        });
        this.channel2 = this.pusher.subscribe(location);
        this.channel2.bind('App\\Events\\BigAdsEvent', (data) => {
          this.newAds(data.screen);
        });
        this.subscribed = true;
    }

    private newAds(screen: Screen) {
        this.showScreen = false;
        this.showAds = true;
        this.screeny = screen;
        let splited=this.screeny.image.split("/");
        this.screeny.logo2= this.host + '/' + splited[0] + '/' + splited[1];
    }

    private newScreen(screen: Screen) {

        this.showScreen = true;
        this.showAds = false;
        this.screeny = screen;
        this.typeOptions = false;
        this.typeChart = false;
        this.typeRanking = false;

        // Elementos comunes
        this.screeny.logo1= this.host + '/' + this.screeny.logo1;
        if (this.screeny.gameboard_id!='')
          this.gameId = this.screeny.gameboard_id;

        // Vemos que tipo de pantalla es
        if (this.screeny.type == 'options') {
          this.typeOptions = true;
          if (this.screeny.body) {
            let options = JSON.parse(this.screeny.body);
            this.textSize = 24/(options.length+1)
            if (this.textSize < 2)
              this.textSize = 2;
            this.textSize += 'em';
            this.colClass = (options.length>6 || options.length==0)?"2":""+(12/options.length);
          }
        }
        else if(this.screeny.type == 'chart'){
          this.typeChart = false;
          let values = JSON.parse(this.screeny.body);
          this.columnChartOptions.dataTable = values.dataSeries.slice();
          this.typeChart = true;
        }
        else if(this.screeny.type == 'ranking'){
          let values = JSON.parse(this.screeny.body);
          this.typeRanking = true;
        }
    }



}

