<template>
    <h1>Home</h1>
    <div>
        <b>User mail</b>
        <div>
            <span>{{ useStore.userData?.email }}</span>
        </div>
        <button @click="useStore.deleteUserSession">Delete user</button>
    </div>
</template>
    
<script setup>
import { useUserStore } from "../stores/user";
const useStore = useUserStore();

</script>