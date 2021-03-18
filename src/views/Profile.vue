<template>
  <div>


    <div class = "container">
        <div class = "row align-items-center">
          <div class = "col-12 col-md-6 picture">
            <img :src=robbers.avatar>
          </div>
          <div class = "col-12 col-md-6 info">
            <h1>{{robbers.title}}. {{robbers.name}}</h1>
            <p v-if="robbers.specialty[0] === 'car'"><strong>Specialty:</strong> {{robbers.specialty[0]}}<br/> <strong>Make:</strong> {{robbers.specialty[1]}}<br/> <strong>Model:</strong> {{robbers.specialty[2]}}</p>
            <p v-else-if="robbers.specialty[0] === 'money'"><strong>Specialty:</strong> {{robbers.specialty[0]}}<br/> <strong>Amount:</strong> {{robbers.specialty[1]}}<br/> <strong>Location:</strong> {{robbers.specialty[2]}}</p>
            <p v-else><strong>Specialty:</strong> {{robbers.specialty[0]}}<br/> <strong>Item:</strong> {{robbers.specialty[2]}}<br/> <strong>Address:</strong> {{robbers.specialty[1]}}</p>
          </div>
        </div>
        <div class = "row align-items-center">
          <div class = "col-12 bio">
          <p>{{robbers.bio}}</p>
          </div>
        </div>
    </div>
    <div class = "hireButton">
      <router-link :key = "robbers.row_number" :to="{ name: 'Hired', params: { id: robbers.row_number }}"><button>Hire Now!</button></router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      robbers: {}
    }
  },
  created() {
      this.robbers = this.$root.$data.robbers.find(robber => robber.row_number === parseInt(this.$route.params.id));
  },
}
</script>

<style scoped>
  .picture img {
    margin-top: 50px;
    width: 100%;
    background-color: #efdcf3;
    border-radius: 5px;
  }
  .info{
    margin-top: 50px;
  }
  .info p {
    text-align: left;
    padding-left: 20px;
    font-size: 25px;
  }
  .info h1{
    font-size: 60px;
    color: #000096;
  }
  .bio {
    font-size: 20px;
    margin:40px 0px;
    text-align: left;
  }
  button {
    text-align: right;
    border: 1px solid #00000024;
    background-color:#efdcf3;
    border-radius: 5px;
    padding: 10px;
    color: black;
  }
</style>
