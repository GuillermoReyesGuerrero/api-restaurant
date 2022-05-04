import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, AlertController, LoadingController} from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
})
export class HomeadminPage implements OnInit {

  constructor(public navCtrl: NavController,public http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  blockmenu(){
    console.log('hola');
    // document.getElementById('listmenu').style.background = 'red';
    // document.getElementById('listmenu').style.width = '70px';
  }

  gomesas(){
    this.router.navigate(['/mesasadmin']);
    // console.log("Hola");
  }

}
