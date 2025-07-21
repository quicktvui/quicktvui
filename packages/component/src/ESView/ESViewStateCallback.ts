import { ESViewState } from './ESViewState'

export interface ESViewStateCallback {
  (viewState: ESViewState): void
}
