import { useEffect, useState } from "react";
import { fetchAlerts } from "../services/alertsApi";
import AlertsTable from "../components/AlertsTable";

function AlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAlerts = async () => {
      try {
        const data = await fetchAlerts();
        setAlerts(data);
      } catch (err) {
        setError("Failed to load alerts from backend");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAlerts();
  }, []);

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Cloud SOC Lab - Alerts Dashboard</h1>
      <p style={subtitleStyle}>
        Week 1 MVP: View alerts stored in MongoDB through the backend API.
      </p>

      {loading && <p>Loading alerts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <AlertsTable alerts={alerts} />}
    </div>
  );
}

const pageStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
  fontFamily: "Arial, sans-serif"
};

const titleStyle = {
  marginBottom: "0.5rem"
};

const subtitleStyle = {
  color: "#555"
};

export default AlertsPage;