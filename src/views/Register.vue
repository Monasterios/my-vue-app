<template>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit"> 
        <input type="email" placeholder="ingrese email" v-model.trim="email">
        <input type="password" name="password" id="" placeholder="ingrese contraseña" v-model.trim="password"> 
        <button type="submit">Crear usuario</button>
    </form>
</template>
    
<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const email = ref('test@mail.com');
const password = ref('123123');

const handleSubmit = () => {

    if(!email.value || !password.value) {
        return alert('rellene los datos');
    }  
    
     userStore.registerUser(email.value, password.value) 
}
</script>
