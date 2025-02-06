import React, { useState } from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your Axios API call
      console.log("Submitting form data:", formData);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you!</p>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.infoCard}>
          <h3>Address</h3>
          <p>123 Street, City</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Email</h3>
          <p>contact@example.com</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Phone</h3>
          <p>+123 456 7890</p>
        </div>
      </div>
      <div className={styles.contactFormSection}>
        <h2>Send Us a Message</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textArea}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
