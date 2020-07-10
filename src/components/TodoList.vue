<template>
  
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkCompleted: todoItem.completed}"
          v-on:click="toggleTodo({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>

</template>


<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['storedTodoItems'])
  },
  methods: {
    ...mapMutations({
      removeTodo: 'removeItem'
    }),
    ...mapMutations({
      toggleTodo: 'toggleItem'
    }),
  }
}

</script>


<style scoped>

ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 1rem auto;
  padding: 0 1rem;
  background: white;
  border-radius: 5px;
  width: 50%;
  box-sizing: border-box;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  cursor: pointer;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: rgb(194, 203, 212);
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>