import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-conter">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam maiores consequatur maxime magni fuga quas beatae nostrum asperiores corrupti!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted By Artur</div>
            <div>2nd of September, 12pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
