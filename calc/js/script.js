"use strict";

const inputGel = document.querySelector("#gel"),
  inputUsd = document.querySelector("#usd");

inputGel.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("content-type", "application/json", "charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputGel.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "დაფიქსირდა ხარვეზი, მოგვიანებით სცადეთ";
    }
  });

  //status
  //statusText
  //response
  //readyState
});
