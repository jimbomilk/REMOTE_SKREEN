import {Component, AfterViewInit, ViewChild, ViewEncapsulation, ElementRef} from '@angular/core';
import { AppConfig } from './app.config';
import { Screen } from './screen';
import {isDefined} from "@ng-bootstrap/ng-bootstrap/util/util";
import {keepAliveService} from "../services/keepAliveService";


declare var Pusher: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements AfterViewInit {

    @ViewChild('dataContainer') dataContainer: ElementRef;

    public screens: Screen[];
    public screeny : Screen;
    public backImg : string;
    public transparent : string;
    public col_mode : string;
    public gameId;
    private channel1;
    private channel2;
    private pusher;
    public textSize;
    public colClass="6";
    public isMessage: boolean = false;
    public showAds: boolean = false;
    public showScreen: boolean = false;
    public showInfo: boolean = true;
    public finalizado : boolean = false;


    public typeOptions : boolean = false;
    public typeChart : boolean = false;
    public typeRanking : boolean = false;
    public qrcode: boolean = false ;
    public weather : boolean = true;
    public isVideo : boolean = false;
    private interval: any;
    public logo_addmeetoo: any;

    //public host;

    public columnChartOptions:any =  {
      chartType: 'ColumnChart',
      dataTable: [
        ['', '', ''],
        ['', 0, 0],
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


    constructor(private config: AppConfig,private elementRef:ElementRef,private keepAliveServ:keepAliveService)
    {
        this.pusher = new Pusher('9931344a99d006ebf67d', {
          cluster: 'eu'
        });
        //this.host = this.config.getConfig('host_images');

    }

    public getBackImage()
    {

      if(this.showAds) {
        this.backImg = this.screeny.logo2;
        //this.screeny.logo1= './assets/images/pu300x200.png';
      }
      else if(this.showInfo) {
        if (isDefined(this.screeny.background)&& this.screeny.background !== null && this.screeny.background !== "")
          this.backImg = this.screeny.background;
        else this.backImg = '';

      }
      else if(this.showScreen) {
        if (isDefined(this.screeny.background)&& this.screeny.background !== null && this.screeny.background !== "")
          this.backImg = this.screeny.background;
        else
          this.backImg = './assets/images/' + this.screeny.category + '.jpg';
      }
    }

    private loadData(data) {
      this.dataContainer.nativeElement.innerHTML = data;
    }

    public getRandom(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    public getbody(val)
    {
      if (val)
        return JSON.parse(val);
    }



    public ngAfterViewInit() {

      this.logo_addmeetoo = './assets/images/logo_modern_big_white.png';

      let location = 'location1';
      if (this.config.location!=null)
        location = this.config.location;
      this.subscribeToChannel(location);



      this.loadData("");
      this.showAds = false;
      this.showScreen = false;
      this.showInfo = false;
    }


    public ngAfterViewChecked()
    {
      if (this.showInfo && this.screeny && !this.isMessage)
      {
        this.loadData(this.screeny.ltext);
      }

    }

    private subscribeToChannel(location: string) {
      if (this.pusher) {
        this.channel1 = this.pusher.subscribe(location);
        this.channel1.bind('App\\Events\\ScreenEvent', (data) => {
          this.newScreen(data.screen);
          this.getBackImage();
          this.isMessage = false;
        });

        this.channel2 = this.pusher.subscribe(location);
        this.channel2.bind('App\\Events\\AdsEvent', (data) => {
          if (data.message.type == 'bigpack') {
            this.newAds(data.message);
            this.getBackImage();
            this.isMessage = false;
          }
          else if (data.message.type == 'info') {
            this.newInfo(data.message);
            this.getBackImage();
            this.isMessage = false;
          }
          else
            this.isMessage = true;
        });
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

    private newScreen(screen: any) {
      this.showScreen = true;
      this.showAds = false;
      this.showInfo = false;
      this.typeChart = false;
      this.typeRanking = false;
      this.screeny= screen;
      this.screeny.body = JSON.parse(screen.body);
      this.weather = false;
      this.qrcode = true;
      if (screen.body && screen.body.length<=4)
        this.col_mode = "col-md-" + Math.floor(12/screen.body.length);
      else
        this.col_mode = "col-md-3";

      // Elementos comunes
      if (screen.code!='')
        this.gameId = screen.code;

      // Vemos que tipo de pantalla es
      if (screen.type == 'options') {
        this.typeOptions = true;
        this.finalizado = screen.gameboard.status>=100;
        if (screen.body) {
          //let options = JSON.parse(screen.body);
          this.textSize = 4;
          if (this.textSize < 2)
            this.textSize = 2;
          this.textSize += 'em';
          this.colClass = "6";
          //this.colClass = (options.length>6 || options.length==0)?"4":""+(12/options.length);

        }
      }
      else if(screen.type == 'chart'){
        this.typeOptions = false;
        this.typeChart = true;
        var values =JSON.parse(screen.stats);
        this.columnChartOptions.dataTable = values['dataSeries'].slice();
        this.columnChartOptions.options.title = "DISTRIBUCIÓN de VOTOS";
      }
      else if(screen.type == 'ranking'){
        let values = JSON.parse(screen.body);
        this.typeRanking = true;
      }
    }


    private keepAlive() {
      this.keepAliveServ.keepAlive(this.config.location,this.config.ip)
        .subscribe(res => {
            //console.log(res, "Response here");
          },
          err => {
            //console.log(err);
          })
    }

    ngOnInit(){
      this.interval = setInterval(() => {
        this.keepAlive();
      }, 30000);
    }

    ngOnDestroy() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
}

