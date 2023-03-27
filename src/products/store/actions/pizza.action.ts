import { Action } from '@ngrx/store';
import { Pizza } from './../../../products/models/pizza.model';

// load pizza
export const LOAD_PIZZAS = '[PRODUCTS] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[PRODUCTS] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[PRODUCTS] Load Pizzas Success';

export class LoadPizzas implements Action {
    readonly type: string = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type: string = LOAD_PIZZAS_FAIL;
    constructor(public payload?: any) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type: string = LOAD_PIZZAS_SUCCESS;
    constructor(public payload?: Pizza[]) {}
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;