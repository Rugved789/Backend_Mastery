import express, { json } from "express";

const app = express();
app.use(express.json());

const Notes = [];

app.post("/notes", (req, res) => {
  let note = req.body;
  Notes.push(note);
  res.status(201).json({
    message: "Note Created successfully",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes sent success",
    notes: Notes,
  });
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete Notes[index];
  res.status(200).json({
    message: "Note Delete success"
  });

});

export default app;
