import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleSortByDate = () => {
    const sortedByDate = [...count].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setCount(sortedByDate);
  };
  const handleSortByViews = () => {
    const sortedByViews = [...count].sort((a, b) => b.views - a.views);
    setCount(sortedByViews);
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {count.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.views}</td>
              <td>{data.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
