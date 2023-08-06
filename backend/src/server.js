
import express  from 'express';
import cors     from 'cors';
import auth     from './routes/authentication.js';
import users    from './routes/users.js';
import projects from './routes/projects.js';
import tasks    from './routes/tasks.js';
import Database from './utils/Database.js';

const app = express()
const port = 4000

app.use(cors({ origin: '*' }));
app.use(express.json())

await Database.connect();

app.get('/', (req, res) => {
  res.send('Welcome to Bolttech To-Do')
})

app.use('/auth',     auth);
app.use('/users',    users);
app.use('/projects', projects);
app.use('/tasks',    tasks);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
