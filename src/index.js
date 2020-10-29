import {
  alert,
    defaultModules,
  info
} from "../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyDesktop from "../node_modules/@pnotify/desktop/dist/PNotifyDesktop.js";
import "../node_modules/@pnotify/core/dist/PNotify.css";
import "../node_modules/@pnotify/desktop/dist/PNotifyDesktop.css";
import '../node_modules/@pnotify/core/dist/BrightTheme.css'
import "./styles.css"
// import template from "./template/listTemplate.hbs"
defaultModules.set(PNotifyDesktop, {});

import fetchCountries from "./components/fetchCountries.js"

fetchCountries()