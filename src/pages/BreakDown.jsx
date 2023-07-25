import React from "react";

import Header from "../components/Header";
import BreakdownChart from "../components/BreakdownChart";

const Breakdown = () => {
  return (
    <div className="my-[1.5rem] mx-[2.5rem]">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <div className="mt-[40px] h-[75vh]">
        <BreakdownChart />
      </div>
    </div>
  );
};

export default Breakdown;
