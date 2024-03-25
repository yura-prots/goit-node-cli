import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);

    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

export { listContacts, getContactById, removeContact, addContact };
