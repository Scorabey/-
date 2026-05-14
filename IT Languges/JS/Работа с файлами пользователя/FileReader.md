# Общая информация
>Объект `FileReader` позволяет веб-приложениям асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя, используя объекты [`File`](https://developer.mozilla.org/ru/docs/Web/API/File) или [`Blob`](https://developer.mozilla.org/ru/docs/Web/API/Blob), с помощью которых задаётся файл или данные для чтения.

>Объекты `File` можно получить через объект [`FileList`](https://developer.mozilla.org/ru/docs/Web/API/FileList), который возвращается как результат при выборе файлов пользователем с помощью элемента [`<input>`](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input), через drag and drop из объекта [`DataTransfer`](https://developer.mozilla.org/ru/docs/Web/API/DataTransfer), или с помощью `mozGetAsFile()`, метода доступного в API элемента [`HTMLCanvasElement`](https://developer.mozilla.org/ru/docs/Web/API/HTMLCanvasElement).

# Свойства
- [`FileReader.error`](https://developer.mozilla.org/ru/docs/Web/API/FileReader/error) : Показывает ошибку во времмя чтения
- [`FileReader.readyState`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readyState) : Число обозначающее состояние объекта `FileReader`. Принимает одно из значений [[FileReader#Константы состояния|Константы состояния]] 
- [`FileReader.result`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result) : Показывает данные из файла
# Обработка событий
- [`FileReader.onabort`](https://developer.mozilla.org/ru/docs/Web/API/FileReader/abort_event) : Возникает каждый раз когда, перерывается операция чтения
- [`FileReader.onerror`](https://developer.mozilla.org/ru/docs/Web/API/FileReader/onerror) : Возникает каждый раз при ошибке чтения файла
- [`FileReader.onload`](https://developer.mozilla.org/ru/docs/Web/API/FileReader/onload) : Возникает при каждом успешном завершении операции
- `FileReader.onloadstart` : Возникает каждый раз при запуске
- `FileReader.onloadend` : Возникает каждый раз по окончанию операции
- `FileReader.onprogress` : Возникает при чтении данных из [[Blob|Blob]]

## Константы состояния 
- `EMPTY`: `0` : Данные ещё не были загружены.
- `LOADING` : `1` : Данные в данный момент загружаются.
- `DONE`: `2` : Операция чтения была завершена.
# Методы
- [`FileReader.abort()`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/abort) : Отмена операции чтения. После вызова, значение `readyState` станет равным `DONE`
- [`FileReader.readAsArrayBuffer()`](https://developer.mozilla.org/ru/docs/Web/API/FileReader/readAsArrayBuffer) : Запускает процесс чтения данных указанного [`Blob`](https://developer.mozilla.org/ru/docs/Web/API/Blob), по завершении, атрибут `result` будет содержать данные файла в виде `ArrayBuffer`
- [`FileReader.readAsBinaryString()`](https://developer.mozilla.org/ru/docs/Web/API/FileReader/readAsBinaryString) : Запускает процесс чтения данных указанного [`Blob`](https://developer.mozilla.org/ru/docs/Web/API/Blob), по завершении, атрибут `result` будет содержать бинарные данные файла в виде строки.
- [`FileReader.readAsDataURL()`](https://developer.mozilla.org/ru/docs/Web/API/FileReader/readAsDataURL) : Запускает процесс чтения данных указанного [`Blob`](https://developer.mozilla.org/ru/docs/Web/API/Blob), по завершении, атрибут `result` будет содержать данные файла в виде `data:` URL.
- [`FileReader.readAsText()`](https://developer.mozilla.org/ru/docs/Web/API/FileReader/readAsText) : Запускает процесс чтения данных указанного [`Blob`](https://developer.mozilla.org/ru/docs/Web/API/Blob), по завершении, атрибут `result` будет содержать данные файла в виде текста.

# Связанные разделы
- [[File]]
- [[Blob]]
- [[FileList]]

# tags

#JS #IT