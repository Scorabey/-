> Объект `Blob` представляет из себя подобный файлу объект с неизменяемыми, необработанными данными; они могут читаться как текст или двоичные данные, либо могут быть преобразованы в [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream), таким образом, его методы могут быть использованы для обработки данных.

> Blob-ы могут представлять данные, которые не обязательно должны быть в родном для JavaScript формате. Интерфейс [`File`](https://developer.mozilla.org/ru/docs/Web/API/File) основан на `Blob`, наследует функциональность `Blob` и расширяет его для поддержки файлов на стороне пользователя.

# Использование Blob

> Для создания `Blob` не из объектов и данных blob, используйте конструктор [`Blob()`](https://developer.mozilla.org/ru/docs/Web/API/Blob/Blob "Blob()") . Чтобы создать blob из подмножества данных из другого blob, используйте метод [`slice()`](https://developer.mozilla.org/ru/docs/Web/API/Blob/slice "slice()"). Чтобы получить объект `Blob` для файла на файловой системе пользователя, смотрите документацию на [`File`](https://developer.mozilla.org/ru/docs/Web/API/File).

API, принимающие объекты `Blob`, также перечислены в документации на [`File`](https://developer.mozilla.org/ru/docs/Web/API/File). 

> [!info]
> **Примечание**: Метод slice() имеет изначально задаваемую длину как второй аргумент, что используется для указания числа байт копируемых в новый Blob. Если указать такие параметры start + length, которые превышают размер исходного Blob, то возвращаемый Blob будет содержать данные от начального индекса (start index) до конца исходного Blob.

> [!info]
> **Примечание:** Следует помнить ,что метод `slice()` имеет сторонние префиксы в некоторых браузерах: `blob.mozSlice()` для Firefox 12 и ранее, так же `blob.webkitSlice()` в Safari. Старая версия метода `slice()`, без сторонних приставок, имеет другой алгоритм и устарела. Поддержка `blob.mozSlice()` была убрана в Firefox 30.

# Конструктор

```
Blob(blobParts[, options])
```

> Возвращает создаваемый объект Blob, который содержит соединение всех данных в массиве, переданном в конструктор.

# Свойства

- `Blob.isClosed` : Логическое значение, показывающее, вызывался ли метод `Blob.close()` у blob. Закрытый blob не может быть прочитан.
- [`Blob.size`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/size) : Размер данных, содержащихся в объекте `Blob`, в байтах.
- [`Blob.type`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type) : Строка с MIME-типом данных, содержащихся в `Blob`. Если тип неизвестен, строка пуста.

# Методы

- `Blob.close()` : Закрывает Blob объект, по возможности освобождая занятые им ресурсы.
- [`Blob.slice([start[, end[, contentType]]])`](https://developer.mozilla.org/ru/docs/Web/API/Blob/slice "Blob.slice([start[, end[, contentType]]])") : Возвращает новый `Blob` объект, содержащий данные в указанном диапазоне байтов исходного `Blob`.
- [`Blob.stream()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream) : Возвращает [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream), который может использоваться для чтения содержимого `Blob`.
- [`Blob.text()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/text) : Возвращает promise, который исполняется с [`USVString`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String), содержащей всё содержимое `Blob`, интерпретируемое как текст UTF-8.

# Примеры 
## Создание Blob

> Конструктор [`Blob() constructor`](https://developer.mozilla.org/ru/docs/Web/API/Blob/Blob "Blob() constructor") может создавать объекты blob из других объектов. Например, чтобы сконструировать blob из строки JSON:

![[ray-so-export 1.png]]

> [!danger]
> **Предупреждение:** До того как конструктор Blob стал доступен, это могло быть выполнено через устаревший API [`BlobBuilder`](https://developer.mozilla.org/ru/docs/Web/API/Blob):
> ![[ray-so-export(1) 1.png]]

## Создание URL для содержимого типизированного массива

> Следующий код создаёт типизированный массив JavaScript и создаёт новый `Blob`, содержащий данные типизированного массива. Затем вызывается [`URL.createObjectURL()`](https://developer.mozilla.org/ru/docs/Web/API/URL/createObjectURL_static) для преобразования blob в [URL](https://developer.mozilla.org/ru/docs/Glossary/URL).

### HTML
![[ray-so-export(2) 1.png]]
### JavaScript

> Основной частью этого кода для примера является функция `typedArrayToURL()`, которая создаёт `Blob` из переданного типизированного массива и возвращает объект URL для него. Преобразовав данные в URL объекта, их можно использовать несколькими способами, в том числе, в качестве значения атрибута [`src`](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/img#src) элементов [`<img>`](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/img) (конечно, при условии, что данные содержат изображение).

![[ray-so-export(3) 1.png]]

# Другой пример

![[ray-so-export(4) 1.png]]
# Извлечение данных из Blob

> Один из способов прочесть содержимое `Blob` – это использовать [`FileReader`](https://developer.mozilla.org/ru/docs/Web/API/FileReader). Следующий код читает содержимое `Blob` как типизированный массив.

![[ray-so-export(5) 1.png]]
> Другой способ прочитать содержимое из `Blob` – это использовать [`Response`](https://developer.mozilla.org/ru/docs/Web/API/Response). Следующий код читает содержимое `Blob` как текст:

![[ray-so-export(6) 1.png]]
> Или можно использовать [`Blob.text()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/text):

![[ray-so-export(7) 1.png]]
> Используя другие методы [`FileReader`](https://developer.mozilla.org/ru/docs/Web/API/FileReader), возможно прочесть содержимое объекта Blob как строку или как URL.

# Связанные разделы
- [[File]]
- [[FileReader]]
- [[FileList]]
- [[Drag and Drop]]
- [[Использование файлов в веб приложениях]]

# tags

#JS #IT