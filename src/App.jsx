import React, { useState, useEffect } from "react";

export default function App() {
  
  const [count, setCount] = useState(0);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>

      {/* Counter Section */}
      <h2>Count: {count}</h2>

      <div style={styles.buttonGroup}>
        <button onClick={() => setCount(count + 1)} style={styles.btn}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)} style={styles.btn}>
          Decrement
        </button>

        <button onClick={() => setCount(0)} style={styles.resetBtn}>
          Reset
        </button>
      </div>

      <hr style={{ margin: "20px 0" }} />

      {/* API Data Section */}
      <h2>Posts from API</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id} style={styles.card}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Simple inline styles
const styles = {
  container: {
    fontFamily: "Arial",
    textAlign: "center",
    padding: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 15px",
    cursor: "pointer",
    backgroundColor: "#4cafef",
    border: "none",
    color: "white",
    borderRadius: "5px",
  },
  resetBtn: {
    padding: "10px 15px",
    cursor: "pointer",
    backgroundColor: "red",
    border: "none",
    color: "white",
    borderRadius: "5px",
  },
  card: {
    border: "1px solid #ddd",
    margin: "10px auto",
    padding: "10px",
    width: "60%",
    borderRadius: "8px",
    textAlign: "left",
  },
};