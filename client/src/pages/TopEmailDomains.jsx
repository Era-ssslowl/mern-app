import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const TopEmailDomains = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/users/aggregate")
      .then((res) => {
        setDomains(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h3>Top Email Domains</h3>
      {loading ? (
        <div className="alert alert-info">Loading...</div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <table className="table table-striped table-bordered mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Email Domain</th>
              <th>User Count</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, index) => (
              <tr key={index}>
                <td>{domain._id.replace("@", "")}</td>
                <td>{domain.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopEmailDomains;
