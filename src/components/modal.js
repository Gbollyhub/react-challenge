import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
export default function Body(props) { 
        return (
    <>
     <div  className="modal-div">
      <div className="modal-header">
          <div className="modal-label">Basic Modal</div>
          <div onClick={props.handleClose} className="modal-close"><CloseIcon/></div>
      </div>
 <form onSubmit={props.EditContact}>
      <div className="modal-body">
          
           <div className="modal-body-row">
     <div className="modal-body-col-1"><div className="modal-input-label">Name</div> </div>
     <div className="modal-body-col-2">
         <input value={props.userContact.name} onChange={(e) => {props.setNewContact({...props.userContact, name: e.target.value}) }} className="modal-textfield" type="text" placeholder="" required />
     </div>       
     </div> 
     <div className="modal-body-row">
     <div className="modal-body-col-1"><div className="modal-input-label">Email</div> </div>
     <div className="modal-body-col-2">
         <input  value={props.userContact.email} onChange={(e) => {props.setNewContact({...props.userContact, email: e.target.value}) }} className="modal-textfield" type="email" placeholder="" required />
     </div>       
     </div> 
     <div className="modal-body-row">
     <div className="modal-body-col-1"><div className="modal-input-label">Phone</div> </div>
     <div className="modal-body-col-2">
         <input  value={props.userContact.phone} onChange={(e) => {props.setNewContact({...props.userContact, phone: e.target.value}) }} className="modal-textfield" type="text" placeholder="" required />
     </div>       
     </div> 
     <div className="modal-body-row">
     <div className="modal-body-col-1"><div className="modal-input-label">Website</div> </div>
     <div className="modal-body-col-2">
         <input  value={props.userContact.website} onChange={(e) => {props.setNewContact({...props.userContact, website: e.target.value}) }} className="modal-textfield" type="text" placeholder="" required />
     </div>       
     </div> 
     
      </div>
     
        <div className="modal-actions">
     <button onClick={props.handleClose} className="modal-actions-cancel">Cancel</button>
     <button type="submit" className="modal-actions-ok">OK</button>
     </div> 
      </form>
     </div>
 
 
  </>
   ) }