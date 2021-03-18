<template>
<div class="wrapper">
  <div class="robbers">
    <div class="robber" v-for="robber in robbers" :key="robber.row_number">
      <div class="title">
        <h4>Undercover agent:</h4>
        <h1>{{robber.name}} </h1>
      </div>
      <div class="i">
        <img :src= robber.avatar>

      </div>

      <div>
        <router-link class="link" :key = "robber.row_number" :to="{ name: 'Profile', params: { id: robber.row_number }}"> View Profile </router-link>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'RobberList',
  props: {
    robbers: Array
  },
  methods: {

  }
}
</script>

<style scoped>
  .wrapper {
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .robbers {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }
  .robber {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 7px;
    padding: 14px;
    background-color: #F5F5F5;
  }
  .robber h1{
    margin: 0;
  }
  .title h1{
    color: #000096;
  }
  .title h4{
    color: #9e2eb1;
  }
  img {
    padding-bottom: 10px;
  }
  .link {

    color: #000096;
  }

</style>
