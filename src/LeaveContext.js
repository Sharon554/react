import { createContext, useState } from "react";

export const LeaveContext = createContext();

const LeaveProvider = ({ children }) => {
    const [leaves, setLeaves] = useState([
        { type: "Casual Leave", available: 5 },
        { type: "Sick Leave", available: 10 }
    ]);

    const applyLeave = (type, days) => {
        setLeaves((prev) =>
            prev.map((leave) =>
                leave.type === type ? { ...leave, available: leave.available - days } : leave
            )
        );
    };

    return (
        <LeaveContext.Provider value={{ leaves, applyLeave }}>
            {children}
        </LeaveContext.Provider>
    );
};

export default LeaveProvider;
