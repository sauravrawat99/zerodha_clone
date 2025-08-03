// layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <div style={styles.scrollable}>
          <Topbar />
          <Sidebar />
        </div>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <div style={styles.navbar}>
          <Navbar />
        </div>
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  leftSection: {
    width: "40%",
    backgroundColor: "#f0f0f0",
    overflowY: "auto",
    height: "100%",
    borderRight: "1px solid #ccc",
  },
  scrollable: {
    height: "100%",
    overflowY: "auto",
    padding: "10px",
  },
  rightSection: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  navbar: {
    flexShrink: 0,
    borderBottom: "1px solid #ccc",
    backgroundColor: "#fff",
  },
  content: {
    flexGrow: 1,
    overflowY: "auto",
    padding: "10px",
    backgroundColor: "#fff",
  },
};
