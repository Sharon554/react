import React, { useContext } from "react";
import { LeaveContext } from "../context/LeaveContext";

const LeaveDashboard = () => {
    const { leaves } = useContext(LeaveContext); // Fix variable name

    return (
        <div>
            <h2>Leave Dashboard</h2>
            <ul>
                {leaves.map((leave, index) => ( // Use 'leaves', not 'leave'
                    <li key={index}>  {/* Fix key placement */}
                        {leave.type}: {leave.available} days remaining
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeaveDashboard;
