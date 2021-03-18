<template>
  <div class="home">
  <div class = "header1">
    <h3> Hire Your Own <big >Robber</big > Today. </h3>
  </div>
  <div class ="header2">
    <p>Ever wanted to commit a <strong>crime</strong>, but you just don't have the time? You've come to the right place!
    Have our top notch undercover agents do your dirty work for you! Choose
    a category below to view our specialized robbers</p>
  </div>

    <div class="pure-menu pure-menu-horizontal menu">
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('all')" href="#" class="pure-menu-link">View all</a></li>
        <li class="pure-menu-item"><a @click="select('car')" href="#" class="pure-menu-link">Cars</a></li>
        <li class="pure-menu-item"><a @click="select('money')" href="#" class="pure-menu-link">Money</a></li>
        <li class="pure-menu-item"><a @click="select('food')" href="#" class="pure-menu-link">Food</a></li>
      </ul>
    </div>


    <RobberList :robbers="robber"/>
  </div>

</template>

<script>
// @ is an alias to /src
import RobberList from '@/components/RobbersList.vue'

export default {
  name: 'Home',
  components: {
    RobberList
  },
  data() {
    return {
      item: "all",
    }
  },
  computed: {
    robber(){
      if (this.item === "all") {
        return this.$root.$data.robbers
      }
      else {
        return this.$root.$data.robbers.filter(robber => robber.specialty[0] === this.item);
      }
    }

  },
  methods: {
    select(item) {
      this.item = item;
    }
  }
}
</script>

<style>

.header1 {
  padding: 200px 25px;
  margin: 10px 0;
  color: #000096;
  font-size: 100px;
}
.header1 h3 {
  font-size: 50px;
}
.header2 {
  background-color: #efdcf3;
  padding: 100px 40px;
  margin: 10px 0;
  color: #000096;
  font-size: 20px;
}
big{
  color:#9e2eb1;
  font-size: 1.6em;
  font-weight: bolder;
  text-decoration: underline;
}
.desc {
  margin: 50px auto;
  width: 70%;
  padding: 1.3em;
  border: 1px solid #9e2eb1;
  background-color: #f5f5f5;
}
.menu {
  margin: 30px 0;
}

@media only screen and (min-width: 600px) {
.header2 {
  padding: 100px 100px;
  }
  
}


</style>
