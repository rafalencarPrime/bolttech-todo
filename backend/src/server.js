
import express   from 'express';
import cors      from 'cors';
import dotenv    from 'dotenv';
import auth      from './routes/authentication.js';
import AuthUtils from './utils/AuthUtils.js'
import projects  from './routes/projects.js';
import tasks     from './routes/tasks.js';
import Database  from './utils/Database.js';

dotenv.config();

const app = express()
const port = process.env.SERVER_PORT;

app.use(cors({ origin: '*' }));
app.use(express.json())

await Database.connect();

app.get('/', (req, res) => {
  res.send('Welcome to Bolttech To-Do')
})

app.use('/',     auth);
app.use('/projects', AuthUtils.authenticateJWT, projects);
app.use('/tasks',    AuthUtils.authenticateJWT, tasks);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
