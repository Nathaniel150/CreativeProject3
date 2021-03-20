<template>
  <div>
    <div class = "header1">
      <h3>Your Hired <big >Robbers</big >. </h3>
    </div>

    <div v-for="robber in this.$root.$data.hiredRobbers" :key="robber.id">
      <div class="container">
        <div class="row align-row-center">
          <div class="col-12 col-md-6 col-lg-2 picture">
            <img :src=robber.avatar>
          </div>
          <div class="col-12 col-md-6 col-lg-4 info">
            <h2>{{robber.title}}. {{robber.name}}</h2>
            <p v-if="robber.specialty[0] === 'car'"><strong>Mission:</strong> Steal a {{robber.specialty[2]}} {{robber.specialty[1]}}</p>
            <p v-else-if="robber.specialty[0] === 'money'"><strong>Mission:</strong> Steal {{robber.specialty[1]}} from the company {{robber.specialty[2]}}</p>
            <p v-else><strong>Mission:</strong> Steal {{robber.specialty[2]}} from the address {{robber.specialty[1]}}</p>

          </div>
          <div class="col-12 col-md-6 col-lg-4 info">
            <p><strong>Start Date: </strong>{{robber.startDate}}</p>
            <p><strong>Mission Length: </strong>{{robber.duration}}</p>
            <p><strong>Notes: </strong>{{robber.comments}}</p>
          </div>
          <div class="col-12 col-md-6 col-lg-2 info">
            <button v-on:click="removeRobber(robber)">Delete</button>
            <router-link :key = "robber.row_number" :to="{ name: 'Hired', params: { id: robber.row_number }}"><button>Edit</button></router-link>
          </div>

        </div>
      </div>
    </div>
      <router-link v-if ="this.$root.$data.hiredRobbers.length === 0" class="toHome" to="/">
         Hire A Robber!
      </router-link>
      <router-link v-else class="toHome" to="/">
         Hire Another Robber!
      </router-link>
  </div>

</template>

<script>
  export default {
    name: 'Hired',
    data () {
      return {
        hiredRobbers: {}
      }
    },
    created () {
    },
    methods: {
      removeRobber(robber) {
        this.$root.$data.hiredRobbers = this.$root.$data.hiredRobbers.filter(myRobber => !(robber===myRobber));

      }
    }
  }
</script>

<style scoped>
  .container{
    background-color: #efdcf3;
    margin: 15px auto;
    text-align: left;
    border-radius: 5px;
  }
  .header1 {
    padding: 150px 25px;
    margin: 10px 0;
    color: #000096;
    font-size: 100px;
  }
  .header1 h3 {
    font-size: 50px;
  }
  .picture img{
    width: 200px;
    display: block;
    margin: 0 auto;
  }

  .info {
    padding:25px;
  }
  .info p, h2 {
    margin-left: 30px;
  }
  button {
    border: 1px solid #00000024;
    background-color:#efdcf3;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 42%;
    color: black;
  }
  .toHome {
    border: 1px solid #00000024;
    background-color:#efdcf3;
    border-radius: 5px;
    padding: 10px;

    margin: 20px auto;
    color: black;
    display: block;
    width:20%;
  }

  @media only screen and (min-width: 1000px) {
    button {
      width: 80%;
    }
  }
</style>
