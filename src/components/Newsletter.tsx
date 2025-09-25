"use client";
import { useState } from "react";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) return;

    // ✅ Show success modal
    setShowModal(true);

    // Reset form fields
    setName("");
    setEmail("");
  };

  return (
    <section className="newsletter-area-four">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="newsletter-wrap-four">
              <div className="newsletter-content">
                <h2 className="title">Get Subscribe To Our Latest News &amp; Update</h2>
              </div>
              <div className="newsletter-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-grp">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-grp">
                    <input
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Success Modal */}
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
            <h4>You’re Subscribed!</h4>
            <p>Thank you for subscribing. You’ll start receiving our daily updates soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="btn"
              style={{ marginTop: "1rem" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Newsletter;
