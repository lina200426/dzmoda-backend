import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

const app = express();
app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: "dnhxybhzn",
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

app.post("/delete", async (req, res) => {
  try {
    const { publicId } = req.body;import express from "express";
    import cors from "cors";
    import { v2 as cloudinary } from "cloudinary";
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    
    cloudinary.config({
      cloud_name: "dnhxybhzn",
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET
    });
    
    app.post("/delete", async (req, res) => {
      try {
        const { publicId } = req.body;
    
        if (!publicId) {
          return res.status(400).json({ error: "missing publicId" });
        }
    
        const result = await cloudinary.uploader.destroy(publicId);
    
        res.json(result);
    
      } catch (err) {
        res.status(500).json(err);
      }
    });
    
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
      console.log("Backend running on", PORT);
    });