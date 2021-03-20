<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> Home |</router-link><router-link to="/listhired"> Your Robbers</router-link>
    </div>
    <div class = "page">
      <router-view/>
    </div>
    <div class="center footer">
      <a class="githubLink" href="https://github.com/Nathaniel150/CreativeProject3">| GitHub Repository |</a>
    </div>
  </div>
</template>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  background-color: #000096;

}

#nav a {

  color: white;
}

#nav a.router-link-exact-active {
  color: white;

}

.footer {
	padding: 2em;
	text-align: center;
	background-color: #000096;
	color: white;
  margin-top: 130px;


}
.footer a{
  color: white;
}

@media only screen and (min-width: 1000px) {
	.page{
		width: 1000px;
		margin: 0px auto;
	}
}
</style>
