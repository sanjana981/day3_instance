import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Running");

  const checkStatus = () => {
    setStatus("Checking...");

    setTimeout(() => {
      setStatus("Running");
    }, 1000);
  };

  return (
    <div className="app">
      <header>
        <h1> DevOps Demo</h1>
        <p>React Application Deployed on AWS EC2</p>
      </header>

      <main>
        <section className="welcome">
          <h2>Welcome to My EC2 Project</h2>
          <p>
            This is a simple React application created to learn
            DevOps and cloud deployment.
          </p>
        </section>

        <div className="cards">
          <div className="card">
            <h3>Application</h3>
            <p>React.js</p>
          </div>

          <div className="card">
            <h3>Server</h3>
            <p>AWS EC2</p>
          </div>

          <div className="card">
            <h3>Status</h3>
            <p className="status">{status}</p>
          </div>
        </div>

        <button onClick={checkStatus}>
          Check Deployment Status
        </button>
      </main>

      <footer>
        <p>Learning DevOps • React + AWS EC2</p>
      </footer>
    </div>
  );
}

export default App;