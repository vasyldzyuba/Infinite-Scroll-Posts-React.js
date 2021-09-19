import React, { useEffect } from "react";

export function Degs(setDegs)  {
fetch('https://api.openweathermap.org/data/2.5/weather?q=kyiv&units=metric&appid=43ff6c52de479b9dc919432b21fe3770')
  .then((response) => {
   return response.json();
  })
  .then((data) => {
    setDegs(data.main.temp);
     return data.main.temp;
  })
  .catch((e) => {
    console.log(e);
  });
}
