import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

get(child(ref(database), `phones`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      let dataList = snapshot.val();

      let root = document.getElementById("data");
      dataList.forEach((data) => {
        root.innerHTML += `
          <div class="p-5 mb-2 border border-info rounded-3">
           ${JSON.stringify(data)}
          </div>
        `;
      });
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });
