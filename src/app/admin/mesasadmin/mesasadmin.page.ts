import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, AlertController, LoadingController} from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-mesasadmin',
  templateUrl: './mesasadmin.page.html',
  styleUrls: ['./mesasadmin.page.scss'],
})
export class MesasadminPage implements OnInit {

  public mesasdata = [
    {id:'1',estado:'disponible'},
    {id:'2',estado:'ocupado'},
    {id:'3',estado:'disponible'},
    {id:'4',estado:'ocupado'},
    {id:'5',estado:'disponible'},
    {id:'6',estado:'ocupado'},
    {id:'7',estado:'disponible'},
    {id:'8',estado:'ocupado'},

  ];
  imglibre = '../../../assets/images/mesadis.png';
  imgocupado = '../../../assets/images/mesaocup.png';

  constructor(public navCtrl: NavController,public http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  goinicio(){
    this.router.navigate(['/homeadmin']);
    // console.log("Hola");
  }

  gomesas(){
    this.router.navigate(['/mesasadmin']);
    // console.log("Hola");
  }

}
