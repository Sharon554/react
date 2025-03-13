import React, { useState } from "react";
import LeaveBalance from "./components/LeaveBalance";
import ApplyLeave from "./components/ApplyLeave";
import LeaveList from "./components/LeaveList";
import { initialLeaveBalance } from "./data";
import "./App.css";

const App = () => {
  const [leaveBalance, setLeaveBalance] = useState(initialLeaveBalance);
  const [appliedLeaves, setAppliedLeaves] = useState([]);

  // Handle leave application
  const applyLeave = (type) => {
    if (leaveBalance[type] > 0) {
      setLeaveBalance((prev) => ({ ...prev, [type]: prev[type] - 1 }));
      setAppliedLeaves((prev) => [
        ...prev,
        { id: prev.length + 1, type, date: new Date().toLocaleDateString() },
      ]);
    } else {
      alert(`No ${type.replace("Leave", " leave")} remaining!`);
    }
  };

  return (
    <div className="app">
      <h1>📝 Leave Management System</h1>
      <LeaveBalance leaveBalance={leaveBalance} />
      <ApplyLeave applyLeave={applyLeave} />
      <LeaveList appliedLeaves={appliedLeaves} />
    </div>
  );
};
export default App;
