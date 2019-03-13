import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
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
  { path: 'staff-login', loadChildren: './staff-login/staff-login.module#StaffLoginPageModule' },
  { path: 'staff-dashboard', loadChildren: './staff-dashboard/staff-dashboard.module#StaffDashboardPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
