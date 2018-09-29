(function () {
    'use strict';

    var books = [
        { title: 'Demo 01' },
        { title: 'Demo 02' }
    ];
    
    var html = Handlebars.templates['booksList']({ books: books });
    $('#bookList').empty().append(html);
})();