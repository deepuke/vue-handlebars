
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        groceryList: [
            { id: 1, text: 'Vegitables' },
            { id: 2, text: 'Cheese' },
            { id: 3, text: 'Fish' },
        ]
    }
});
