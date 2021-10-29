import { useModal } from "./useModal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";
import Modal from "./Modal";

const Modals = () => {
  //true o false, define si se desea que el modal inicie nomas ingresar
  //a la pagina.
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  return (
    <div className="container-mod">
      <h2 className="title-modal">Ejercicios con Modales</h2>
      <button onClick={openModalContact}>Formulario de Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSong}>Buscador de canciones</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>
    </div>
  );
};

export default Modals;
