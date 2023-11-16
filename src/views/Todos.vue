<script>
import ToDoList from "@/components/ToDoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import LoaderVue from "@/components/LoaderVue.vue";

export default {
  name: 'app',
  data: () => {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    AddTodo,
    ToDoList,
    LoaderVue
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json.map((el) => ({
              ...el,
              completed: false
            }))
            this.loading = false
          }, 2000)
        })
  },
  // watch: {
  //   filter(value) {
  //     console.log(value)
  //   }
  // },
  computed: {
    filteredTodos() {
      let filter

      if (this.filter === 'all') {
        filter = this.todos
      }

      if (this.filter === 'completed') {
        filter = this.todos.filter(t => t.completed)
      }

      if (this.filter === 'not-completed') {
        filter = this.todos.filter(t => !t.completed)
      }

      return filter
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>

<template>
  <div>
    <div class="container">
      <router-link to="/">Back</router-link>
      <Add-todo
          v-on:add-todo="addTodo"
      />
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not completed</option>
      </select>
      <LoaderVue class="loader" v-if="loading"/>
      <ToDoList
          v-if="filteredTodos.length"
          v-bind:todos="filteredTodos"
          v-on:remove-todo="removeTodo"
      />
      <div v-else>No todos!</div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  background: white;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  left: 0;
  right: 0;
  text-align: center;
}
</style>