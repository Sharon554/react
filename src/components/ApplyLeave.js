import React from "react";

const ApplyLeave = ({ applyLeave }) => {
  return (
    <div className="apply-leave">
      <h2>Apply for Leave</h2>
      <button onClick={() => applyLeave("casualLeave")}>Apply Casual Leave</button>
      <button onClick={() => applyLeave("medicalLeave")}>Apply Medical Leave</button>
    </div>
  );
};

export default ApplyLeave;
