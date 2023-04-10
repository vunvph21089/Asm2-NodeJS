import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import projectsRouter from "./routes/projects";
import categoriesRouter from "./routes/categories";
import technologiesRouter from "./routes/technologies";
import userRouter from "./routes/auth";
import { connectOnlDB, connectLocalDB } from "./config/connect";

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("myFile"), (req, res) => {
  res.send("File uploaded successfully.");
});


dotenv.config();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api", projectsRouter);
app.use("/api", categoriesRouter);
app.use("/api", technologiesRouter);
app.use("/api", userRouter);

// mongodb local
connectLocalDB();

// mongodb onl
// connectOnlDB();

export const viteNodeApp = app;
