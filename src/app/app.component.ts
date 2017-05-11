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
    public qrcode: boolean = false ;
    public weather : boolean = true;
    //public host;

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
        return this.screeny.logo2;
      else
        return './assets/images/'+this.screeny.logo2+'.jpg';

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

      if (this.weather){
        /*var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://www.tiempo.com/wid_loader/9cac11995ff674b308b4103845721c5b";
        this.elementRef.nativeElement.appendChild(s);*/
      }
    }

    private subscribeToChannel(location: string) {
        this.channel1 = this.pusher.subscribe(location);
        this.channel1.bind('App\\Events\\ScreenEvent', (data) => {
          this.newScreen(data.screen);
        });
        this.channel2 = this.pusher.subscribe(location);
        this.channel2.bind('App\\Events\\AdsEvent', (data) => {
          if (data.message.type =='bigpack')
            this.newAds(data.message);
        });
        this.subscribed = true;
    }

    private newAds(screen: Screen) {
        this.showScreen = false;
        this.showAds = true;
        this.screeny = screen;
        this.screeny.logo2= this.screeny.image;
        this.weather = true;
        this.qrcode = false;
    }

    private newScreen(screen: Screen) {

        this.showScreen = true;
        this.showAds = false;
        this.screeny = screen;
        this.typeOptions = false;
        this.typeChart = false;
        this.typeRanking = false;
        this.weather = false;
        this.qrcode = true;

        // Elementos comunes
        if (this.screeny.code!='')
          this.gameId = this.screeny.code;

        // Vemos que tipo de pantalla es
        if (this.screeny.type == 'options') {
          this.typeOptions = true;
          if (this.screeny.body) {
            let options = JSON.parse(this.screeny.body);
            this.textSize = 4;
            if (this.textSize < 2)
              this.textSize = 2;
            this.textSize += 'em';
            this.colClass = "6";
            //this.colClass = (options.length>6 || options.length==0)?"4":""+(12/options.length);
          }
        }
        else if(this.screeny.type == 'chart'){
          this.typeChart = true;
          let values = JSON.parse(this.screeny.body);
          this.columnChartOptions.dataTable = values.dataSeries.slice();
          this.columnChartOptions.options.title = this.screeny.headerSub;
        }
        else if(this.screeny.type == 'ranking'){
          let values = JSON.parse(this.screeny.body);
          this.typeRanking = true;
        }
    }



}

