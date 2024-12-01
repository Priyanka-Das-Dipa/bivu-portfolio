// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-box bg-white p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Please Add your quote here</h3>
        <form className="card-body">
          <div className="form-control flex-1">
            <input
              type="first_name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Please Add your quote here"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary uppercase">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
