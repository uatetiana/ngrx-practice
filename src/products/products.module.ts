import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';

import { reducers, effects } from './store';
// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';
import { PizzasService, ToppingsService } from './services';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent
  },
  {
    path: ':id',
    component: fromContainers.ProductItemComponent,
  },
  {
    path: 'new',
    component: fromContainers.ProductItemComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [PizzasService, ToppingsService],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {}
