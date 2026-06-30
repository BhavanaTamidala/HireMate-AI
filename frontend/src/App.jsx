import { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {

    fetch("http://localhost:8080/api/hello")
      .then(response => response.text())
      .then(data => {
        setMessage(data);
      });

  }, []);

  return (

    <div>

      <h1>AI Job Agent</h1>

      <h2>{message}</h2>

    </div>

  );

}

export default App;