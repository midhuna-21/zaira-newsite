"use client";
import { useState } from "react";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {

    setShowModal(true);

    setEmail("");
    setAgree(false);
  };

  return (
    <div className="sidebar-widget sidebar-widget-two">
      <div className="sidebar-newsletter">
        <div className="icon">
          <i className="flaticon-envelope"></i>
        </div>
        <h4 className="title">Daily Newsletter</h4>
        <p>Bringing you top stories and insights that matter most.</p>

        <div className="sidebar-newsletter-form-two">
          <form onSubmit={handleSubmit}>
            <div className="form-grp">
              <input
                type="email"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn">
                Subscribe Now
              </button>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="checkbox">I agree to the terms & conditions</label>
            </div>
          </form>
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
    </div>
  );
};

export default NewsletterSubscribe;
