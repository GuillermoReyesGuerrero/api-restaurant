import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'homeadmin',
    pathMatch: 'full'
  },
  {
    path: 'homeadmin',
    loadChildren: () => import('./admin/homeadmin/homeadmin.module').then( m => m.HomeadminPageModule)
  },
  {
    path: 'homemesero',
    loadChildren: () => import('./mesero/homemesero/homemesero.module').then( m => m.HomemeseroPageModule)
  },
  {
    path: 'mesasadmin',
    loadChildren: () => import('./admin/mesasadmin/mesasadmin.module').then( m => m.MesasadminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
