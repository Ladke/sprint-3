// import utilService from './util.service.js'

import storageService from "./storage.service.js";
import utilService from "./util.service.js";
// import eventBus, { USR_MSG_DISPLAY } from "./event-bus.service.js";


export const emailService = {
  query,
  getEmailById,
  nextEmail,
  prevEmail,
  deleteEmail,
  updateItem,
  sortByDate,
};

const KEY = "emails";

function query(filter = null) {
  return storageService.load(KEY).then(emails => {
    if (!emails || !emails.length) {
      emails = generateEmails();
      storageService.store(KEY, emails);
    }
    if (filter === null) return emails;
    else return emails.filter(email =>
                    email.body.toLowerCase().includes(filter.toLowerCase()))
  });
}

function getEmailById(emailId) {
  return storageService.load(KEY).then(emails => {
    return emails.find(email => email.id === emailId);
  });
}


function nextEmail(emailId) {
  return storageService.load(KEY).then(emails => {
    var emailIdx = emails.findIndex(email => email.id === emailId);
    return (emails[emailIdx + 1].id)? (emails[emailIdx + 1].id) : (emails[emailIdx].id)
  });
}

function prevEmail(emailId) {
    return storageService.load(KEY).then(emails => {
        var emailIdx = emails.findIndex(email => email.id === emailId);
        return (emailIdx === 0)?  (emails[0].id): (emails[emailIdx - 1].id)
    });
}

function deleteEmail(emailId) {
  console.log('deleting email');
  
  return storageService.load(KEY).then(emails => {
    var emailIdx = emails.findIndex(email => email.id === emailId);
    emails.splice(emailIdx, 1);
    return storageService.store(KEY, emails);
  });
}

function dateSort(a, b) {
  var a = a.sentAt;
  var b = b.sentAt;
  if (a < b)
      return 1;
  if (a > b)
      return -1;
  return 0;
}

function updateItem(email) {
  return storageService.load(KEY).then(emails => {
    // Update
    if (email.id) {
      var emailIdx = emails.findIndex(currEmail => currEmail.id === email.id);
      emails.splice(emailIdx, 1, email);
    } else {
      // Add
      email.id = utilService.makeId();
      emails.push(email);
    }
    return storageService.store(KEY, emails);
  });
}

function generateEmails() {
  var emails = [];
  for (let i = 0; i < 30; i++) {
    emails.push(createEmail());
  }
  emails = emails.sort(dateSort)
  return emails;
}

function sortByDate(){
  return storageService.load(KEY)
  .then(emails=> emails.sort(dateSort))


}

function createEmail() {
  var email = {
    id: utilService.makeId(),
    name: faker.name.findName(),
    important: false,
    emailAdrs: faker.internet.email(),
    subject: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(3),
    isRead: false,
    sentAt: faker.date.past()
  };
  // console.log(book);
  return email;
}
