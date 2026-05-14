>Интерфейс **`File`** представляет информацию о файлах и предоставляет JavaScript в веб странице доступ к их контенту.

>`Объекты File` как правило извлекаются из объекта [[FileList|FileList]], который возвращён как результат пользовательского выбора файлов с помощью [`<input>`](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input) элемента, из drag and drop операций [`DataTransfer`](https://developer.mozilla.org/ru/docs/Web/API/DataTransfer) объекта, или из `mozGetAsFile()` API на [`HTMLCanvasElement`](https://developer.mozilla.org/ru/docs/Web/API/HTMLCanvasElement). В Gecko, привилегированный код может создать файл представляющий любой локальный файл без пользовательского взаимодействия

>Объект `File` - особый вид [`Blob`](https://developer.mozilla.org/ru/docs/Web/API/Blob), и может быть использован в любом контексте так же, как и Blob. В частности, [`FileReader`](https://developer.mozilla.org/ru/docs/Web/API/FileReader), [`URL.createObjectURL()`](https://developer.mozilla.org/ru/docs/Web/API/URL/createObjectURL_static), [`createImageBitmap()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/createImageBitmap "createImageBitmap()"), и [`XMLHttpRequest.send()`](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest#send) допускают и `Blob,` и `File`.

>Смотри [Использование файлов в веб приложениях](https://developer.mozilla.org/ru/docs/Web/API/File_API/Using_files_from_web_applications) для получения более подробной информации и примеров.

# Свойства
>_Интерфейс `File` также наследует свойства от [`Blob`](https://developer.mozilla.org/ru/docs/Web/API/Blob) интерфейса:_

- [`File.lastModified`](https://developer.mozilla.org/en-US/docs/Web/API/File/lastModified) : Возвращает времмя последнего изменения файла в миллесекундах с эпохи UNIX
- [`File.lastModifiedDate`](https://developer.mozilla.org/en-US/docs/Web/API/File/lastModifiedDate) : Возвращает дату последнего изменения файла
- [`File.name`](https://developer.mozilla.org/ru/docs/Web/API/File/name) : Возвращает имя файла
- [`File.size`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/size) : Возвращает размер файла
- [`File.webkitRelativePath`](https://developer.mozilla.org/en-US/docs/Web/API/File/webkitRelativePath) : Возвращает URL адрес
- [`File.type`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type) : Возвращает MIME тип файла

# Связанные разделы 
- [[FileList]]
- [[FileReader]]
- [[Blob]]
- [[Использование файлов в веб приложениях]]

# tags

#JS #IT