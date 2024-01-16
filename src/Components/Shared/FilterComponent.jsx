import React from "react";
import Button from "./Button";
import RenderInput from "../../utils/RenderInput";

const FilterComponent = (props) => {
  const { fields = [], state, stateHandler, onFilter, onReset } = props;

  return (
    <div className=" mb-4 items-center mt-8">
      <div className="mr-12">
        <p className=" text-xl font-semibold" style={{ color: "#1876D1", letterSpacing: ".2px" }}>
          Filters
        </p>
      </div>
      <div className="flex">
        <div className="flex items-end flex-wrap">
          {fields.map((item) => {
            return (
              <RenderInput
                key={item.id}
                item={{ ...item }}
                state={state}
                stateHandler={stateHandler}
                inputStyles={{ width: 240 }}
                containerClasses={"py-1 flex flex-col mr-4"}
              />
            );
          })}
        </div>
        <div className="flex items-end mb-1 ml-4">
          <Button title="Reset" variant="outlined" sx={{ fontSize: 12 }} onClick={onReset} />
          <Button title="Filter" variant="contained" sx={{ marginLeft: 2, fontSize: 12 }} onClick={onFilter} />
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
