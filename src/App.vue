<template>
  <div>
    <div class="container">
      <hr>
      <div class="header">ToDoList</div>
      <hr>
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  font-size: 18px;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
}
.header {
  text-align: center;
  margin: 20px 0 20px 0;
}
</style>