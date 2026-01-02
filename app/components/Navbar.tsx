"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  // 1. Hooks & State
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. toggleMenu
  const toggleMenu = () => setIsOpen(!isOpen);

  // 3. Scroll Fix
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // 4. Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // 5. Open Modal Helper (Resets state so form is always fresh)
  const openModal = () => {
    setIsSuccess(false); // Hide "Success" message if it was there
    setShowModal(true);  // Show the Modal
  };

  // 6. Link Styles
  const linkStyle = (path: string) => ({
    textDecoration: "none", 
    color: pathname === path ? "#ff9900" : "#333", 
    fontWeight: "600", 
    fontSize: "15px", 
    whiteSpace: "nowrap" as const
  });

  // Helper for Mobile Links
  const MobileLink = ({ href, label }: { href: string, label: string }) => (
    <Link href={href} onClick={toggleMenu} style={{
      padding: "15px 0", borderBottom: "1px solid #eee", fontSize: "16px", 
      fontWeight: "600", color: "#333", textDecoration: "none", display: "block"
    }}>
      {label}
    </Link>
  );

  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Capture the form element to reset it later
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/send-quote", { method: "POST", body: formData });
      if (res.ok) {
        // Success: Clear form and show success message
        form.reset(); 
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Close modal automatically after 3 seconds
        setTimeout(() => { 
          setShowModal(false); 
          setIsSuccess(false); 
        }, 3000);
      } else { 
        throw new Error("Failed"); 
      }
    } catch (err) { 
      setIsSubmitting(false); 
      alert("Error sending request. Please try again."); 
    }
  };

  const inputStyle = { padding: "12px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" };

  return (
    <>
      {/* --- NAVBAR CONTAINER --- */}
      <nav className="navbar-fixed" style={{zIndex: 999999}}>
        
        {/* DESKTOP VIEW */}
        <div className="desktop-nav">
          <Link href="/" style={{display: "flex", alignItems: "center", gap: "12px", textDecoration: "none"}}>
            <img src="/images/logo.png" alt="Logo" className="logo-animate" style={{height: "60px", width: "auto"}} />
            <div style={{display: "flex", flexDirection: "column"}}>
              <span style={{color: "#0b3c6d", fontWeight: "800", fontSize: "18px", fontFamily: "'Cinzel', serif"}}>JB INSURANCE & CAPITAL</span>
              <span className="gold-text-animate" style={{fontSize: "10px", letterSpacing: "1px"}}>PROTECTING WHAT MATTERS MOST</span>
            </div>
          </Link>

          <div style={{display: "flex", gap: "25px", alignItems: "center"}}>
            <Link href="/" style={linkStyle('/')}>Home</Link>
            <Link href="/about" style={linkStyle('/about')}>About Us</Link>
            <Link href="/services" style={linkStyle('/services')}>Services</Link>
            <Link href="/contact" style={linkStyle('/contact')}>Contact</Link>
            {/* UPDATED: Uses openModal to reset form */}
            <button onClick={openModal} style={{
              background: "#ff9900", color: "white", padding: "10px 25px", borderRadius: "50px", 
              border: "none", fontWeight: "bold", cursor: "pointer"
            }}>Get Quote</button>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="mobile-nav">
          <Link href="/" style={{display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", overflow: "hidden"}}>
            <img src="/images/logo.png" alt="Logo" className="logo-animate" style={{height: "45px", width: "45px", objectFit: "contain", flexShrink: 0}} />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <span style={{
                color: "#0b3c6d", fontWeight: "800", fontSize: "13px", fontFamily: "'Cinzel', serif", 
                lineHeight: "1.2", whiteSpace: "nowrap"
              }}>
                JB INSURANCE & CAPITAL
              </span>
              <span className="gold-text-animate" style={{
                fontSize: "8px", marginTop: "1px", whiteSpace: "nowrap", letterSpacing: "0.5px"
              }}>
                PROTECTING WHAT MATTERS MOST
              </span>
            </div>
          </Link>

          <button onClick={toggleMenu} style={{background: "none", border: "none", padding: "5px", cursor: "pointer", flexShrink: 0}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0b3c6d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>

      </nav>

      <div style={{height: "90px"}}></div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="mobile-drawer" style={{zIndex: 999998}}>
          <div style={{padding: "20px"}}>
            <MobileLink href="/" label="Home" />
            <MobileLink href="/about" label="About Us" />
            <MobileLink href="/services" label="Services" />
            <MobileLink href="/contact" label="Contact Us" />
            {/* UPDATED: Uses openModal here too */}
            <button onClick={() => { toggleMenu(); openModal(); }} style={{
              marginTop: "25px", width: "100%", padding: "15px", background: "#0b3c6d", 
              color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", fontSize: "16px"
            }}>
              Get Instant Quote
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1000000,
          background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px"
        }}>
          <div style={{background: "white", padding: "30px", borderRadius: "12px", width: "100%", maxWidth: "400px", position: "relative"}}>
            <button onClick={() => setShowModal(false)} style={{position: "absolute", top: "10px", right: "15px", background: "none", border: "none", fontSize: "24px"}}>&times;</button>
            {isSuccess ? <h3 style={{color: "green", textAlign: "center"}}>Request Sent!</h3> : (
              <form onSubmit={handleModalSubmit} style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                <h3 style={{margin: 0, color: "#0b3c6d", textAlign: "center"}}>Get a Quote</h3>
                <input type="text" name="name" placeholder="Full Name" required style={inputStyle} />
                <input type="tel" name="phone" placeholder="Mobile Number" required style={inputStyle} />
                <input type="email" name="email" placeholder="Email Address (Optional)" style={inputStyle} />
                <select name="insurance" style={inputStyle} defaultValue="">
                  <option value="" disabled>Select Insurance Type</option>
                  <option value="Motor Insurance">Motor Insurance</option>
                  <option value="Health Insurance">Health Insurance</option>
                  <option value="Life Insurance">Life Insurance</option>
                  <option value="SME / Business">SME / Business</option>
                </select>
                <button disabled={isSubmitting} style={{padding: "12px", background: "#ff9900", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer"}}>
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}