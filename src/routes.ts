import express from "express";
const router = express.Router();
import Todo from './models/todo';
router.get("/api/todo", async (req, res) => {

  const todos = await Todo.find({})

  res.status(200).send(todos);
});

router.post("/api/todo", async (req, res) => {

    const newTodo = req.body;
    if (newTodo.text === undefined || newTodo.complete === undefined){
      res.status(400).send({
        message: 'Bad Request'
      });
    }
      if(!newTodo.text) {
        res.status(400).send({
          message: 'Text is Required!',
        })
      }
    await Todo.create({...newTodo});

    res.status(201).send({message: 'Todo Created'})
  
});

router.delete('/api/todo/:id', async (req, res) => {
  
  const id = req.params.id

  try {
    res.status(200).send({ message: id });

  await Todo.deleteOne({ _id: id}).catch();

  res.status(200).send({ message: `Todo: ${id} was deleted`});
  } catch (error){ message : 'could not delete todo!'};
  
});

router.put('/api/todo/:id', async (req, res) => {
  const id = req.params.id;

  const { text, complete } = req.body

  await Todo.updateOne({_id: id}, { text, complete }).catch(error => {
    res.status(400).send({ message: 'Could not update Todo'});
  
  });

  res.status(200).send({ message: 'Todo Updated'});

});

export default router;
