export const database = window.localStorage;

export class EventsService {
  static find() {
    return JSON.parse(database.getItem("events"));
  }

  static findByName(name) {
    let events = JSON.parse(database.getItem("events"));
    return events.find(event => event.name === name);
  }

  static findNext() {
    let events = JSON.parse(database.getItem("events"));
    return events.slice(0, 3);
  }

  static insert(event) {
    let events = JSON.parse(database.getItem("events"));
    events.push(event);
    events.sort((eventA, eventB) => {
      if (Date.parse(eventA.date) <= Date.parse(eventB.date)) {
        return -1;
      } else {
        return 1;
      }
    });
    database.setItem("events", JSON.stringify(events));
  }

  static update(event) {
    let events = JSON.parse(database.getItem("events"));
    let index = events.findIndex(
      eventInList => eventInList.name === event.name
    );
    events[index] = event;
    database.setItem("events", JSON.stringify(events));
  }

  static delete(event) {
    let events = JSON.parse(database.getItem("events"));
    let index = events.findIndex(
      eventInList => eventInList.name === event.name
    );
    events.splice(index, 1);
  }
}

export class UsersService {
  static find() {
    return JSON.parse(database.getItem("users"));
  }

  static findByEmail(email) {
    let users = JSON.parse(database.getItem("users"));
    return users.find(user => user.email === email);
  }

  static insert(user) {
    let users = JSON.parse(database.getItem("users"));
    users.push(user);
    database.setItem("users", JSON.stringify(users));
  }

  static update(user) {
    let users = JSON.parse(database.getItem("users"));
    let index = users.findIndex(userInList => userInList.email === user.email);
    users[index] = user;
    database.setItem("users", JSON.stringify(users));
  }

  static delete(user) {
    let users = JSON.parse(database.getItem("users"));
    let index = users.findIndex(userInList => userInList.email === user.email);
    users.splice(index, 1);
  }

  static exists(email) {
    let users = JSON.parse(database.getItem("users"));
    if (users.findIndex(userInList => userInList.email === email) === -1) {
      return false;
    }
    return true;
  }
}
