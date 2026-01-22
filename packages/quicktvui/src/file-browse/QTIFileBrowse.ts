import { QTIView } from '../view/QTIView'

export interface QTIFileBrowse extends QTIView {
  init(): Promise<any>

  canOpenFile(fileExtension: string): boolean

  openFile(filePath: string, fileExtension: string): void

  closeFile(): void

  useCustomView(useCustom: boolean): void
}
