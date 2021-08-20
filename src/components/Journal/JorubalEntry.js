import React from "react";

export const JorubalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.nationalgeographic.com.es/medio/2021/06/25/_93e4bb67_800x800.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Un nuevo dia Un nuevo dia Un nuevo dia Un nuevo dia
        </p>
      </div>
      <div className="journal__entry-date-box">
            <span> Monday</span>
            <h4>28</h4>
      </div>
    </div>
  );
};
