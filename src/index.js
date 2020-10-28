import {
  alert,
  defaultModules,
} from "../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";
import "../node_modules/@pnotify/core/dist/PNotify.css";
import "../node_modules/@pnotify/mobile/dist/PNotifyMobile.css";
import "../node_modules/@pnotify/core/dist/BrightTheme.css";

import css from "./css/style.css";

defaultModules.set(PNotifyMobile, {});
alert("Notice me, senpai!");