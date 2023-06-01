import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

export default async function handler(req, res) {
  const icons = req.query.icons;
  initializeApp(firebaseConfig);
  const storage = getStorage();

  try {
    const storageRef = ref(storage, icons);
    const fileList = await listAll(storageRef);

    const fileData = await Promise.all(
      fileList.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { name: item.name, url };
      })
    );

    res.status(200).json(fileData);
  } catch (error) {
    console.log("Error retrieving storage items:", error);
    res.status(500).json({ error: "Error retrieving storage items." });
  }
}
