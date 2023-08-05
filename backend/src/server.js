
import express  from 'express';
import auth    from './routes/authentication.js';
import users    from './routes/users.js';
import projects from './routes/projects.js';
import tasks    from './routes/tasks.js';

const app = express()
const port = 3000

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
