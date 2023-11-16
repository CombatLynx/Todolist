<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
  props: ['todos'],
  components: {
    ToDoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <ToDoItem
          v-for="(todo, i) of todos"
          v-bind:index="i"
          v-bind:todo="todo"
          v-bind:key="todo.id"
          v-on:remove-todo="removeTodo"
      ></ToDoItem>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>