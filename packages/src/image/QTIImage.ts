import {QTIView} from "../view/QTIView";
import {QTImageResizeMode} from "./QTImageResizeMode";

export interface QTIImage extends QTIView {

  setSrc(url: string): void

  resizeMode(mode: QTImageResizeMode): void
}
