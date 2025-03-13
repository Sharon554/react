import React from "react";

const LeaveList = ({ appliedLeaves }) => {
  return (
    <div className="applied-leaves">
      <h2>Applied Leaves</h2>
      {appliedLeaves.length > 0 ? (
        <ul>
          {appliedLeaves.map((leave) => (
            <li key={leave.id}>
              {leave.type.replace("Leave", " Leave")} - {leave.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No leaves applied yet.</p>
      )}
    </div>
  );
};

export default LeaveList;
