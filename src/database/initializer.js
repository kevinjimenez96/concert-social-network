import Event from "../models/event";
import { EventsService } from "../database/database";

export default function initializer() {
  let tex_mexEvent = new Event(
    "Tex-Mex Summer Party",
    new Date(2020, 3, 20),
    "Andre",
    "/assets/Tex-Mex_Summer_Party.gif",
    "A mexican themed party",
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
    null,
    [],
    null
  );

  let bartenderEvent = new Event(
    "Bartender vs Barista",
    new Date(2020, 7, 9),
    "Andre",
    "/assets/Bartender_vs_Barista.gif",
    "Coffe... and alcohol?",
    null,
    [],
    null
  );

  let thanksGivingEvent = new Event(
    "Social Thanksgiving 2020",
    new Date(2020, 10, 20),
    "Andre",
    "/assets/Social_Thanksgiving-2019.png",
    "Thanksgiving celebration party",
    null,
    [],
    null
  );

  EventsService.insert(thanksGivingEvent);
  EventsService.insert(bartenderEvent);
  EventsService.insert(tex_mexEvent);
  EventsService.insert(gastronomyEvent);
}
