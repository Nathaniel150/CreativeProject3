<template>
  <div class="banner">
    <div class="hireHeader">
      <h1>HIRED</h1>
    </div>
    <div>
      <img class="avatar" :src=robbers.avatar>
    </div>
    <div class="info">
      <p v-if="robbers.specialty[0] === 'car'">You've hired {{robbers.title}}. {{robbers.name}} to steal a <strong>{{robbers.specialty[2]}} {{robbers.specialty[1]}}</strong>. You will be contacted shortly with all the details</p>
      <p v-else-if="robbers.specialty[0] === 'money'">You've hired {{robbers.title}}. {{robbers.name}} to steal <strong>{{robbers.specialty[1]}}</strong> from the company <strong>{{robbers.specialty[2]}}</strong>. You will be contacted shortly with all the details</p>
      <p v-else>You've hired {{robbers.title}}. {{robbers.name}} to steal <strong>{{robbers.specialty[2]}}</strong> from the address <strong>{{robbers.specialty[1]}}</strong>. You will be contacted shortly with all the details</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Hired',
    data () {
      return {
        robbers: {}
      }
    },
    created () {
      this.robbers = this.$root.$data.robbers.find(robber => robber.row_number === parseInt(this.$route.params.id));
    }
  }
</script>

<style scoped>
  .banner {
    padding: 20px 0;
    background-color: #efdcf3;
    margin: 10px auto;
    margin-top: 120px;
    width: 90%;
    border-radius: 5px;
  }
  .hireHeader h1 {
    font-size: 60px;
    margin-bottom: 0;
  }
  .avatar{
    width: 60%;
    margin: 0 auto;
    border-radius: 5px;
    padding-bottom: 20px;
  }
  .info {
    padding: 0 20px;
    text-align: center;
  }
  .info p {
    width: 60%;
    margin: 20px auto;
    font-size: 20px;
  }
  @media only screen and (min-width: 700px) {
    .avatar {
      width: 25%;
    }
  }

</style>
