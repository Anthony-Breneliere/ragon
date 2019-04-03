var config = {}

config.host = process.env.HOST || "https://breneliere.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "kU5ym2WyHhzgh0sQ7rXrLEq3abxgwbIU9PB5zlz2Ps2wn4FRsVwp5Wc3swPXzyQeAEPrsVGudHLfx2i9KetQpw==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;