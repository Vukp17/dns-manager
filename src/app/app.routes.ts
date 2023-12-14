import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutsComponent,
       /* canActivate: [ AuthGuard ],
       /* resolve: {
          cuData: ClientUserData
        },*/
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          }, {
            path: 'dashboard',
            component: DashboardComponent,

            // loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
            // loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
           // canDeactivate:[UnsavedFormGuard]
          }
        ],
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {})], // You can add options inside the {}
    exports: [RouterModule]
  })
  export class AppRoutingModule { } 