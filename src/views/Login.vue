<template>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit"> 
        <input type="email" placeholder="ingrese email" v-model.trim="email">
        <input type="password" name="password" id="" placeholder="ingrese contraseña" v-model.trim="password"> 
        <button type="submit" :disabled="useStore.loadingUser" >Log in</button>
    </form>
</template>
    
<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
// import { useRouter } from "vue-router";

const useStore = useUserStore();
// const router = useRouter ();

const email = ref('test@mail.com');
const password = ref('123123');

const handleSubmit = async () => {
         if(!email.value || !password.value) {
            return alert('rellena los campos')
         }
         
         await useStore.signInUser(email.value, password.value)
        //  router.push('/')
}
</script>
