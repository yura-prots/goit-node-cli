import { program } from "commander";

import { listContacts, getContactById, addContact } from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts();

      console.table(contactsList);
      break;

    case "get":
      const contactToFind = await getContactById(id);

      console.log(contactToFind);
      break;

    case "add":
      const contactToAdd = await addContact(name, email, phone);

      console.log(contactToAdd);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
