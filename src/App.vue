<template>
<h1>App base</h1> 
<nav>
  <router-link to="/">Home</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/register">Register</router-link>
  <button @click="singOutUser">Logout</button>
</nav> 
<router-view></router-view>
</template>

<script setup>
import { useUserStore } from './stores/user';
const useStore = useUserStore ();

 const singOutUser = () => {
    useStore.singOutUser();
 }
</script>

<style>

</style>