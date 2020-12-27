import express from "express";
const router = express.Router();

router.get("/api/todo", async (req, res) => {
  res.status(200).send([
    {
      text: "sample",
      complete: false,
    },
    {
      text: "sample",
      complete: false,
    },
    {
      text: "sample",
      complete: false,
    },
  ]);
});

export default router;
