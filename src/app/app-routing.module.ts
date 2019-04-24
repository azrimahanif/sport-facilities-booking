import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'facilities-list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'facilities-list', loadChildren: './facilities-list/facilities-list.module#FacilitiesListPageModule' },
  { path: 'booking-info', loadChildren: './booking-info/booking-info.module#BookingInfoPageModule' },
  { path: 'booking-info/:id', loadChildren: './booking-info/booking-info.module#BookingInfoPageModule' },
  { path: 'booking-details', loadChildren: './booking-details/booking-details.module#BookingDetailsPageModule' },
  { path: 'booking-details/:myid:date', loadChildren: './booking-details/booking-details.module#BookingDetailsPageModule' },
  { path: 'staff-login', loadChildren: './staff-login/staff-login.module#StaffLoginPageModule' },
  { path: 'staff-dashboard', loadChildren: './staff-dashboard/staff-dashboard.module#StaffDashboardPageModule' },

  // {
  //   path: 'staff',
  //   // canActivate: [AuthGuard],
  //   loadChildren: './staff-routing.module#StaffRoutingModule'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
