import React from "react";

export const StatisticsModal = ({
  timesPlayed = 0,
  victoryCount = 0,
  timer,
}: {
  timesPlayed: number;
  victoryCount: number;
  timer: { minutes: number; seconds: number };
}) => {
  return (
    <div className="mt-4 font-normal text-lg">
      <div>
        <span>{}</span>
        <span></span>
      </div>
      <p>Siguiente palabra</p>
      <span>
        {"0" +
          timer.minutes +
          ":" +
          (timer.seconds.toString().length === 1 ? "0" : "") +
          timer.seconds}
      </span>
    </div>
  );
};
