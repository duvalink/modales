import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  //La constante de la sig linea, es para evitar que al dar clic
  //sobre el campo del modal, ya sea imagen, formulario o texto,
  //el modal se cierre. recuerda asigar mediante el atributo onClick
  //esa funcion
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
