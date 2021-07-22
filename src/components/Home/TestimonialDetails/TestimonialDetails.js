import React from 'react';

const TestimonialDetails = ({feedback}) => {
    return (
        <div className="col-md-4 ">
        <div className="user-section">
        <div class="card-group">
           <div class="card shadow p-3 mb-5 bg-body rounded"> 
               <div className="d-flex mt-3 px-2">
                   <div>
                       <img className="img-fluid avatar rounded-circle w-25 border border-danger p-2" src={feedback.imageURL} class="card-img-top " alt=" " />
                   </div>
                   <div className="ms-3 pt-4">
                       <h5 class="card-text ">{feedback.username}</h5>
                       <p class="card-text"><small class="text-muted">{feedback.designation}</small></p>
                   </div>
               </div>
               <div class="card-body">
                   <p class="card-text fs-5">{feedback.textArea}</p>
               </div>
           </div>
        </div>
       </div>
     </div> 
    );
};

export default TestimonialDetails;