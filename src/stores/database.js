import { defineStore } from "pinia";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const useDatabase = defineStore("database", {
  state: () => {
    return {
      documents: [],
    };
  },
  actions: {
    async getUrls() {
      try {
        const q = query(collection(db, "urls"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
        });
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
  },
});
