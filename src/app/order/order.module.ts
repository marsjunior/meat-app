import { SharedModule } from './../shared/shared.module';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { OrderComponent } from './order.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LeaveOrderGuard } from './leave-order.guard';

const ROUTES: Routes = [
  { path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard] }
]

@NgModule({
  declarations:[OrderComponent,
                OrderItensComponent,
                DeliveryCostsComponent],
  imports:[SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {}
