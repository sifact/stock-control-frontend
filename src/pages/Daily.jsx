import React, { useMemo, useState } from "react";

import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../redux/api/apiSlice";
import Header from "../components/Header";

const Daily = () => {
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));
  const { data } = useGetSalesQuery();

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { dailyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      color: "hsl(154, 70%, 50%)",
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: "hsl(355, 70%, 50%)",
      data: [],
    };

    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date);
      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf("-") + 1);

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: splitDate, y: totalSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: splitDate, y: totalUnits },
        ];
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [data, startDate, endDate]); // eslint-disable-line react-hooks/exhaustive-deps

  const tailwindTheme = {
    axis: {
      domain: {
        line: {
          stroke: "rgb(33, 33, 33)", // Use Tailwind CSS "text-gray-200" for stroke color
        },
      },
      legend: {
        text: {
          fill: "text-gray-200", // Use Tailwind CSS "text-gray-200" for fill color
        },
      },
      ticks: {
        line: {
          stroke: "text-gray-200", // Use Tailwind CSS "text-gray-200" for stroke color
          strokeWidth: 1,
        },
        text: {
          fill: "text-gray-200", // Use Tailwind CSS "text-gray-200" for fill color
        },
      },
    },
    legends: {
      text: {
        fill: "text-gray-900", // Use Tailwind CSS "text-gray-200" for fill color
      },
    },
    tooltip: {
      container: {
        color: "bg-gray-700", // Use Tailwind CSS "bg-gray-700" for container color
      },
    },
  };
  return (
    <div className="my-[1.5rem] mx-[2.5rem]">
      <Header title="Daily SALES" subtitle="Chart of Daily sales" />
      <div className="h-[75vh]">
        {data ? (
          <ResponsiveLine
            data={formattedData}
            theme={tailwindTheme}
            colors={{ datum: "color" }}
            margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            // curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: "Month",
              legendOffset: 60,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Total",
              legendOffset: -50,
              legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 50,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default Daily;
