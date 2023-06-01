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
  initializeApp(firebaseConfig);
  const storage = getStorage();

  try {
    const folders = ["social", "brand", "solid", "outline"];
    const fileData = [];

    for (const folder of folders) {
      const storageRef = ref(storage, folder);
      const fileList = await listAll(storageRef);

      const folderData = await Promise.all(
        fileList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return { name: item.name, url };
        })
      );

      fileData.push({ folder, data: folderData });
    }

    res.status(200).json(fileData);
  } catch (error) {
    console.log("Error retrieving storage items:", error);
    res.status(500).json({ error: "Error retrieving storage items." });
  }
}
