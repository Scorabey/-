>Объект этого типа возвращается свойством [`<input>`](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/input) элемента, что позволяет получить список выбранных файлов из `<input type="file">`. Также используется для получения списка файлов, брошенных в область веб-контента (**Web content**) по средствам drag and drop API. Смотрите [DataTransfer](https://developer.mozilla.org/ru/docs/Web/API/DataTransfer) для детального понимания как это использовать.

## Использование FileList
>Все `<input>` элементы имеют файловые массивы которые позволяют получить доступ к файлам. Пример файлового тега:
>`<input id="fileItem" type="file">`
>Этот код извлекает первый файл из списка
>`var file = document.getElementById("fileItem").files[0];`

## Методы 
### Item()
Возвращает File обьект по индексу в списке
 `File item(`
   `index`
 `);`

## Примеры
### Этот пример выполняет перебор всех файлов, выбранных пользователем, используя элемент Input:
![[Pasted image 20260424220141.png]]

## Связанные разделы 
- [[FileReader|FileReader]]
- [[File|File]]

# tags

#JS #IT