import React, { useState } from "react";
import { useGetSalesQuery } from "../redux/api/apiSlice";
import OverviewChart from "../components/OverviewChart";
import Header from "../components/Header";
// import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
// import Header from "components/Header";
// import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");
  const { data } = useGetSalesQuery();

  return (
    <div className="my-[1.5rem] mx-[2.5rem]">
      <Header
        title={"OVERVIEW"}
        subtitle={"Overview of general revenue and profit"}
      />
      <div className="h-[75vh]">
        <select
          value={view}
          label="View"
          onChange={(e) => setView(e.target.value)}
        >
          <option value="sales">Sales</option>
          <option value="units">Units</option>
          {/* <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem> */}
        </select>

        <OverviewChart view={view} />
      </div>
    </div>
  );
};

export default Overview;
