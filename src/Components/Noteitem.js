import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
const Noteitem = (props) => {
  const { note,updateNote } = props;
  const context = useContext(NoteContext);
  const {deleteNote}=context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="material-icons" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Successfully","success");}}>delete</i>
            <i className="material-icons" onClick={()=>{updateNote(note)}}>edit</i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Noteitem;
