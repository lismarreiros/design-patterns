import { ImageEditor } from "./image-editor";
import { ImageEditorBackupManager } from "./image-editor-backup-manager";

const imageEditor = new ImageEditor('/media/image.png', 'png')
const backupManager = new ImageEditorBackupManager(imageEditor)

backupManager.backup()
imageEditor.convertFormatTo('gif')

backupManager.backup()

imageEditor.convertFormatTo('bmp')
imageEditor.convertFormatTo('jpg')

console.log('1', imageEditor)

backupManager.undo()
console.log('2', imageEditor)