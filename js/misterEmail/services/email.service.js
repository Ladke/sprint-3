import storageService from "./storage.service.js";
import utilService from "./util.service.js";

export const emailService = {
  query,
  getEmailById,
  nextEmailId,
  prevEmailId,
  deleteEmail,
  updateItem
  // sortByDate,
};

const KEY = "emails";

function query(filter = null) {
  return storageService.load(KEY).then(emails => {
    if (!emails || !emails.length) {
      emails = generateEmails();
      storageService.store(KEY, emails);
    }
    if (filter === null) return emails;
    else
      return emails.filter(email =>
        email.body.toLowerCase().includes(filter.toLowerCase())
      );
  });
}

function getEmailById(emailId) {
  return storageService.load(KEY).then(emails => {
    return emails.find(email => email.id === emailId);
  });
}

function nextEmailId(emailId) {
  return storageService.load(KEY).then(emails => {
    var emailIdx = emails.findIndex(email => email.id === emailId);
    return emails[emailIdx + 1].id
      ? emails[emailIdx + 1].id
      : emails[emailIdx].id;
  });
}

function prevEmailId(emailId) {
  return storageService.load(KEY).then(emails => {
    var emailIdx = emails.findIndex(email => email.id === emailId);
    return emailIdx === 0 ? emails[0].id : emails[emailIdx - 1].id;
  });
}

function deleteEmail(emailId) {
  return storageService.load(KEY).then(emails => {
    var emailIdx = emails.findIndex(email => email.id === emailId);
    emails.splice(emailIdx, 1);
    return storageService.store(KEY, emails);
  });
}

// function emailRead(emailID){
//   return storageService.load(KEY)
//   .then(emails => {
//       var carIdx = emails.findIndex(car => car.id === carId);
//       emails.splice(carIdx, 1);
//       return storageService.store(KEY, emails);
//   })
// }

function dateSort(a, b) {
  var a = a.sentAt;
  var b = b.sentAt;
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}

function updateItem(email) {
  return storageService.load(KEY).then(emails => {
    if (email.id) {
      var emailIdx = emails.findIndex(currEmail => currEmail.id === email.id);
      emails.splice(emailIdx, 1, email);
    } else {
      email.id = utilService.makeId();
      emails.unshift(email);
    }
    emails.sort(dateSort);     
    return storageService.store(KEY, emails);
  });
}

function generateEmails() {
  var emails = [];
  for (let i = 0; i < 30; i++) {
    emails.push(createEmail());
  }
  emails = emails.sort(dateSort);
  return emails;
}

function sortByDate() {
  return storageService.load(KEY).then(emails => {
    emails.sort(dateSort);
    storageService.store(KEY, emails);
  });
}

function createEmail() {
  var email = {
    id: utilService.makeId(),
    name: faker.name.findName(),
    important: false,
    emailFrom: faker.internet.email(),
    emailTo: 'me@gmail.com',
    subject: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(3),
    isRead: false,
    sentAt: faker.date.past()
  };
  return email;
}
