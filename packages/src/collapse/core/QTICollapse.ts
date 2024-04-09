import {QTICollapseItem} from "./QTICollapseItem";
import {QTCollapse} from "./QTCollapse";
import {QTIView} from "../../view/QTIView";

export interface QTICollapse extends QTIView {

  init(collapse: QTCollapse): void

  getItem(index: number): QTICollapseItem

  expandItem(index: number): void

  collapse(): void

  expand(): void
}
