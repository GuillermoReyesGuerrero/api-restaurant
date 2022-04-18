import { Component, OnInit, Injectable  } from '@angular/core';
import { NavController, AlertController, LoadingController} from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public user='';
  public password='';
  public userdata: any=[];

  constructor(public navCtrl: NavController,public http: HttpClient,
    private userService: UserServiceService,private router: Router,private alertCtrl: AlertController,
    public loadingController: LoadingController) {}

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  async ngOnInit() {
    this.userService.getUsers().subscribe( async users => {
      if(users){
        this.userdata = users;
        console.log(this.userdata);
      }
      else{
        const alert = await this.alertCtrl.create({
          cssClass: 'alerColorError',
          message: '<strong class="alertST">¡Error de conexion!</strong>'+
                    '<br><p class="alertP">La aplicación no se puede conectar con la base de datos.</p>',
          buttons: [
            {
              text: 'Aceptar',
              role: 'cancel',
              cssClass: 'alerColorButtonCancel',
              handler: () => {
                // console.log('cancelo');
              }
            }
          ]
        });
        await alert.present();
      }
    });
  }

  async login(){
    // eslint-disable-next-line eqeqeq
    if(this.user == '' || this.password == ''){
      const alert = await this.alertCtrl.create({
        cssClass: 'alerColorError',
        message: '<strong class="alertST">¡Error de inicio!</strong>'+
                  '<br><p class="alertP">El usuario o contraseña están vacíos, favor de volver a intentar.</p>',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'alerColorButtonCancel',
            handler: () => {
              // console.log('cancelo');
            }
          }
        ]

      });
      await alert.present();
    }else {
      var user = this.user;
      var password = this.password;
      const existuser = this.userdata.find(function(exus){
        // eslint-disable-next-line eqeqeq
        return exus.USERNAME == user;
      });
      // eslint-disable-next-line eqeqeq
      if(existuser != undefined){
        console.log(existuser);
        // eslint-disable-next-line eqeqeq
        if(existuser.PASSWORD == password){
            const loading = await this.loadingController.create({
              message: 'Iniciando sesión..',
              duration: 2000
            });
            await loading.present();
            loading.dismiss();

            const navigatioExtras: NavigationExtras = {
              state: {
                itemusuario: existuser
              }
            }
              this.router.navigate(['/homeadmin'], navigatioExtras);
        }else{
          const alert = await this.alertCtrl.create({
            cssClass: 'alerColorError',
            message: '<strong class="alertSTU">¡Error de usuario!</strong>'+
                  '<br><p class="alertP">La contraseña es incorrecta.</p>',
            buttons: [
              {
                text: 'Aceptar',
                role: 'cancel',
                cssClass: 'alerColorButtonCancel',
                handler: () => {
                  // console.log('cancelo');
                }
              }
            ]
          });
          await alert.present();
        }
      }else{
        const alert = await this.alertCtrl.create({
          cssClass: 'alerColorError',
            message: '<strong class="alertSTU">¡Error de usuario!</strong>'+
                  '<br><p class="alertP">El usuario ' + user + ' no existe.</p>',
          buttons: [
            {
              text: 'Aceptar',
              role: 'cancel',
              cssClass: 'alerColorButtonCancel',
              handler: () => {
              }
            }
          ]

        });
        await alert.present();
      }
    }
  }

}
