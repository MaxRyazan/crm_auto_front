<template>
    <div class="data_container">
        <h3>ФИО пользователя:</h3>
        <h3 class="data_title">{{ username }}</h3>
    </div>
   <div class="data_container">
       <h3>Должность: </h3>
       <h3 class="data_title">{{ job_title }}</h3>
   </div>

</template>

<script setup>

const username = 'Default'
const job_title = 'Default'

</script>
