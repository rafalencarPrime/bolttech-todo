
import React from 'react';

const ProjectCard = () => {
  return (
    <div class="card" style={{width: '18rem'}}>
      <div class="card-header">Project 1</div>
      <ul class="list-group list-group-flush">To Do
        <li class="list-group-item">Task 1</li>
        <li class="list-group-item">Task 2</li>
        <li class="list-group-item">Task 3</li>
      </ul>
      <ul class="list-group list-group-flush">Done
        <li class="list-group-item">Task 4</li>
        <li class="list-group-item">Task 5</li>
        <li class="list-group-item">Task 6</li>
      </ul>
    </div>
  )
}
 
export default ProjectCard
