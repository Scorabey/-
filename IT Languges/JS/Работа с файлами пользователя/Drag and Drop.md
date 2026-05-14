> На первом шаге необходимо определить зону, в которую будут перетаскиваться файлы. В каждом конкретном случае часть содержимого вашей страницы, ответственная за приёмку перетаскиваемых файлов, может варьироваться в зависимости от дизайна приложения, тем не менее, заставить элемент воспринимать события перетаскивания достаточно просто:

> [!NOTE]
> ```
> 	var dropbox;
> 	
> 	dropbox = document.getElementById("dropbox");
> 	
> 	dropbox.addEventListener("dragenter", dragenter, false);
> 	
> 	dropbox.addEventListener("dragover", dragover, false);
> 	
> 	dropbox.addEventListener("drop", drop, false);
> ```

> В данном примере мы превращаем элемент с ID, равным `dropbox`, в нашу зону перетаскивания при помощи добавления обработчиков для событий `dragenter`, `dragover` и `drop`.

> В нашем случае нет необходимости делать что-то особенное при обработке событий `dragenter` и `dragover`, таким образом, обе функции, ответственные за обработку данных событий, довольно просты. Они останавливают распространение события и предотвращают возникновение действия по умолчанию:

> [!NOTE]
> ```
> function dragenter(e) {
>   e.stopPropagation();
>   e.preventDefault();
> }
> 
> function dragover(e) {
>   e.stopPropagation();
>   e.preventDefault();
> }
> ```

> [!info]
> ### Вся настоящая магия происходит в функции `drop()`:
> ```
> function drop(e) {
>   e.stopPropagation();
>   e.preventDefault();
> 
>   var dt = e.dataTransfer;
>   var files = dt.files;
> 
>   handleFiles(files);
> }
> ```

> Здесь мы извлекаем из события поле `dataTransfer`, затем вытаскиваем из него список файлов и передаём этот список в `handleFiles()`. После этого процесс обработки файлов одинаков вне зависимости от того, использовал ли пользователь для их выбора элемент `input` или технологию drag and drop.


# tags

#JS #IT