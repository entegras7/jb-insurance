"use client"
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{background: "#020617", color: "white", padding: "30px 5% 10px", borderTop: "2px solid #ff9900"}}>
      <div style={{
        maxWidth: "1200px", 
        margin: "0 auto", 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "20px",
        paddingBottom: "20px",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        
        {/* Column 1: Brand & Socials */}
        <div>
          <h2 style={{
            fontFamily: "'Cinzel', serif", 
            fontSize: "19px", 
            color: "white", 
            marginBottom: "10px", 
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            JB Insurance & Capital
          </h2>
          <p style={{color: "#94a3b8", fontSize: "12px", lineHeight: "1.4", marginBottom: "15px", maxWidth: "280px"}}>
            Bridging the gap between complex insurance products and your peace of mind.
          </p>
          
          {/* Animated Social Icons (Brand Color + Sky Blue Glow) */}
          <div style={{display: "flex", gap: "10px"}}>
            <SocialIcon icon="fa-facebook-f" color="#1877F2" />
            <SocialIcon icon="fa-instagram" color="#E4405F" />
            <SocialIcon icon="fa-linkedin-in" color="#0A66C2" />
            <SocialIcon icon="fa-whatsapp" color="#25D366" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 style={{fontSize: "13px", color: "#ff9900", marginBottom: "12px", fontWeight: "bold", textTransform: "uppercase"}}>Quick Links</h3>
          <ul style={{listStyle: "none", padding: 0, fontSize: "12px", color: "#cbd5e1", display: "flex", flexDirection: "column", gap: "8px"}}>
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/about" className="footer-link">About Us</Link></li>
            <li><Link href="/services" className="footer-link">Our Services</Link></li>
            <li><Link href="/contact" className="footer-link">Contact Support</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info (UPDATED) */}
        <div>
          <h3 style={{fontSize: "13px", color: "#ff9900", marginBottom: "12px", fontWeight: "bold", textTransform: "uppercase"}}>Get in Touch</h3>
          <ul style={{listStyle: "none", padding: 0, fontSize: "12px", color: "#cbd5e1", display: "flex", flexDirection: "column", gap: "10px"}}>
            <li style={{display: "flex", gap: "10px", alignItems: "flex-start"}}>
              <i className="fas fa-map-marker-alt" style={{color: "#ff9900", marginTop: "3px"}}></i>
              <span>HIG-270, Behind MP Tower,<br/>Adityapur, Jamshedpur,<br/>Jharkhand - 831013</span>
            </li>
            <li style={{display: "flex", gap: "10px", alignItems: "center"}}>
              <i className="fas fa-phone-alt" style={{color: "#ff9900", marginTop: "1px"}}></i>
              <span>+91 87891 73946</span>
            </li>
            <li style={{display: "flex", gap: "10px", alignItems: "center"}}>
              <i className="fas fa-envelope" style={{color: "#ff9900", marginTop: "1px"}}></i>
              <span>info@jbinsurancecapital.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bottom-bar">
        <span>© {new Date().getFullYear()} JB Insurance & Capital. All rights reserved.</span>
        <div style={{display: "flex", gap: "20px"}}>
          <a href="#" className="legal-link">Privacy Policy</a>
          <a href="#" className="legal-link">Terms of Service</a>
        </div>
      </div>

      {/* --- CSS ANIMATIONS --- */}
      
    </footer>
  );
}

// --- HELPER COMPONENT FOR SOCIAL ICONS ---
const SocialIcon = ({ icon, color }: { icon: string, color: string }) => (
  <a 
    href="#" 
    className="social-bubble"
    onMouseOver={(e) => {
      e.currentTarget.style.background = color; // Brand Color
      e.currentTarget.style.boxShadow = `0 0 15px #00bfff, 0 0 5px ${color}`; // Sky Blue Glow + Brand Glow
      e.currentTarget.style.transform = "translateY(-5px) scale(1.1)"; // Bubble Pop Up
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "translateY(0) scale(1)";
    }}
  >
    <i className={`fab ${icon}`} style={{fontSize: "14px"}}></i>
  </a>
);