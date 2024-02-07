import { Storage } from "@ionic/storage";

export const storage = new Storage();
storage
  .create()
  .then(() => {
    console.log("Database created");
  })
  .catch((error) => {
    console.error("Error creating database:", error);
  });

export const getToken = () => {
  return storage.get("token");
};
