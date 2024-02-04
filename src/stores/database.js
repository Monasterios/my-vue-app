import { defineStore } from "pinia";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";

export const useDatabase = defineStore("database", {
  state: () => {
    return {
      documents: [],
    };
  },
  actions: {
    async getUrls() {
      try {
        const q = query(
          collection(db, "urls"),
          where("user", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          this.documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
  },
});
