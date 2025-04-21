import React from 'react';
import {useNavigate} from 'react-router-dom'; // Import useNavigate from react-router-dom

const Home = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleNavigate = () => {
        navigate('./Browse'); // Navigate to the Browse page
    }   
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Transform Your Space with Expert Interior Design</h1>
            <p>Browse top interior designers to bring your vision to life.</p>
            <div className="cta-buttons">
              <button className="cta-btn" onClick={handleNavigate} >Browse Designers</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="src/assets/service1.jpg" alt="Consultation" />
            <h3>Consultation</h3>
            <p>Personalized interior design advice to help you get started.</p>
          </div>
          <div className="service-card">
            <img src="src/assets/service2.jpg" alt="Design & Decor" />
            <h3>Design & Decor</h3>
            <p>Transform any space with our expert designs and decor solutions.</p>
          </div>
          <div className="service-card">
            <img src="src/assets/service3.jpg" alt="Complete Makeover" />
            <h3>Complete Makeover</h3>
            <p>From concept to execution, we handle it all for you.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Working with the designers was an amazing experience. My home has never looked better!"</p>
            <p>- Sarah J.</p>
          </div>
          <div className="testimonial-card">
            <p>"The design exceeded my expectations. I’m so happy with how everything turned out!"</p>
            <p>- David L.</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 DesignHire | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;

// // This code defines a Home component that serves as the landing page. 
// // It includes a welcome message and a brief description of the platform's purpose, which is to connect users with freelance designers.
// // The component is styled with CSS classes for better presentation. 
