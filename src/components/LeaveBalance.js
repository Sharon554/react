import React from "react";

const LeaveBalance = ({ leaveBalance }) => {
  return (
    <div className="leave-balance">
      <h2>Leave Balance</h2>
      <p>Casual Leave: {leaveBalance.casualLeave} days</p>
      <p>Medical Leave: {leaveBalance.medicalLeave} days</p>
    </div>
  );
};

export default LeaveBalance;
