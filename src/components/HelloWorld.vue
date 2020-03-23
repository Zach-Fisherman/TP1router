<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/TUTOS-FGES.png">
    <h1>Choose a page to go</h1>
    <ol>
      <li>
        <router-link to="/Home/Bienvenue">Go to Home with message = "Bienvenue"</router-link>
      </li>
      <li>
        <router-link to="/Home/Bonjour">Go to Home with message = "Bonjour"</router-link>
      </li>
      <li>
        <router-link to="/Home/">Go to Home</router-link>
      </li>
      
    </ol> <br>
    <h1>Sous vues nommées</h1>
    <ol>
      <li>
        <router-link to="/NamedViews/childComponentExample">Go to ChildComponent</router-link>   
      </li>
      <li>
        <router-link to="/NamedViews/namedSubView" >Go to named sub view</router-link>  
      </li>
    </ol>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
