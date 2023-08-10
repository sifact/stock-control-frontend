import React, { useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { useGetCategoriesQuery } from "../redux/api/apiSlice";

const BreakdownChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetCategoriesQuery();

  if (!data || isLoading) return "Loading...";

  const categories = [
    {
      id: "drinks",
      label: "drinks",
      value: 3,
    },
    {
      id: "cakes",
      label: "cakes",
      value: 3,
    },
    {
      id: "burgers",
      label: "burgers",
      value: 3,
    },
    {
      id: "pizzas",
      label: "pizzas",
      value: 3,
    },
    {
      id: "oils",
      label: "oils",
      value: 3,
    },
  ];

  // const formattedData = Object.entries(data.salesByCategory).map(
  //   ([category, sales], i) => ({
  //     id: category,
  //     label: category,
  //     value: sales,
  //     color: colors[i],
  //   })
  // );

  const formattedData = data.map((category) => category);
  let calculatedTotal = 0;

  return (
    <div
      className={`relative ${isDashboard ? "h-400px" : "h-full"} ${
        isDashboard ? "min-h-325px" : ""
      } ${isDashboard ? "min-w-325px" : ""}`}
    >
      <ResponsivePie
        data={formattedData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
      <div
        className="absolute top-[50%] left-[50%] text-center "
        // color={theme.palette.secondary[400]}

        style={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      >
        <h1 className="text-sm">
          {data.forEach((category) => {
            calculatedTotal += category.value;
          })}
          {!isDashboard && "Products:"} {calculatedTotal}
        </h1>
      </div>
    </div>
  );
};

export default BreakdownChart;
