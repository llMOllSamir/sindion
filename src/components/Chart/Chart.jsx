import React from "react";
import styles from "./Chart.module.css";
import ReactApexChart from "react-apexcharts";

export default function Chart() {
  const options = {
    chart: {
      type: "donut",
    },
    colors: [
      "var(--Solved)",
      "var(--Pending)",
      "var(--In-Progress)",
      "var(--Canceled)",
      "var(--Medium-Gray)",
    ],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        donut: {
          labels: {
            show: true, // Hide labels for the half circle
          },
        },
      },
    },

    labels: ["Solved", "Pending", "In progress", "Canceled", "Closed"],
  };

  const series = [44, 55, 13, 43, 80];

  return (
    <React.Fragment>
      <div className={styles.chart}>
        <ReactApexChart
          className={"mx-auto"}
          type="donut"
          options={options}
          series={series}
          width={"100%"}
        />
      </div>
    </React.Fragment>
  );
}
