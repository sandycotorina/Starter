import React from "react";
import TodoAku from "../../components/TodoAku";
import IntlMessages from "util/IntlMessages";

const LatihanPage = () => {
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="LatihanPage"/></h2>
      <div className="gx-d-flex justify-content-center">
      </div>
      <TodoAku />
    </div>
  );
};

export default LatihanPage;
