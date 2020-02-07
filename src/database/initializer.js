import User from "../models/user";
import Event from "../models/event";
import { UsersService, EventsService } from "../database/database";

export default function initializer() {
  let andreUser = new User("Andre", "patito", "12131342805");
  let hayleenUser = new User("Hayleen", "patito", "22mvxki27kwxpkuwx2gktelli");
  let gustavoUser = new User("Hayleen", "patito", "3vd621xmjn23caokv7saxw3bj");

  UsersService.insert(andreUser);
  UsersService.insert(hayleenUser);
  UsersService.insert(gustavoUser);

  let tex_mexEvent = new Event(
    "Tex-Mex Summer Party",
    new Date(2020, 3, 20),
    "Andre",
    "/assets/Tex-Mex_Summer_Party.gif",
    null,
    [],
    null
  );

  let gastronomyEvent = new Event(
    "Gastronomy World Tour",
    new Date(2020, 5, 20),
    "Andre",
    "/assets/Gastronomy_World_Tour.gif",
    null,
    [],
    null
  );

  let bartenderEvent = new Event(
    "Bartender vs Barista",
    new Date(2020, 7, 9),
    "Andre",
    "/assets/Bartender_vs_Barista.gif",
    null,
    [],
    null
  );

  let thanksGivingEvent = new Event(
    "Social_Thanksgiving-2019",
    new Date(2020, 10, 20),
    "Andre",
    "/assets/Social_Thanksgiving-2019.png",
    null,
    [],
    null
  );

  EventsService.insert(thanksGivingEvent);
  EventsService.insert(bartenderEvent);
  EventsService.insert(tex_mexEvent);
  EventsService.insert(gastronomyEvent);
}
