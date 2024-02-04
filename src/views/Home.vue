<template>
    <h1>Home</h1>
    <div>
        <b style="font-size: 20px;">User profile</b>
        <br>
        <br>
        <div>
            <div><b>Name</b></div>
            <span>{{ useStore.userData?.name }}</span>
        </div>
        <br>
        <hr style="width: 100px; text-align: left; margin:0;">
        <br>
        <div>
            <div><b>Email</b></div>
            <span>{{ useStore.userData?.email }}</span>
        </div>
        <br>
        <br>
        <button @click="useStore.deleteUserSession">Delete user</button>
    </div>
</template>
    
<script setup>
import { useUserStore } from "../stores/user";
import { useDatabase } from "../stores/database";

const db = useDatabase();
const useStore = useUserStore();

db.getUrls();
</script>