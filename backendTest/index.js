import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// Optional: add CORS if needed
import cors from "cors";
app.use(cors());

// GET /me endpoint
app.get("/me", async (req, res) => {
  try {
    // Fetch cat fact
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    // Build response
    const result = {
      status: "success",
      user: {
        email: "marvelous.kalu@miva.edu.ng",
        name: "Kalu Marvelous",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (error) {
    // Handle cat fact API failure
    console.error("Cat Fact API error:", error.message);

    res.status(200).json({
      status: "success",
      user: {
        email: "marvelous.kalu@miva.edu.ng",
        name: "Kalu Marvelous",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact at the moment 🐱",
    });
  }
});

// Start server
// app.listen(PORT, () => {
//   console.log("Server running on port ${PORT}/me");
// });
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}/me`);
});
