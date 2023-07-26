"use strict";

const inputGel = document.querySelector("#gel"),
  inputUsd = document.querySelector("#usd");

inputGel.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("content-type", "application/json", "charset=utf-8");
  request.send();
});
