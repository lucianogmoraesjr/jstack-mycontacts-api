const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Luciano',
    email: 'luciano@mail.com',
    phone: '51999999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
