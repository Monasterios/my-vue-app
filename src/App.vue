<template>
<h1>App base</h1> 
<nav v-if="!useStore.loadingSession">
  <router-link to="/" v-if="useStore.userData">Home</router-link>
  <router-link to="/login" v-if="!useStore.userData">Login</router-link>
  <router-link to="/register" v-if="!useStore.userData">Register</router-link>
  <button @click="singOutUser" v-if="useStore.userData">Logout</button>
</nav> 
<div v-else>
  <span>Loading user</span>
</div>
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