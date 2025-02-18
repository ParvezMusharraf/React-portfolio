import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.scss';
import { Mail, Person } from '@mui/icons-material';
import helper from "../../resume/parvez-res-up.pdf";

export default function Navbar({ openMenu, setOpenMenu }) {
  const [showModal, setShowModal] = useState(false);
  // const resumeUrl = "../../resume/parvez-res-up.pdf"; // Change this to the actual path of your resume

  return (
    <>
      <div className={"navbar " + (openMenu && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className='logo'>Portfolio</a>
            <div className="itemContainer">
              <Person className="icon" />
              <span title='You can call'>+91 7020543440</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon" />
              <span title="Email">parvezmusharraf61@gmail.com</span>
            </div>
            <div className="itemContainer" style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>
              <Mail className="icon" />
              <span title="Resume">Check Resume</span>
            </div>
          </div>
          <div className="right">
            <div title="Click" className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{
            width:"100%"
          }}>
            <div className="modal-header">
              <h5 className="modal-title">Resume</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <iframe
                src={helper}
                width="100%"
                height="500px"
                title="Resume"
                style={{ border: "none" }}
              />
            </div>
            <div className="modal-footer">
              <a href={helper} download="resume.pdf" className="btn btn-primary">Download Resume</a>
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
