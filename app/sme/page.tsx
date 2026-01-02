"use client";
import React from 'react';
import Link from 'next/link';

export default function SMEInsurance() {
  return (
    <main>
      {/* --- INJECT CUSTOM STYLES FOR HOVER EFFECTS --- */}
      <style jsx>{`
        .addon-card {
          background: white;
          padding: 25px 20px;
          border-radius: 16px;
          border: 1px solid #eee;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
        }
        .addon-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(11, 60, 109, 0.1);
          border-color: rgba(11, 60, 109, 0.1);
        }
        .addon-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #0b3c6d, #f39c12);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .addon-card:hover::after {
          transform: scaleX(1);
        }
        .icon-circle {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: all 0.3s ease;
        }
        .addon-card:hover .icon-circle {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>

      {/* --- PAGE BANNER --- */}
      <div className="page-header" style={{
        position: 'relative',
        width: '100%',
        padding: '60px 5%', 
        textAlign: 'center',
        color: 'white',
        marginBottom: '30px',
        // Using sme_hero.jpg with high transparency overlay
        backgroundImage: "linear-gradient(rgba(11, 60, 109, 0.9), rgba(2, 6, 23, 0.95)), url('/images/sme_hero.jpg')",
        backgroundSize: "cover",       
        backgroundPosition: "center 40%",
        backgroundRepeat: "no-repeat",
        borderRadius: "0 0 20px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
      }}>
        <h1 style={{fontFamily: "'Cinzel', serif", fontSize: "34px", marginBottom: "12px", textShadow: "0 2px 10px rgba(0,0,0,0.5)"}}>Property & Engineering</h1>
        <p style={{fontSize: "14px", opacity: "0.95", maxWidth: "600px", margin: "0 auto", color: "#f8fafc", textShadow: "0 1px 3px rgba(0,0,0,0.8)"}}>
          Safeguard your business assets. Comprehensive coverage for factories, warehouses, and projects.
        </p>
      </div>

      {/* --- INTRO SECTION --- */}
      <section className="section" style={{paddingTop: "0", paddingBottom: "40px"}}>
        <div style={{maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "30px"}}>
          <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "28px", color: "#0b3c6d", marginBottom: "15px"}}>Business Continuity Assured</h2>
          <p style={{fontSize: "14px", color: "#555", lineHeight: "1.8"}}>
            Unforeseen events like fire, machinery breakdown, or transit losses can halt your operations. 
            <strong>JB Insurance & Capital</strong> specializes in SME and Corporate insurance, protecting your physical assets 
            and ensuring your business bounces back quickly from any disaster.
          </p>
        </div>

        {/* --- TYPES OF SME INSURANCE (Grid) --- */}
        <div className="services-grid" style={{
          maxWidth: "1100px", 
          margin: "0 auto", 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px"
        }}>
          
          {/* Card 1: Fire & Burglary */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#eef4ff", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#0b3c6d", fontSize: "22px"}}>
              <i className="fas fa-fire-extinguisher"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Fire & Burglary</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Standard Fire and Special Perils policy to protect buildings, stock, and furniture against fire, flood, and theft.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Building & Contents Cover</li>
                <li>• STFI (Storm, Tempest, Flood)</li>
                <li>• RSMD (Riot, Strike, Damage)</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Marine Cargo */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#fff4e5", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#ff9900", fontSize: "22px"}}>
              <i className="fas fa-ship"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Marine Cargo</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Transit insurance for goods being transported via road, rail, sea, or air. Covers damage during movement.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Inland Transit (Road/Rail)</li>
                <li>• Import/Export Coverage</li>
                <li>• All Risk Policies</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Engineering/MBD */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#eef4ff", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#0b3c6d", fontSize: "22px"}}>
              <i className="fas fa-cogs"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Engineering</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Technical insurance for machinery and construction projects. Essential for manufacturing units.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Machinery Breakdown (MBD)</li>
                <li>• Electronic Equipment (EEI)</li>
                <li>• Contractor's All Risk (CAR)</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- ADD-ON COVERS SECTION (SHIFTED UP & COMPACT) --- */}
      <section className="section" style={{background: "#f8fafc", marginTop: "0", paddingTop: "40px", paddingBottom: "40px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "24px", color: "#0b3c6d", marginBottom: "30px", textAlign: "center"}}>Critical Add-Ons for Business</h3>
          
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px"}}>
            
            {/* Add-on 1 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#ffebee", color: "#e53935"}}>
                <i className="fas fa-industry"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Business Interruption</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Covers loss of profit and standing charges if business stops due to fire/accident.</p>
            </div>

            {/* Add-on 2: FIXED ICON (Changed from 'user-hard-hat' to 'helmet-safety') */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#e3f2fd", color: "#1e88e5"}}>
                <i className="fas fa-helmet-safety"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Workmen Compensation</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Legal liability coverage for accidents or death of employees at the workplace.</p>
            </div>

            {/* Add-on 3 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#e8f5e9", color: "#43a047"}}>
                <i className="fas fa-bomb"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Terrorism Cover</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Protection against damages caused by acts of terrorism or sabotage.</p>
            </div>

            {/* Add-on 4 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#fff8e1", color: "#fbc02d"}}>
                <i className="fas fa-globe-asia"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Earthquake</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Specific add-on to cover structural damages caused by earthquakes.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="section" style={{textAlign: "center", marginBottom: "40px", marginTop: "30px"}}>
        <div style={{background: "linear-gradient(135deg, #0b3c6d 0%, #1a4f8b 100%)", padding: "40px 20px", borderRadius: "16px", maxWidth: "900px", margin: "0 auto", color: "white", boxShadow: "0 15px 40px rgba(11, 60, 109, 0.25)"}}>
          <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "24px", marginBottom: "15px"}}>Protect Your Business Assets</h2>
          <p style={{fontSize: "13px", opacity: "0.9", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px"}}>
            Get tailored risk assessment and quotes for your factory or office.
          </p>
          <div style={{display: "flex", gap: "15px", justifyContent: "center"}}>
            <Link href="/contact" style={{
              background: "white", 
              color: "#0b3c6d", 
              padding: "12px 30px", 
              fontSize: "14px", 
              fontWeight: "700", 
              borderRadius: "50px", 
              textDecoration: "none", 
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.2s"
            }}>
              Consult Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}