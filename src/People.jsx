import React, { useEffect, useState } from "react";

function People() {
  const [people, setPeople] = useState([]);

  const handleData = async () => {
    const user = await fetch("https://dummyjson.com/users", {
      method: "GET",
      headers: { accept: "application/json" },
    });
    const data = await user.json();
    console.log(data.users);
    setPeople(data.users);
  };
  useEffect(() => {
    handleData();
  }, []);

  const peopleData = [];

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>People List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>First Name</th>
            <th style={cellStyle}>Last Name</th>
            <th style={cellStyle}>Role</th>
            <th style={cellStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td style={cellStyle}>{person?.id}</td>
              <td style={cellStyle}>{person?.firstName}</td>
              <td style={cellStyle}>{person?.lastName}</td>
              <td style={cellStyle}>{person?.role}</td>
              <td style={cellStyle}>{person?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const cellStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};

export default People;
