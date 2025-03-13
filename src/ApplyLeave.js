import ApplyLeave from "./ApplyLeave"; 

const ApplyLeave = () => {
  const { leaves, applyLeave } = useContext(LeaveContext);
  const [leaveType, setLeaveType] = useState("Casual Leave");
  const [days, setDays] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    applyLeave(leaveType, parseInt(days));
    alert(`${days} days of ${leaveType} applied successfully!`);
  };

  return (
    <div>
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <label>Leave Type:</label>
        <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
          {leaves.map((leave, index) => (
            <option key={index} value={leave.type}>{leave.type}</option>
          ))}
        </select>

        <label>Number of Days:</label>
        <input type="number" min="1" max="10" value={days} onChange={(e) => setDays(e.target.value)} required />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplyLeave;
