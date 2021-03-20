<template>
  <div>
    <div class="banner">
      <div class="hireHeader">
        <h1>Hiring Information</h1>
      </div>

      <div class="info">
      <label for = "start"><h5>Start Date:</h5></label>
      <input type = "date" id = "startDate" v-model="startDate" name="startDate">


      <form>
        <div class = "radio">
            <legend>Length of Contract</legend>
            <input type ="radio" v-model="duration" name="duration" value = "3 Days">
            <label for="3Days">3 Days: Risky but fast, easy, simple business, get the job done</label><br/>

            <input type ="radio" v-model="duration" name="duration" value = "1 week">
            <label for="1week">1 Week: Planned out, unlikely to get caught, skilled robbers available</label><br/>

            <input type ="radio" v-model="duration" name="duration" value = "3 weeks">
            <label for="3weeks">3 Weeks: Clever infiltration and delivery, assurance of no legal consequences</label><br/>
          </div>

        <label for= "textboxLabel"> Additional Notes/Request </label><br/>

        <textarea v-model="comments"></textarea>
      </form>
      </div>


    </div>

    <router-link to="/listhired">
      <button v-on:click="hireRobber()">Submit</button>
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'Hired',
    data () {
      return {
        robbers: {
        },
        startDate: "",
        duration: "",
        comments: "",
      }
    },
    created () {
      this.robbers = this.$root.$data.robbers.find(robber => robber.row_number === parseInt(this.$route.params.id));
    },
    methods: {
      hireRobber() {

        for (let i = 0; i < this.$root.$data.hiredRobbers.length; i++) {
          if (this.$root.$data.hiredRobbers[i].name === this.robbers.name) {
            this.robbers.startDate = this.startDate;
            this.robbers.duration = this.duration;
            this.robbers.comments = this.comments;
            window.alert("Robber Already Hired: Updating Information");
            return;
          }
        }
        this.robbers.startDate = this.startDate;
        this.robbers.duration = this.duration;
        this.robbers.comments = this.comments;
        this.$root.$data.hiredRobbers.push(this.robbers);


      },
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
    text-align: left;
  }
  .hireHeader h1 {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
  }
  .avatar{
    width: 60%;
    margin: 0 auto;
    border-radius: 5px;
    padding-bottom: 20px;
  }
  .info {
    padding: 0 20px;

  }
  #startDate{
    margin-left: 10px;
  }

  .radio{

    margin: 30px 0;

  }
  legend{
    font-size: 25px;
  }
  button {
    margin-top: 20px;
    border: 1px solid #00000024;
    background-color:#efdcf3;
    border-radius: 5px;
    padding: 10px;
    color: black;
  }
  textarea{
    width: 100%;
    height:80px;
    padding: 7px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 700px) {
    .banner {
      text-align: center;
    }
    .hireHeader h1 {
      font-size: 60px;
    }
  }

</style>
