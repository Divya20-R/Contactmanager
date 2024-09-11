const ContactManager = require('./ContactManager');

describe('ContactManager', () => {
    let contactManager;

    beforeEach(() => {
        contactManager = new ContactManager();
    });

    test('should add a contact successfully', () => {
        const contact = { name: 'John Doe', phoneNumber: '1234567890', email: 'john@example.com' };
        contactManager.addContact(contact);
        expect(contactManager.getContacts()).toContain(contact);
    });

    test('should throw an error if name, phone number, or email is missing when adding contact', () => {
        const incompleteContact = { name: 'Jane Doe', email: 'jane@example.com' }; // Missing phoneNumber
        expect(() => contactManager.addContact(incompleteContact)).toThrow("Name, phone number, and email are required");
    });

    test('should edit a contact successfully', () => {
        const contact = { name: 'Jane Doe', phoneNumber: '0987654321', email: 'jane@example.com' };
        contactManager.addContact(contact);
        const updatedContact = { name: 'Jane Smith', phoneNumber: '1122334455', email: 'jane.smith@example.com' };
        contactManager.editContact(0, updatedContact);
        expect(contactManager.getContacts()[0]).toEqual(updatedContact);
    });

    test('should throw an error if name, phone number, or email is missing when editing contact', () => {
        const contact = { name: 'John Doe', phoneNumber: '1234567890', email: 'john@example.com' };
        contactManager.addContact(contact);
        const incompleteContact = { name: 'John Doe', email: 'john.new@example.com' }; // Missing phoneNumber
        expect(() => contactManager.editContact(0, incompleteContact)).toThrow("Name, phone number, and email are required");
    });

    test('should throw an error if editing a non-existent contact', () => {
        expect(() => contactManager.editContact(1, { name: 'Test', phoneNumber: '0000000000', email: 'test@example.com' })).toThrow("Invalid index");
    });

    test('should delete a contact successfully', () => {
        const contact = { name: 'John Doe', phoneNumber: '1234567890', email: 'john@example.com' };
        contactManager.addContact(contact);
        contactManager.deleteContact(0);
        expect(contactManager.getContacts()).toEqual([]);
    });

    test('should throw an error if deleting a non-existent contact', () => {
        expect(() => contactManager.deleteContact(1)).toThrow("Invalid index");
    });
});
