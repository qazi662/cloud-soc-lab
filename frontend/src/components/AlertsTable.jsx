function AlertsTable({ alerts }) {
  if (!alerts.length) {
    return <p>No alerts found.</p>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
          backgroundColor: "#fff"
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Timestamp</th>
            <th style={thStyle}>Severity</th>
            <th style={thStyle}>Signature</th>
            <th style={thStyle}>Source IP</th>
            <th style={thStyle}>Destination IP</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert._id}>
              <td style={tdStyle}>
                {new Date(alert.timestamp).toLocaleString()}
              </td>
              <td style={tdStyle}>{alert.severity}</td>
              <td style={tdStyle}>{alert.signature}</td>
              <td style={tdStyle}>{alert.srcIp}</td>
              <td style={tdStyle}>{alert.destIp}</td>
              <td style={tdStyle}>{alert.category}</td>
              <td style={tdStyle}>{alert.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "left",
  backgroundColor: "#f4f4f4"
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "left"
};

export default AlertsTable;