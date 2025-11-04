import React from "react";
import styles from "./ChartCard.module.css";

const chartData = [
  { id: 1, day: "Tue", height: "20%" },
  { id: 2, day: "Wed", height: "60%" },
  { id: 3, day: "Thu", height: "70%" },
  { id: 4, day: "Mon", height: "40%" },
  { id: 5, day: "Fri", height: "30%" },
  { id: 6, day: "Sat", height: "90%" },
  { id: 7, day: "Sun", height: "100%" },
];

function ChartCard({ auxClass }) {
  return (
    <div className={`${auxClass}`}>
      <div className={styles["card-top"]}>
        <div>
          <p className={styles["card-title"]}>Notes Created</p>
          <p className={styles["card-count"]}>45</p>
        </div>

        <div className={styles["card-meta"]}>
          <p className={styles["meta-text"]}>Last 7 Days</p>
          <p className={styles["meta-change"]}>+12.5%</p>
        </div>
      </div>

      <div className={styles["bars-grid"]}>
        {chartData.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className={styles["bar"]}
              style={{ height: item.height }}
            ></div>
            <p className={styles["bar-label"]}>{item.day}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export { ChartCard };
