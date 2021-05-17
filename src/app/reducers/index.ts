import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as formCart from './reducer.cart';

export interface State {
  cart: formCart.cartState
}

export const reducers: ActionReducerMap<State> = {
  cart: formCart.cartReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
