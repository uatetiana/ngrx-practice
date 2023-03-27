import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import * as pizzaActions from './../actions/pizza.action';
import * as fromServices from './../../services';
import { PizzasService } from "./../../services";

Injectable()
export class PizzasEffects {
    loadPizzas$ = createEffect(() => this.actions$.pipe(
        ofType(pizzaActions.LOAD_PIZZAS),
        switchMap(() => {
            return this.pizzaService.getPizzas().pipe(
                map((pizzas) => new pizzaActions.LoadPizzasSuccess(pizzas)),
                catchError((error) => of(new pizzaActions.LoadPizzasFail(error))
            ))
        }))
    )

    constructor(private actions$: Actions, private pizzaService: PizzasService) {} 
}