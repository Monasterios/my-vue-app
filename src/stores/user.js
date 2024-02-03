import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../firebaseConfig";
import router from "../router";
// import { useRouter } from "vue-router";


export const useUserStore = defineStore ("userStore", {
    state: ()=> ({
        userData: null,
        // router: useRouter()
    }),
    actions: {
        async registerUser(email, password) {
            try {
               const {user} = await createUserWithEmailAndPassword(auth, email, password)
               this.userData = { email: user.email, uid: user.uid }
            //    this.router.push('/')
               router.push('/')
               console.log(user);
            } catch(error) {
                console.log(error)
            }
        },
        async signInUser(email, password) {
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
                // this.router.push('/')
                router.push('/')
            }catch(error) {
                console.log(error)
            }
        },
       async singOutUser() {
        try {
            await signOut(auth);
            router.push('/login')
            console.log('cerrada sesion');
        } catch(error) {
            console.log('hubo un error')
        }
       }
    }
 
});