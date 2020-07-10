<template>
  <div id="app">
   <TodoHeader></TodoHeader>
   <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput> -->
   <TodoInput></TodoInput>
   <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
   <TodoList></TodoList>
   <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// 기존 ES5 방식

// var my_cmp = {
//     template: '<div>my component</div>'
//   };

// new Vue({
//   el:'',
//   components:{
//     // '컴포넌트 이름' : '컴포넌트 내용'
//     'my-cmp': my_cmp
//   }
// })

export default {
  //   methods:{ // mutations
  //   // addOneItem(todoItem){
  //   //   const obj = {completed: false, item: todoItem};    
  //   //   // localStorage - 저장하는 로직
  //   //   // JSON.stringify - 자바스크립트의 obj 오브젝트를 스트링으로 변환시켜주는 API
  //   //   // push = 자바스크립트 API, 배열에서 어레이 요소를 추가
  //   //   this.todoItems.push(obj);
  //   //   localStorage.setItem(todoItem, JSON.stringify(obj));   
                
  //   // },
  //   // removeOneItem(todoItem, index){
  //   //   // splice API     
  //   //   this.todoItems.splice(index, 1);
  //   //   // removeItem API
  //   //   localStorage.removeItem(todoItem.item);  
  //   // },
  //   // toggleOneItem(todoItem, index){
  //   //   // console.log(todoItem);
  //   //   // 아래와 같은 역할이지만 이건 안티 패턴이고 아래가 Vue.app이 콘테이너 역할 수행 - todoItem.completed = !todoItem.completed;
  //   //   this.todoItems[index].completed = !this.todoItems[index].completed;
  //   //   // 로컬 스토리지의 데이터를 갱신
  //   //   localStorage.removeItem(todoItem.item);
  //   //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   // },
  //   // clearAllItems(){
  //   //   this.todoItems = [];
  //   //   localStorage.clear();      
  //   // } 
  // },
  
  components:{
    // 컴포넌트 태그명 : 컴포넌트 내용
     TodoHeader,
     TodoInput,
     TodoList,
     TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color:#F6F6F6;
}
input{
  border-style: groove;
  width: 400px;

}
button{
  border-style: groove;
}
.shadow{
  box-shadow:5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
