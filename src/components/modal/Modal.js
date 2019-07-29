import React from "react";

const Modal = ({ username, modalContent, userImg, userScore, resetModal }) => {
  return (
    <div
      class="modal fade"
      id="reviewModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="reviewModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <img
              style={{ height: "70px", width: "70px", borderRadius: "50%" }}
              src={userImg}
              alt="user image"
            />
            <div className="modal-username">{username}</div>
            <div className="modal-userscore">Rating: {userScore}</div>
            <button
              onClick={() => resetModal()}
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {!modalContent ? (
              <div className="text-danger">
                Oops, something went wrong, please try again.
              </div>
            ) : (
              <div
                className="display-linebreak"
                dangerouslySetInnerHTML={{
                  __html: modalContent
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
