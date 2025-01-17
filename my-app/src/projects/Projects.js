import React, {useState} from 'react';
import projects from './project_data.js';
import './Projects.css';
import {ReactComponent as LinkIcon} from '../assets/link.svg';
import {ReactComponent as ArrowIcon} from '../assets/arrow-up-right.svg';

  function Projects() {
    return (
      <div>
        <h2>Projects</h2>
        <div id="projects">
        {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
          </div>
      </div>
    )
  }

  function Project({project}) {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen(!modalOpen)
    }

    return (
      <div class="project">
        {modalOpen && <Modal images={project.moreImages} onClose={toggleModal}/>}
        <div id="title-date">
          <h3 id="title">{project.title}</h3>
          <p id="date">{project.date}</p>
        </div>
        <div id="image-description">
          <a class="image-container" href={project.url}>
          <img src={project.thumbnail} alt={project.url}></img>
          <MoreImages images={project.moreImages} toggleModal={toggleModal}></MoreImages>
          </a>
          <div class="content">
            <p id="description">{project.description}</p>
            <p id="description-body">{project.detail}</p>
          </div>
        </div>
        <div className='languages-and-links'>
          <div className='languages'>
            {project.languages.map((language, index) => (
              <span key={index} className="language">{language}</span>
            ))}
          </div>
          <div id="code-design">
            <Link text="Code" url={project.codeUrl} />
            <Link text="Design" url={project.designUrl} />
          </div>
        </div>
      </div>

    );
  }

  function MoreImages({images, toggleModal}) {
    return images && images.length > 0 && 
    <span id="more-images" onClick={toggleModal}>+{images.length}<ArrowIcon/></span>
  }

  function Modal({images, onClose}) {
    const handleClickOutside = (e) => {
      if (e.target.id === 'modal') {
        onClose();
      }
    };
    return <div id="modal" onClick={handleClickOutside}>
        {images.map((image, index) => (
        <span id="modal-content">
        <img key={index} src={image} alt={`Image ${index + 1}`}></img>
        </span>
        ))}
    </div>
  }

  function Link({text, url}) {
    return (
      url && (
        <a id="link" href={url}>
          <span><LinkIcon/>{text}</span>
        </a>
        )
    );
  }

export default Projects;