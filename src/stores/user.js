import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../router";
// import { useRouter } from "vue-router";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
    loadingUser: false,
    loadingSession: false,
    // router: useRouter()
  }),
  actions: {
    async registerUser(email, password, name) {
      this.loadingUser = true;
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            this.userData = {
              email: user.email,
              uid: user.uid,
              name: user.displayName,
            };
            //    this.router.push('/')
            router.push("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async signInUser(email, password) {
      this.loadingUser = true;
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
          name: user.displayName,
        };
        // this.router.push('/')
        router.push("/");
        console.log(user);
        console.log(user.displayName);
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async singOutUser() {
      try {
        await signOut(auth);
        this.userData = null;
        router.push("/login");
        console.log("cerrada sesion");
      } catch (error) {
        console.log("hubo un error");
      }
    },
    userSession() {
      return new Promise((resolve, reject) => {
        // encerramos en async/await al metodo onAuthStateChanged
        // para esperar la respuesta
        (async () => {
          await onAuthStateChanged(
            auth,
            (user) => {
              if (user) {
                this.userData = {
                  email: user.email,
                  uid: user.uid,
                  name: user.displayName,
                };
              } else {
                this.userData = null;
              }
              resolve(user);
            },
            (e) => reject(e)
          );
        })();
      });
    },
    async deleteUserSession() {
      await deleteUser(auth.currentUser)
        .then(() => {
          console.log("usuario eliminado");
          router.push("/register");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
