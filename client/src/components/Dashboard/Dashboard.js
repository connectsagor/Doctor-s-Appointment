import { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router";
export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <DashboardContent />;
      case "Users":
        return <UsersContent />;
      case "Settings":
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#f4f4f4" }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          User Panel
        </h2>
        <nav className="d-flex flex-column">
          <Link style={buttonStyle} to="/">
            Home
          </Link>
          <Link style={buttonStyle} onClick={() => setActivePage("Dashboard")}>
            Dashboard
          </Link>
          <Link style={buttonStyle} onClick={() => setActivePage("Users")}>
            Users
          </Link>
          <Link style={buttonStyle} onClick={() => setActivePage("Settings")}>
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#fff",
          margin: "20px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            borderBottom: "2px solid #ddd",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          {activePage}
        </h1>
        {renderContent()}
      </main>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  backgroundColor: "#0fcfec",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  textAlign: "left",
};

const user = JSON.parse(sessionStorage.getItem("user"));
function DashboardContent() {
  const [data, setData] = useState("");
  const id = user && user.uid;
  useEffect(() => {
    fetch("http://localhost:5000/getData/" + id)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div style={contentStyle}>
      <div className="dashboard-info">
        <div className="row mb-3">
          <div className="col-md-2">
            <h5>Name</h5>
          </div>
          <div className="col-md-2">
            <h5>Email</h5>
          </div>
          <div className="col-md-2">
            <h5>Phone</h5>
          </div>
          <div className="col-md-2">
            <h5>Treatment</h5>
          </div>
          <div className="col-md-2">
            <h5>Time</h5>
          </div>
          <div className="col-md-2">
            <h5>Date</h5>
          </div>
        </div>
        {data &&
          data.map((d) => {
            return (
              <div key={d._id} className="row p-2">
                <div className="col-md-2 info-row">
                  <h6>{d.name}</h6>
                </div>
                <div className="col-md-2 info-row">
                  <h6>{d.email}</h6>
                </div>
                <div className="col-md-2 info-row">
                  <h6>{d.phone}</h6>
                </div>
                <div className="col-md-2 info-row">
                  <h6>{d.service.title}</h6>
                </div>
                <div className="col-md-2 info-row">
                  <h6>{d.service.time}</h6>
                </div>
                <div className="col-md-2 info-row">
                  <h6>{d.date}</h6>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function UsersContent() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((result) => setUserData(result));
  }, []);

  console.log(userData);
  return (
    <div style={contentStyle}>
      <div className="row mb-3">
        <div className="col-md-4">
          <h5>Name</h5>
        </div>
        <div className="col-md-4">
          <h5>Booking</h5>
        </div>
        <div className="col-md-4">
          <h5>Date</h5>
        </div>
      </div>

      {userData &&
        userData.map((d) => {
          return (
            <div key={d._id} className="row p-2">
              <div className="col-md-4 info-row">
                <h6>{d.name}</h6>
              </div>
              <div className="col-md-4 info-row">
                <h6>{d.service.title}</h6>
              </div>
              <div className="col-md-4 info-row">
                <h6>{d.date}</h6>
              </div>
            </div>
          );
        })}
    </div>
  );
}

function SettingsContent() {
  return <div style={contentStyle}>Adjust your settings here.</div>;
}

const contentStyle = {
  padding: "20px",
  backgroundColor: "#eee",
  borderRadius: "8px",
  textAlign: "center",
};
