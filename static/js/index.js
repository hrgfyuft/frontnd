Vue.component('todo-item', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义 attribute。
    // 这个 prop 名为 todo。
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  });
  
var main = new Vue({
    el :"#main",
    data:{
        message:"test",
        seen:false,
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
          ],
          groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
          ]
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }

});

