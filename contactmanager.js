class ContactManager {
  constructor() {
      this.contacts = [];
  }

  addContact(contact) {
      if (!contact.name || !contact.phoneNumber || !contact.email) {
          throw new Error("Name, phone number, and email are required");
      }
      this.contacts.push(contact);
  }

  editContact(index, newContact) {
      if (index < 0 || index >= this.contacts.length) {
          throw new Error("Invalid index");
      }
      if (!newContact.name || !newContact.phoneNumber || !newContact.email) {
          throw new Error("Name, phone number, and email are required");
      }
      this.contacts[index] = newContact;
  }

  deleteContact(index) {
      if (index < 0 || index >= this.contacts.length) {
          throw new Error("Invalid index");
      }
      this.contacts.splice(index, 1);
  }

  getContacts() {
      return this.contacts;
  }
}

module.exports = ContactManager;
