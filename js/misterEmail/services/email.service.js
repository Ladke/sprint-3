// import utilService from './util.service.js'

import storageService from "./storage.service.js";
import utilService from "./util.service.js";
import eventBus, { USR_MSG_DISPLAY } from "./event-bus.service.js";


export const emailService = {
  query,
  getEmailById,
  nextEmail,
  prevEmail,
  deleteEmail,
};

const KEY = "emails";

function query(filter = null) {
  return storageService.load(KEY).then(emails => {
    if (!emails || !emails.length) {
      emails = generateEmails();
      storageService.store(KEY, emails);
    }

    console.log("emails: ", emails);
    if (filter === null) return emails;
    // else return emails.filter(car =>
    //                 car.vendor.toUpperCase().includes(filter.byVendor.toUpperCase()))
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
    return (!emails[emailIdx + 1].id)? (emails[0].id) : (emails[emailIdx + 1].id)
  });
}

function prevEmail(emailId) {
    return storageService.load(KEY).then(emails => {
        var emailIdx = emails.findIndex(email => email.id === emailId);
        return (!emails[emailIdx - 1].id)? (emails[emails.length].id) : (emails[emailIdx - 1].id)
    });
}

function deleteEmail(emailId) {
  return storageService.load(KEY).then(emails => {
    var emailIdx = emails.findIndex(email => email.id === emailId);
    emails.splice(emailIdx, 1);
    return storageService.store(KEY, emails);
  });
}

function saveCar(car) {
  return storageService.load(KEY).then(cars => {
    // Update
    if (car.id) {
      var carIdx = cars.findIndex(currCar => currCar.id === car.id);
      cars.splice(carIdx, 1, car);
    } else {
      // Add
      car.id = utilService.makeId();
      cars.push(car);
    }
    return storageService.store(KEY, cars);
  });
}

function generateEmails() {
  var emails = [];
  for (let i = 0; i < 10; i++) {
    emails.push(createEmail());
  }
  return emails;
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
