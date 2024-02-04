import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../firebaseConfig";
import router from "../router";
// import { useRouter } from "vue-router";


export const useUserStore = defineStore ("userStore", {
    state: ()=> ({
        userData: null,
        loadingUser: false,
        // router: useRouter()
    }),
    actions: {
        async registerUser(email, password) {
            this.loadingUser = true
            try {
               const {user} = await createUserWithEmailAndPassword(auth, email, password)
               this.userData = { email: user.email, uid: user.uid }
            //    this.router.push('/')
               router.push('/')
               console.log(user);
            } catch(error) {
                console.log(error)
            } finally {
                this.loadingUser = false
            }
        },
        async signInUser(email, password) {
            this.loadingUser = true
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
                // this.router.push('/')
                router.push('/')
            }catch(error) {
                console.log(error)
            } finally {
                this.loadingUser = false
            }
        },
       async singOutUser() {
        try {
            await signOut(auth);
            this.userData = null;
            router.push('/login')
            console.log('cerrada sesion');
        } catch(error) {
            console.log('hubo un error')
        }
       }
    }
 
});