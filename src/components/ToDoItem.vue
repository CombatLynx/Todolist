<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  computed: {
    uppercase() {
      return this.todo.title.toUpperCase()
    }
  },
  data() {
    return {
      todoLocal: this.todo
    }
  },
  methods: {
    onCompleted() {
      this.todoLocal.completed = !this.todoLocal.completed
    }
  }
}
</script>

<template>
  <li>
    <div class="elem-li" v-bind:class="{done: todo.completed}">
      <input type="checkbox" class="checkbox"
             v-on:change="onCompleted"
      >
      <span class="todo-number">{{index + 1}}</span>
      <span>.</span>
      <span class="todo-title">{{uppercase}}</span>
    </div>
    <button class="remove" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<style scoped>
.elem-li {
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox {
  margin-right: 20px;
  padding: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
button {
  cursor: pointer;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
input {
  border-radius: 100%;
}
.done {
  text-decoration: line-through;
}
</style>