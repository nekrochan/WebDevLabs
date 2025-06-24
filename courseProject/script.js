document.addEventListener('DOMContentLoaded', function() {
    let postForm = document.querySelector('.post-form');
    let allArticles = document.querySelector('.all-articles');
    let archivedArticles = document.querySelector('.archived-articles');
    
    // обработчик отправки формы
    postForm.addEventListener('submit', function(event) {

        event.preventDefault();  // нужно чтобы страница не перезагрузилась
        
        let author = document.getElementById('author').value;
        let title = document.getElementById('title').value;
        let category = document.getElementById('category').value;
        let content = document.getElementById('content').value;
        
        addArticle(author, title, category, content);  // создать новую статью
        postForm.reset();  // очистить форму после создания статьи
    });
    
    function addArticle(author, title, category, content) {

        let article = document.createElement('article');
        article.className = 'article';
        
        // сохранить содержимое формы в статью
        article.innerHTML = `
            <h1>${title}</h1>
            <p><strong>Автор:</strong> ${author}</p>
            <p><strong>Категория:</strong> ${category}</p>
            <p>${content}</p>
            <button class="button-delete">Удалить</button>
            <button class="button-archive">Архив</button>
        `;
        
        allArticles.appendChild(article);  // добавить статью в основной раздел
        
        let deleteBtn = article.querySelector('.button-delete');
        let archiveBtn = article.querySelector('.button-archive');
        
        // действия при нажатии кнопок:

        deleteBtn.addEventListener('click', function() {
            article.remove(); // удалить статью
        });

        archiveBtn.addEventListener('click', function() {
            // создать элемент списка для архива
            let archiveItem = document.createElement('li');
            archiveItem.textContent = title;
            
            archivedArticles.appendChild(archiveItem);  // добавить в архив
            article.remove();  // удалить статью из основного раздела
        });
    }
});