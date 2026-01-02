"use client";
import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMounted(true);
    const checkTime = () => {
      const now = new Date();
      const day = now.getDay(); 
      const hour = now.getHours(); 
      const isWorkingDay = day !== 0; 
      const isWorkingHour = hour >= 10 && hour < 18; 
      if (isWorkingDay && isWorkingHour) setIsOpen(true);
      else setIsOpen(false);
    };
    checkTime(); 
    const interval = setInterval(checkTime, 60000); 
    return () => clearInterval(interval);
  }, []);

  // --- SUBMISSION HANDLER ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setErrorMessage("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        
        if (formElement) {
            formElement.reset();
        }

        // Auto-Refresh Logic (Invisible Timer)
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
      <div className="page-header" style={{marginBottom: "30px", padding: "40px 5%"}}>
        <h1>Contact Us</h1>
        <p>We are here to help you. Reach out to us for any insurance queries.</p>
      </div>

      <div className="contact-container" style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        maxWidth: '1000px', 
        margin: '0 auto 50px', 
        padding: '0 5%', 
        alignItems: 'stretch', 
        justifyContent: 'center'
      }}>
        
        {/* Left: Info Box */}
        <div style={{
          flex: "1", 
          minWidth: "300px", 
          background: "#0b3c6d", 
          color: "white", 
          padding: "30px", 
          borderRadius: "16px 0 0 16px", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between", 
          position: "relative",
          boxShadow: "0 10px 30px rgba(11, 60, 109, 0.3)",
          zIndex: 2
        }}>
          <div>
            <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "20px", marginBottom: "8px", color: "#fff"}}>
              Get in Touch
            </h3>
            <p style={{fontSize: "12px", opacity: "0.8", marginBottom: "25px", lineHeight: "1.5"}}>
              Have questions? Our team is ready to help you.
            </p>
            
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
              <div style={{display: "flex", gap: "15px", alignItems: "flex-start"}}>
                <div style={{background: "rgba(255,255,255,0.1)", width: "35px", height: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
                  <i className="fas fa-map-marker-alt" style={{color: "#ff9900", fontSize: "14px"}}></i>
                </div>
                <div>
                  <strong style={{fontSize: "13px", display: "block", marginBottom: "2px"}}>Visit Us</strong>
                  <p style={{fontSize: "12px", opacity: "0.8", lineHeight: "1.4", margin: 0}}>
                    HIG-270, Behind MP Tower,<br/>Adityapur, Jamshedpur - 831013
                  </p>
                </div>
              </div>
              <div style={{display: "flex", gap: "15px", alignItems: "flex-start"}}>
                <div style={{background: "rgba(255,255,255,0.1)", width: "35px", height: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
                  <i className="fas fa-phone-alt" style={{color: "#ff9900", fontSize: "14px"}}></i>
                </div>
                <div>
                  <strong style={{fontSize: "13px", display: "block", marginBottom: "2px"}}>Call Us</strong>
                  <p style={{fontSize: "12px", opacity: "0.8", lineHeight: "1.4", margin: 0}}>
                    +91 87891 73946<br/>+91 79039 07184
                  </p>
                </div>
              </div>
              <div style={{display: "flex", gap: "15px", alignItems: "flex-start"}}>
                <div style={{background: "rgba(255,255,255,0.1)", width: "35px", height: "35px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
                  <i className="fas fa-envelope" style={{color: "#ff9900", fontSize: "14px"}}></i>
                </div>
                <div>
                  <strong style={{fontSize: "13px", display: "block", marginBottom: "2px"}}>Email Us</strong>
                  <p style={{fontSize: "12px", opacity: "0.8", lineHeight: "1.4", margin: 0}}>
                    info@jbinsuracecapital.com<br/>support@jbinsurancecapital.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{marginTop: "25px", padding: "15px", background: "rgba(0,0,0,0.2)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)"}}>
             {mounted ? (
               <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px"}}>
                  <span style={{
                    width: "8px", 
                    height: "8px", 
                    background: isOpen ? "#2ecc71" : "#e74c3c", 
                    borderRadius: "50%", 
                    boxShadow: isOpen ? "0 0 8px #2ecc71" : "none",
                    transition: "all 0.3s"
                  }}></span>
                  <strong style={{fontSize: "12px", color: isOpen ? "#fff" : "#ffcccb"}}>
                    {isOpen ? "Open Now" : "Closed Now"}
                  </strong>
               </div>
             ) : (
               <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px", height: "18px"}}></div>
             )}
             <p style={{fontSize: "11px", opacity: "0.7", margin: 0}}>Mon - Sat: 10:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div style={{
          flex: "1.4", 
          minWidth: "320px", 
          background: "white",
          padding: "30px", 
          borderRadius: "0 16px 16px 0", 
          boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          border: "1px solid #eee",
          borderLeft: "none",
          position: "relative"
        }}>
          
          {isSuccess ? (
            <div style={{
              height: "100%", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              textAlign: "center",
              animation: "fadeIn 0.5s ease"
            }}>
              <div style={{width: "60px", height: "60px", background: "#d1fae5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px"}}>
                <i className="fas fa-check" style={{fontSize: "30px", color: "#059669"}}></i>
              </div>
              <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "22px", color: "#0b3c6d", marginBottom: "10px"}}>Message Sent!</h3>
              <p style={{fontSize: "13px", color: "#666", maxWidth: "80%"}}>
                Thank you for contacting JB Insurance & Capital. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "20px", color: "#0b3c6d", marginBottom: "20px"}}>
                Get a Quote / Send Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "15px"}}>
                  <div className="form-group" style={{margin: 0}}>
                    <label style={{fontSize: "10px", fontWeight: "700", color: "#666", marginBottom: "3px", display: "block", textTransform: "uppercase"}}>Your Name</label>
                    <input type="text" name="name" placeholder="John Doe" required style={{height: "38px", fontSize: "12px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "0 12px", width: "100%"}} />
                  </div>
                  <div className="form-group" style={{margin: 0}}>
                    <label style={{fontSize: "10px", fontWeight: "700", color: "#666", marginBottom: "3px", display: "block", textTransform: "uppercase"}}>Phone</label>
                    <input type="text" name="phone" placeholder="+91 98765 43210" required style={{height: "38px", fontSize: "12px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "0 12px", width: "100%"}} />
                  </div>
                </div>
                
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "15px"}}>
                  <div className="form-group" style={{margin: 0}}>
                    <label style={{fontSize: "10px", fontWeight: "700", color: "#666", marginBottom: "3px", display: "block", textTransform: "uppercase"}}>Email</label>
                    <input type="email" name="email" placeholder="john@example.com" required style={{height: "38px", fontSize: "12px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "0 12px", width: "100%"}} />
                  </div>
                  <div className="form-group" style={{margin: 0}}>
                    <label style={{fontSize: "10px", fontWeight: "700", color: "#666", marginBottom: "3px", display: "block", textTransform: "uppercase"}}>Inquiry Type</label>
                    <select 
                      name="insurance" 
                      defaultValue="" 
                      style={{height: "38px", fontSize: "12px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "0 12px", width: "100%", outline: "none", cursor: "pointer"}}
                    >
                      <option value="" disabled>Select Topic</option>
                      <option value="Get a Quote">Get a Quote</option>
                      <option value="Claim Support">Claim Support</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Motor Insurance">Motor Insurance</option>
                      <option value="Health Insurance">Health Insurance</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group" style={{marginBottom: "20px"}}>
                  <label style={{fontSize: "10px", fontWeight: "700", color: "#666", marginBottom: "3px", display: "block", textTransform: "uppercase"}}>Message</label>
                  <textarea 
                    name="message" 
                    placeholder="Tell us about your requirements..." 
                    rows={3} 
                    style={{width: "100%", padding: "10px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "12px", background: "#f8fafc", outline: "none", resize: "none"}}
                  ></textarea>
                </div>
                
                {errorMessage && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}>{errorMessage}</p>}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-btn" 
                  style={{
                    height: "42px", 
                    fontSize: "12px", 
                    letterSpacing: "1px", 
                    width: "100%", 
                    borderRadius: "6px", 
                    background: isSubmitting ? "#94a3b8" : "linear-gradient(135deg, #0b3c6d 0%, #1a4f8b 100%)", 
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s"
                  }}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="map-container" style={{maxWidth: "1000px", margin: "0 auto 50px", padding: "0 5%", height: "300px"}}>
        <div className="map-frame" style={{boxShadow: "0 15px 30px rgba(0,0,0,0.1)", borderRadius: "16px", border: "4px solid white", width: "100%", height: "100%", overflow: "hidden"}}>
          <iframe 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy" 
            allowFullScreen 
            src="https://maps.google.com/maps?q=HIG-270%2C%20Behind%20MP%20Tower%2C%20Adityapur%2C%20Jamshedpur&t=&z=15&ie=UTF8&iwloc=&output=embed">
          </iframe>
        </div>
      </div>
    </main>
  );
}