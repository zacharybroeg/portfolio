import React from 'react'
import {data} from '../../data/data';
import './project_item.css';

const ProjectItem = () => {
  
    return (
    
      <div className="container projects__container">
        
      {
        data.map((data,key) => {
          return (
            <article key = {key} className="project__item">
          <div className="project__item-image">
            {/* <img src={image} alt={title} /> */}
          </div>
          <h3>{data.title}</h3>
          <div className="project__item-cta">
          <a href={data.github} className='btn' target='_blank'>Github</a>
          <a href={data.demo} className='btn btn-primary' target='_blank'>live demo</a>
          </div>
          
        </article>
          )
        })
      } 
      </div>
          
  )
}

export default ProjectItem