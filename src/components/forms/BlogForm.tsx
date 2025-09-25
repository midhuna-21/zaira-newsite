"use client";
import { useState } from "react";

const BlogForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShowModal(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="comment-respond">
      <h3 className="comment-reply-title">Post a comment</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-grp">
          <textarea placeholder="Comment" required></textarea>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-grp">
              <input type="text" placeholder="Name" required />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-grp">
              <input type="email" placeholder="Email" required />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-grp">
              <input type="url" placeholder="Website" required />
            </div>
          </div>
        </div>
        <div className="form-grp checkbox-grp">
          <input type="checkbox" id="checkbox_two" />
          <label htmlFor="checkbox_two">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>
        <button type="submit" className="btn btn-two">
          Post Comment
        </button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "400px",
              width: "90%",
            }}
          >
           <h4>Your comment has been received!</h4>

         <p>Thank you! We value your feedback and support.</p>

            <button
              onClick={() => setShowModal(false)}
              className="btn btn-two"
              style={{ marginTop: "1rem" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogForm;
