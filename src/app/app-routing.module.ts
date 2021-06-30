import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  {
    canActivate: [LoginGuard],
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/product/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/product/update/update.module').then( m => m.UpdatePageModule)
  },
  // {
  //   path: 'read/:id',
  //   loadChildren: () => import('./pages/product/read/read.module').then( m => m.ReadPageModule)
  // },
  {
    path: 'read',
    loadChildren: () => import('./pages/product/read/read.module').then( m => m.ReadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
