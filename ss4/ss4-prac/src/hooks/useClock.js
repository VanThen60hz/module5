import { useState } from "react";

export const useClock = () => {
  const [time, setTime] = useState("");
  const [ampn, setAmpn] = useState("");

  const updateDate = () => {
    let dateInfo = new Date();
    let hour = 0;

    if (dateInfo.getHours() === 0) {
      hour = 12;
    } else if (dateInfo.getHours() > 12) {
      hour = dateInfo.getHours() - 12;
    } else {
      hour = dateInfo.getHours();
    }

    let minutes =
      dateInfo.getMinutes() < 10
        ? parseInt("0" + dateInfo.getMinutes())
        : dateInfo.getMinutes();

    let ampn = dateInfo.getHours() < 12 ? "AM" : "PM";

    setAmpn(ampn);
    setTime(`${hour} :${minutes}`);
  };

  setInterval(updateDate, 1000);

  return [time, ampn];
};
