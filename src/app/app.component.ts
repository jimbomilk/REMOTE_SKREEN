import {Component, OnInit, AfterViewChecked, ViewChild, ViewEncapsulation, ElementRef} from '@angular/core';

import { AppConfig } from './app.config';
import { Screen } from './screen';
import { MessagesComponent }  from './messages.component';


declare var Pusher: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit, AfterViewChecked {

    @ViewChild(MessagesComponent)

    public screens: Screen[];
    public screeny : Screen;
    public backImg : string;
    public transparent : string;
    public col_mode : string;
    public gameId;
    private channel1;
    private channel2;
    private subscribed;
    private pusher;
    public textSize;
    public colClass="6";
    public showAds: boolean = false;
    public showScreen: boolean = false;
    public showInfo: boolean = false;


    public typeOptions : boolean = false;
    public typeChart : boolean = false;
    public typeRanking : boolean = false;
    public qrcode: boolean = false ;
    public weather : boolean = true;
    public isVideo : boolean = false;
    //public host;

    public columnChartOptions:any =  {
      chartType: 'ColumnChart',
      dataTable: [
        ['', '', ''],
        ['', 1000, 400],
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

    constructor(private config: AppConfig,private elementRef:ElementRef)
    {
        this.pusher = new Pusher('9931344a99d006ebf67d', {
          cluster: 'eu'
        });
        //this.host = this.config.getConfig('host_images');
    }

    public getBackImage()
    {

      if(this.showAds)
        this.backImg =  this.screeny.logo2;
      else if(this.showInfo)
        this.backImg = './assets/images/bck' + this.getRandom(1, 5) + '.jpg';
      else if(this.showScreen)
        this.backImg =  './assets/images/'+this.screeny.logo2+'.jpg';


    }

    public getRandom(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
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

      // Pedir anuncios al servidor y guardarlos


    }

    private subscribeToChannel(location: string) {
      if (this.pusher) {
        this.channel1 = this.pusher.subscribe(location);
        this.channel1.bind('App\\Events\\ScreenEvent', (data) => {
          this.newScreen(data.screen);
        });
        this.channel2 = this.pusher.subscribe(location);
        this.channel2.bind('App\\Events\\AdsEvent', (data) => {

          if (data.message.type == 'bigpack')
            this.newAds(data.message);
          if (data.message.type == 'info')
            this.newInfo(data.message);

          this.getBackImage();

        });

        this.subscribed = true;
      }
    }

    private newAds(screen: Screen) {
        this.showScreen = false;
        this.showAds = true;
        this.showInfo = false;
        this.screeny = screen;
        this.screeny.logo2= screen.image;
        this.weather = true;
        this.qrcode = false;
    }

    private newInfo(screen: Screen) {
      this.showScreen = false;
      this.showAds = false;
      this.showInfo = true;
      this.screeny = screen;
      this.screeny.headerMain = screen.stext;
      this.weather = true;
      this.qrcode = false;
    }

    private newScreen(screen: Screen) {
      this.showScreen = true;
      this.showAds = false;
      this.showInfo = false;
      this.typeChart = false;
      this.typeRanking = false;
      this.screeny= screen;
      this.screeny.body = JSON.parse(screen.body);
      this.weather = false;
      this.qrcode = true;
      if (screen.body.length<=4)
        this.col_mode = "col-md-" + Math.floor(12/screen.body.length);
      else
        this.col_mode = "col-md-3";

      // Elementos comunes
      if (screen.code!='')
        this.gameId = screen.code;

      // Vemos que tipo de pantalla es
      if (screen.type == 'options') {
        this.typeOptions = true;
        if (screen.body) {
          let options = JSON.parse(screen.body);
          this.textSize = 4;
          if (this.textSize < 2)
            this.textSize = 2;
          this.textSize += 'em';
          this.colClass = "6";
          //this.colClass = (options.length>6 || options.length==0)?"4":""+(12/options.length);

        }
      }
      else if(screen.type == 'chart'){
        this.typeChart = true;
        let values = JSON.parse(screen.body);
        this.columnChartOptions.dataTable = values.dataSeries.slice();
        this.columnChartOptions.options.title = screen.headerSub;
      }
      else if(screen.type == 'ranking'){
        let values = JSON.parse(screen.body);
        this.typeRanking = true;
      }
    }



}

