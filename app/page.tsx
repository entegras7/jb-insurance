"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, img: '/images/family_secure.jpg', title: 'Secure Your Family', text: 'Trusted by thousands in Raxaul.' },
    { id: 2, img: '/images/car_drive.jpg', title: 'Drive Safe', text: 'Instant Motor Policy Issuance.' },
    { id: 3, img: '/images/business_plan.jpg', title: 'Business Plans', text: 'Shop & Office Insurance.' },
  ];

  const [reviewIndex, setReviewIndex] = useState(0);
  
  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-run sliders
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    const reviewInterval = setInterval(() => {
      setReviewIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => {
      clearInterval(heroInterval);
      clearInterval(reviewInterval);
    };
  }, [slides.length]);

  // --- UPDATED SUBMISSION HANDLER (LINKED TO GOOGLE SHEET) ---
  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setErrorMessage("");

    // Capture form element to avoid null errors later
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      // Connect to the same API route as the Navbar
      const response = await fetch("/api/send-quote", {
        method: "POST",
        body: formData, // Sending directly as FormData (not JSON)
      });

      if (response.ok) {
        setIsSuccess(true);
        
        // Reset the form safely
        if (formElement) {
            formElement.reset();
        }

        // Auto-Refresh (Reappear Form) after 3 Seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000); 

      } else {
        setErrorMessage("Server error. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero">
          <div className="welcome-text">Welcome to JB Insurance and Capital</div>
          <div className="hero-container">
              <div className="slider">
                  {slides.map((slide, index) => (
                    <div 
                      key={slide.id} 
                      className={`slide ${index === currentSlide ? 'active' : ''}`}
                      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('${slide.img}')`}}
                    >
                        <div className="slide-content">
                          <h2>{slide.title}</h2>
                          <p>{slide.text}</p>
                        </div>
                    </div>
                  ))}
              </div>

              {/* Quote Form (Right) */}
              <div className="quote-box" id="quote">
                  {isSuccess ? (
                    <div style={{textAlign: 'center', padding: '50px 10px', animation: 'fadeIn 0.5s'}}>
                      <div style={{fontSize: '50px', color: '#2ecc71', marginBottom: '20px'}}>✓</div>
                      <h3 style={{color: 'white', marginBottom: '10px', fontSize: '24px'}}>Message Sent Successfully!</h3>
                      <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px'}}>Our team will contact you shortly.</p>
                    </div>
                  ) : (
                    <>
                      <h3>Get a Quick Quote</h3>
                      <p>Fill details to get a callback</p>
                      <form onSubmit={handleQuoteSubmit}>
                          <div className="form-group"><input type="text" name="name" placeholder="Full Name" required /></div>
                          <div className="form-group"><input type="tel" name="phone" placeholder="Mobile Number" required /></div>
                          <div className="form-group"><input type="email" name="email" placeholder="Email Address" required /></div>
                          <div className="form-group">
                              <select name="insurance" defaultValue="" required>
                                  <option value="" disabled>Select Insurance Type</option>
                                  <option value="Motor Insurance">Motor Insurance</option>
                                  <option value="Health Insurance">Health Insurance</option>
                                  <option value="Life Insurance">Life Insurance</option>
                                  <option value="SME / Business">SME / Business</option>
                              </select>
                          </div>
                          {errorMessage && <p style={{color: '#ff6b6b', fontSize: '12px', marginBottom: '10px', fontWeight: 'bold'}}>{errorMessage}</p>}
                          <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Request Quote"}
                          </button>
                      </form>
                    </>
                  )}
              </div>
          </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="section">
          <div className="section-title">
              <h2>Our Expertise</h2>
              <p>Comprehensive solutions for every need.</p>
          </div>
          <div className="services-grid">
              <Link href="/motor" className="img-card" style={{backgroundImage: "url('/images/motor_hero.jpg')", backgroundSize: "cover"}}>
                  <div className="card-txt"><h4>Motor Insurance</h4><p>Car, Bike & Commercial</p></div>
              </Link>
              <Link href="/health" className="img-card" style={{backgroundImage: "url('/images/health_hero.jpg')", backgroundSize: "cover"}}>
                  <div className="card-txt"><h4>Health Insurance</h4><p>Family & Individual</p></div>
              </Link>
              <Link href="/life" className="img-card" style={{backgroundImage: "url('/images/life_hero.jpg')", backgroundSize: "cover"}}>
                  <div className="card-txt"><h4>Life Insurance</h4><p>Term & Endowment</p></div>
              </Link>
              <Link href="/sme" className="img-card" style={{backgroundImage: "url('/images/sme_hero.jpg')", backgroundSize: "cover"}}>
                  <div className="card-txt"><h4>SME / Corp</h4><p>Fire, Marine & Liability</p></div>
              </Link>
          </div>
      </section>

      {/* 3. PARTNERS SECTION */}
      <section className="section" style={{background: "#fafbff"}}>
          <div className="section-title">
              <h2>Compare Plans from Leading Insurers</h2>
              <p>Providing transparent coverage options from India's most trusted brands.</p>
          </div>
          <div className="partners-grid">
              <div className="partner-tag" style={{background: "#4facfe"}}>ICICI Lombard</div>
              <div className="partner-tag" style={{background: "#43e97b"}}>Go Digit</div>
              <div className="partner-tag" style={{background: "#00c6fb"}}>HDFC Ergo</div>
              <div className="partner-tag" style={{background: "#4facfe"}}>Bajaj Allianz</div>
              <div className="partner-tag" style={{background: "#00c6fb"}}>Tata AIG</div>
              <div className="partner-tag" style={{background: "#f093fb"}}>Reliance General</div>
              <div className="partner-tag" style={{background: "#f6d365", color: "#333"}}>SBI General</div>
              <div className="partner-tag" style={{background: "#f6d365", color: "#333"}}>Cholamandalam</div>
              <div className="partner-tag" style={{background: "#ff9a9e", color: "#661010"}}>Royal Sundaram</div>
              <div className="partner-tag" style={{background: "#ff9a9e", color: "#661010"}}>Liberty General</div>
              <div className="partner-tag" style={{background: "#a18cd1"}}>Future Generali</div>
              <div className="partner-tag" style={{background: "#ff9a9e", color: "#661010"}}>Kotak Mahindra</div>
              <div className="partner-tag" style={{background: "#ff9a9e", color: "#661010"}}>Magma HDI</div>
              <div className="partner-tag" style={{background: "#a18cd1"}}>Raheja QBE</div>
              <div className="partner-tag" style={{background: "#a18cd1"}}>Niva Bupa</div>
              <div className="partner-tag" style={{background: "#84fab0", color: "#000"}}>Star Health</div>
              <div className="partner-tag" style={{background: "#84fab0", color: "#000"}}>Care Health</div>
              <div className="partner-tag" style={{background: "#cfd9df", color: "#333"}}>Shriram General</div>
          </div>
      </section>

      {/* 4. CLIENT STORIES */}
      <section className="testimonial-section">
          <div className="section-title">
              <h2>Client Stories</h2>
          </div>
          <div className="reviews-container">
              <div className="review-col">
                  <h4>Motor Insurance</h4>
                  <div className="review-stars">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className={`review-slide ${reviewIndex === 0 ? 'active' : ''}`}>
                      <p className="review-text">"Claim settled in 3 days. Excellent support during my car accident. Highly recommend JBIC."</p>
                      <span className="review-author">- Amit K., Jamshedpur</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
                  <div className={`review-slide ${reviewIndex === 1 ? 'active' : ''}`}>
                      <p className="review-text">"Got the cheapest bike insurance rates here. Honest advice and no hidden charges."</p>
                      <span className="review-author">- Rahul S., Ranchi</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
              </div>
              <div className="review-col">
                  <h4>Health Plans</h4>
                  <div className="review-stars">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className={`review-slide ${reviewIndex === 0 ? 'active' : ''}`}>
                      <p className="review-text">"Cashless facility worked perfectly for my father's surgery. Thank you for the quick help."</p>
                      <span className="review-author">- Priya S., Ranchi</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
                  <div className={`review-slide ${reviewIndex === 1 ? 'active' : ''}`}>
                      <p className="review-text">"Best advice for my elderly parents. They explained every detail clearly."</p>
                      <span className="review-author">- Dr. Gupta, Jamshedpur</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
              </div>
              <div className="review-col">
                  <h4>Support Service</h4>
                  <div className="review-stars">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className={`review-slide ${reviewIndex === 0 ? 'active' : ''}`}>
                      <p className="review-text">"Very polite staff at Adityapur office. They handled my renewal instantly."</p>
                      <span className="review-author">- Md. Irfan, Adityapur</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
                  <div className={`review-slide ${reviewIndex === 1 ? 'active' : ''}`}>
                      <p className="review-text">"Trustworthy people. I have been insuring my shop with them for 2 years."</p>
                      <span className="review-author">- S. Pandey, Ranchi</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}