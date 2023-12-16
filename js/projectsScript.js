"use strict";

import { onViewEffect } from "./scripts.js";

window.addEventListener("load", init);

function init() {
    let projects = document.querySelectorAll(".project");

    onViewEffect(projects, "fade-in");
}