import Link from 'next/link';

export default function HealthInsurance() {
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
          background: linear-gradient(90deg, #2ecc71, #0b3c6d);
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
        // Using health_hero.jpg with high transparency overlay
        backgroundImage: "linear-gradient(rgba(11, 60, 109, 0.9), rgba(2, 6, 23, 0.95)), url('/images/health_hero.jpg')",
        backgroundSize: "cover",       
        backgroundPosition: "center 40%",
        backgroundRepeat: "no-repeat",
        borderRadius: "0 0 20px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
      }}>
        <h1 style={{fontFamily: "'Cinzel', serif", fontSize: "34px", marginBottom: "12px", textShadow: "0 2px 10px rgba(0,0,0,0.5)"}}>Health Insurance</h1>
        <p style={{fontSize: "14px", opacity: "0.95", maxWidth: "600px", margin: "0 auto", color: "#f8fafc", textShadow: "0 1px 3px rgba(0,0,0,0.8)"}}>
          Secure your family&apos;s future. Comprehensive medical coverage with cashless treatments.
        </p>
      </div>

      {/* --- INTRO SECTION --- */}
      <section className="section" style={{paddingTop: "0", paddingBottom: "40px"}}>
        <div style={{maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "30px"}}>
          <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "28px", color: "#0b3c6d", marginBottom: "15px"}}>Your Wealth is Your Health</h2>
          <p style={{fontSize: "14px", color: "#555", lineHeight: "1.8"}}>
            Rising medical costs can wipe out your savings in days. 
            <strong>JB Insurance & Capital</strong> ensures you are prepared for any medical emergency. 
            We help you choose policies with the best claim settlement ratios, minimal waiting periods, and wide hospital networks.
          </p>
        </div>

        {/* --- TYPES OF HEALTH INSURANCE (Grid) --- */}
        <div className="services-grid" style={{
          maxWidth: "1100px", 
          margin: "0 auto", 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px"
        }}>
          
          {/* Card 1: Individual */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#eef4ff", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#0b3c6d", fontSize: "22px"}}>
              <i className="fas fa-user-injured"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Individual Plan</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Personalized coverage for a single individual. High sum insured options dedicated to one person.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Cashless Hospitalization</li>
                <li>• Pre & Post Hospitalization Cover</li>
                <li>• Annual Health Checkups</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Family Floater */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#fff4e5", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#ff9900", fontSize: "22px"}}>
              <i className="fas fa-users"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Family Floater</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              A single policy covering your entire family (Spouse + Children). The sum insured floats among all members.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Cost-Effective Premium</li>
                <li>• Maternity Benefits (Optional)</li>
                <li>• Restore/Recharge Benefits</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Senior Citizen */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#eef4ff", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#0b3c6d", fontSize: "22px"}}>
              <i className="fas fa-blind"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Senior Citizen</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Specialized plans for parents above 60 years. Covers age-related ailments and pre-existing diseases.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Shorter Waiting Periods</li>
                <li>• AYUSH Treatment Cover</li>
                <li>• Day Care Procedures</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- ADD-ON COVERS SECTION (SHIFTED UP & COMPACT) --- */}
      <section className="section" style={{background: "#f8fafc", marginTop: "0", paddingTop: "40px", paddingBottom: "40px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "24px", color: "#0b3c6d", marginBottom: "30px", textAlign: "center"}}>Smart Add-Ons for Full Security</h3>
          
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px"}}>
            
            {/* Add-on 1 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#ffebee", color: "#e53935"}}>
                <i className="fas fa-heartbeat"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Critical Illness</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Lump sum payout upon diagnosis of major illnesses like Cancer or Heart Attack.</p>
            </div>

            {/* Add-on 2 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#e3f2fd", color: "#1e88e5"}}>
                <i className="fas fa-baby-carriage"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Maternity Cover</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Expenses for delivery (Normal/C-Section) and newborn baby vaccination.</p>
            </div>

            {/* Add-on 3 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#e8f5e9", color: "#43a047"}}>
                <i className="fas fa-stethoscope"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>OPD Care</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Covers doctor consultation fees, pharmacy bills, and diagnostics without admission.</p>
            </div>

            {/* Add-on 4 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#fff8e1", color: "#fbc02d"}}>
                <i className="fas fa-award"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>NCB Bonus</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Increase your sum insured amount for every claim-free year (up to 100%).</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="section" style={{textAlign: "center", marginBottom: "40px", marginTop: "30px"}}>
        <div style={{background: "linear-gradient(135deg, #0b3c6d 0%, #1a4f8b 100%)", padding: "40px 20px", borderRadius: "16px", maxWidth: "900px", margin: "0 auto", color: "white", boxShadow: "0 15px 40px rgba(11, 60, 109, 0.25)"}}>
          <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "24px", marginBottom: "15px"}}>Secure Your Family Today</h2>
          <p style={{fontSize: "13px", opacity: "0.9", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px"}}>
            Compare plans from Star Health, HDFC Ergo, Niva Bupa, and more.
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
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}