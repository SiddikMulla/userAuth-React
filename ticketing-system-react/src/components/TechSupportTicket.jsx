import React, { useState } from "react";
import Ticket from "./Ticket";
import SolutionForm from "./SolutionForm";
import './TechSupportTicket.css'

const TechSupportTicket = (props) => {
  const handleToggle = () => {
    props.onToggle(props.id);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Implement your logic to update ticket data (e.g., ticketData) with formData
    console.log("Form Data:", formData);
    props.addSolution(formData);
    // Close the form
    setIsFormOpen(false);
  };

  return (
    <div>
      <div>
        <Ticket {...props} />
      </div>
      <div>
        <div>
          <button onClick={handleToggle} className="btn btn-success border-2 mb-2 rounded-5">
            {props.isResolved ? "Mark as Unresolved" : "Mark as Resolved"}
          </button>
        </div>
        <div>
          {" "}
          <button onClick={handleOpenForm} className="btn btn-primary text-light">Resolve / Add Solution</button>
          {/* Render the SolutionForm component as a modal when isFormOpen is true */}
          {isFormOpen && (
            <SolutionForm
              id={props.id}
              onSubmit={handleFormSubmit}
              onClose={handleCloseForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TechSupportTicket;
