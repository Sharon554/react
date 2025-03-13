
import { LeaveContext } from "./context/LeaveContext";
export { LeaveContext };

export const LeaveContext = createContext();

const LeaveProvider = ({ children }) => {
  const [leaves, setLeaves] = useState([
    { type: "Casual Leave", available: 10 },
    { type: "Medical Leave", available: 5 },
  ]);

  const applyLeave = (type, days) => {
    setLeaves((prevLeaves) =>
      prevLeaves.map((leave) =>
        leave.type === type
          ? {...leave, available: leave.available - days }
          : leave
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