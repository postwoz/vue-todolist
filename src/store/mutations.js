// 모듈화를 위해 todoApp.js 로 이동.

// const addOneItem = (state, todoItem) => {
//     const obj = {
//         completed: false,
//         item: todoItem
//     };
//     console.log(obj);
//     state.todoItems.push(obj);
//     localStorage.setItem(todoItem, JSON.stringify(obj));
// }

// const removeItem = (state, payload) => {
//     state.todoItems.splice(payload.index, 1);
//     localStorage.removeItem(payload.todoItem.item);
// }

// const toggleItem = (state, payload) => {
//     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
//     localStorage.removeItem(payload.todoItem.item);
//     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
// }

// const clearAll = (state) => {
//     state.todoItems = [];
//     localStorage.clear();
// }

// export {
//     addOneItem,
//     removeItem,
//     toggleItem,
//     clearAll
// }