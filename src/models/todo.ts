import { Schema, model} from 'mongoose';

const todoSchema = new Schema({
text: String, 
complete: Boolean,
})

const Todo = model('Todo', todoSchema);

export default Todo;

