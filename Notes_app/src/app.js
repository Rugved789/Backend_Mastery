import express, { json } from "express";
import { nodeModel } from "./models/notes.model.js";

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  let note = req.body;

  await nodeModel.create({
    title: note.title,
    desc: note.desc,
  });

  res.status(201).json({
    message: "Note Created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const Notes = await nodeModel.find(
    { title: "test_title" }
  );

  res.status(200).json({
    message: "Notes sent success",
    Notes: Notes,
  });
});

app.delete("/notes/:id",async (req, res) => {
  const id = req.params.id;


  await nodeModel.findOneAndDelete({
    _id:id
  })

  res.status(200).json({
    message: "Note Delete success",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const update_desc = req.body.desc;

  await nodeModel.findByIdAndUpdate({
        _id:id
  },{
    desc:update_desc
  })

  res.status(200).json({
    message: "Note Update success",
  });
});

export default app;
