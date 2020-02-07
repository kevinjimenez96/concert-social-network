export default function Event(
  name,
  date,
  owner,
  image,
  playlist,
  assistants,
  config
) {
  this.name = name;
  this.date = date;
  this.owner = owner;
  this.image = image;
  this.playlist = playlist;
  this.assistants = assistants;
  this.config = config;
}

export function Config(type, numUsersToAdd) {
  this.type = type;
  this.numUsersToAdd = numUsersToAdd;
}
