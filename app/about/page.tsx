"use client";
import React from 'react';

export default function About() {
  return (
    <main>
      {/* 1. PAGE HEADER */}
      <div className="page-header">
        <h1>About JB Insurance & Capital</h1>
        <p>Trusted Insurance Advisory & Risk Management Partner since 2024.</p>
      </div>

      {/* 2. INTRODUCTION & DIRECTOR'S MESSAGE */}
      <section className="section" style={{paddingTop: "10px"}}>
        {/* FIXED: Flex Wrap ensures stacking on mobile */}
        <div style={{display: "flex", flexWrap: "wrap", gap: "40px", maxWidth: "1100px", margin: "0 auto", alignItems: "center"}}>
          
          {/* Left: Who We Are */}
          <div style={{flex: "1", minWidth: "300px"}}>
            <h4 style={{color: "#ff9900", textTransform: "uppercase", letterSpacing: "1px", fontSize: "12px", fontWeight: "700", marginBottom: "10px"}}>Who We Are</h4>
            <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "28px", color: "#0b3c6d", marginBottom: "20px"}}>Simplifying Insurance, Securing Futures.</h2>
            <p style={{fontSize: "13px", color: "#555", lineHeight: "1.8", marginBottom: "15px"}}>
              JB Insurance and Capital (JBIC) is a professional insurance advisory firm established on <strong>9 September 2024</strong>. 
              We were founded with a clear purpose: to bridge the gap between complex insurance products and the people who need them.
            </p>
            <p style={{fontSize: "13px", color: "#555", lineHeight: "1.8"}}>
              We act as your bridge to leading insurance companies, ensuring you get <strong>honest advice, transparent pricing, and specialized coverage</strong> 
              tailored to your specific risks—whether for your vehicle, business, or family.
            </p>
          </div>

          {/* Right: Director's Quote Box */}
          <div style={{flex: "1", minWidth: "300px", background: "#0b3c6d", padding: "40px", borderRadius: "16px", color: "white", position: "relative", boxShadow: "0 15px 40px rgba(11, 60, 109, 0.2)"}}>
            <i className="fas fa-quote-left" style={{fontSize: "40px", opacity: "0.2", position: "absolute", top: "30px", left: "30px"}}></i>
            <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "20px", marginBottom: "15px", position: "relative", zIndex: "1"}}>Director's Message</h3>
            <p style={{fontSize: "13px", fontStyle: "italic", opacity: "0.9", lineHeight: "1.8", marginBottom: "20px", position: "relative", zIndex: "1"}}>
              "Our journey began with a simple yet powerful belief — <strong>insurance should protect people, not confuse them.</strong> 
              We focus on understanding our clients' risks first, and only then recommend suitable solutions. 
              Our commitment is to provide honest advice and long-term value to every client we serve."
            </p>
            <div style={{borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "15px", marginTop: "15px"}}>
              <strong style={{display: "block", fontSize: "14px"}}>Director</strong>
              <span style={{fontSize: "11px", opacity: "0.7", textTransform: "uppercase", letterSpacing: "1px"}}>JB Insurance & Capital</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. DEDICATED CLAIM SUPPORT */}
      <section className="section" style={{background: "#f8fafc"}}>
        <div className="section-title">
          <h2>Dedicated Claim Support</h2>
          <p>We stand by you when you need us the most.</p>
        </div>
        
        <div style={{maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "40px"}}>
           <p style={{fontSize: "13px", color: "#555", lineHeight: "1.8"}}>
             At JBIC, we believe that <strong>the true test of insurance is at the time of a claim.</strong> 
             That is why we have a specialized team dedicated solely to assisting you with documentation, 
             coordination, and fast settlement.
           </p>
        </div>

        {/* FIXED: Flex Layout instead of Grid */}
        <div style={{display: "flex", flexWrap: "wrap", gap: "20px", maxWidth: "900px", margin: "0 auto", justifyContent: "center"}}>
            {/* Team Member 1 */}
            <div className="img-card" style={{flex: "1", minWidth: "300px", height: "auto", minHeight: "140px", background: "white", border: "1px solid #eee", flexDirection: "row", alignItems: "center", padding: "25px", gap: "20px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)"}}>
               <div style={{width: "60px", height: "60px", background: "#eef4ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#0b3c6d", fontSize: "24px", flexShrink: 0}}>
                 <i className="fas fa-user-tie"></i>
               </div>
               <div style={{textAlign: "left"}}>
                 <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "5px"}}>Mr. Saurav Kumar</h4>
                 <p style={{fontSize: "11px", color: "#ff9900", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px"}}>Head of Claims</p>
                 <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.4", marginBottom: "8px"}}>Ensuring every claim is processed with speed and fairness.</p>
                 <p style={{fontSize: "12px", color: "#333", fontWeight: "600", margin: 0}}>
                    <i className="fas fa-phone-alt" style={{marginRight: "8px", color: "#ff9900"}}></i>
                    +91 87891 73946
                 </p>
               </div>
            </div>

            {/* Team Member 2 */}
            <div className="img-card" style={{flex: "1", minWidth: "300px", height: "auto", minHeight: "140px", background: "white", border: "1px solid #eee", flexDirection: "row", alignItems: "center", padding: "25px", gap: "20px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)"}}>
               <div style={{width: "60px", height: "60px", background: "#fff4e5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff9900", fontSize: "24px", flexShrink: 0}}>
                 <i className="fas fa-user-shield"></i>
               </div>
               <div style={{textAlign: "left"}}>
                 <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "5px"}}>Mr. Nitesh Upadhyay</h4>
                 <p style={{fontSize: "11px", color: "#ff9900", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px"}}>Senior Claims Expert</p>
                 <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.4", marginBottom: "8px"}}>Expert guidance through complex documentation.</p>
                 <p style={{fontSize: "12px", color: "#333", fontWeight: "600", margin: 0}}>
                    <i className="fas fa-phone-alt" style={{marginRight: "8px", color: "#ff9900"}}></i>
                    +91 70617 87909
                 </p>
               </div>
            </div>
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="section">
        <div className="section-title">
          <h2>Our Approach</h2>
          <p>We don't just sell policies; we manage your risks.</p>
        </div>
        
        {/* FIXED: Flexible Layout for Approach Cards */}
        <div style={{display: "flex", flexWrap: "wrap", gap: "15px", maxWidth: "1100px", margin: "0 auto", justifyContent: "center"}}>
          {[
            { id: 1, title: "Risk Assessment", desc: "Understanding your exposure before suggesting coverage.", color: "#0b3c6d", bg: "#eef4ff" },
            { id: 2, title: "Policy Comparison", desc: "Evaluating multiple insurers to find the best fit for you.", color: "#ff9900", bg: "#fff4e5" },
            { id: 3, title: "Customization", desc: "Designing coverage specifically based on your needs.", color: "#0b3c6d", bg: "#eef4ff" },
            { id: 4, title: "Claim Assistance", desc: "End-to-end support throughout the claim process.", color: "#ff9900", bg: "#fff4e5" }
          ].map((item) => (
            <div key={item.id} className="img-card" style={{flex: "1", minWidth: "220px", height: "180px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
              <div style={{background: item.bg, width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: item.color, fontWeight: "bold"}}>{item.id}</div>
              <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "16px", marginBottom: "8px"}}>{item.title}</h4>
              <p style={{fontSize: "12px", color: "#666", margin: 0}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MISSION, VISION & VALUES */}
      <section className="section" style={{background: "#fafbff"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          
          {/* FIXED: Flex Wrap for Vision/Mission (Stacks on Mobile) */}
          <div style={{display: "flex", flexWrap: "wrap", gap: "30px", marginBottom: "40px"}}>
            <div style={{flex: "1", minWidth: "300px", background: "linear-gradient(135deg, #0b3c6d 0%, #05162b 100%)", padding: "30px", borderRadius: "16px", color: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.1)"}}>
              <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "20px", marginBottom: "10px", color: "#ff9900"}}>Our Vision</h3>
              <p style={{fontSize: "13px", opacity: "0.9", lineHeight: "1.6"}}>To become a trusted insurance partner known for integrity, expertise, and customer-centric service across India.</p>
            </div>
            <div style={{flex: "1", minWidth: "300px", background: "white", padding: "30px", borderRadius: "16px", border: "1px solid #eee", boxShadow: "0 10px 30px rgba(0,0,0,0.05)"}}>
              <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "20px", marginBottom: "10px", color: "#0b3c6d"}}>Our Mission</h3>
              <p style={{fontSize: "13px", color: "#666", lineHeight: "1.6"}}>To deliver reliable insurance and financial solutions that protect our clients from uncertainty and empower them with confidence.</p>
            </div>
          </div>

          <h3 style={{textAlign: "center", fontFamily: "'Cinzel', serif", color: "#0b3c6d", marginBottom: "25px", fontSize: "22px"}}>Our Core Values</h3>
          
          {/* FIXED: Flex Wrap for Core Values (Fixes Squishing) */}
          <div style={{display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center"}}>
            {[
              { icon: "fa-hand-holding-heart", title: "Integrity", desc: "Honest advice, always", color: "#ff9900" },
              { icon: "fa-user-shield", title: "Accountability", desc: "We stand by our clients", color: "#0b3c6d" },
              { icon: "fa-brain", title: "Expertise", desc: "Continuous learning", color: "#ff9900" },
              { icon: "fa-users", title: "Trust", desc: "Built through actions", color: "#0b3c6d" }
            ].map((val, index) => (
              <div key={index} className="partner-tag" style={{flex: "1", minWidth: "150px", background: "white", color: "#333", border: "1px solid #eee", padding: "20px", flexDirection: "column", height: "auto"}}>
                <i className={`fas ${val.icon}`} style={{fontSize: "24px", color: val.color, marginBottom: "10px"}}></i>
                <strong style={{fontSize: "14px", marginBottom: "5px"}}>{val.title}</strong>
                <span style={{fontSize: "10px", color: "#666", fontWeight: "normal"}}>{val.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}