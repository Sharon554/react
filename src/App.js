import React from "react";
import ApplyLeave from ".//ApplyLeave"; 
import LeaveDashboard from ".//LeaveDashboard"; 
import LeaveProvider from "./LeaveProvider";
import  LeaveContext  from "./context/LeaveContext"; 

function App(){
    return (
        <LeaveProvider>
            <div className='App'>
                <h1>Leave Management System</h1>
                <LeaveDashboard/>
                    <ApplyLeave/>
            </div>
        </LeaveProvider>
    )

}
export default App;