import Link from 'next/link';

export default function MotorInsurance() {
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
          background: linear-gradient(90deg, #0b3c6d, #ff9900);
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
        backgroundImage: "linear-gradient(rgba(11, 60, 109, 0.9), rgba(2, 6, 23, 0.95)), url('/images/motor_hero.jpg')",
        backgroundSize: "cover",       
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
        borderRadius: "0 0 20px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
      }}>
        <h1 style={{fontFamily: "'Cinzel', serif", fontSize: "34px", marginBottom: "12px", textShadow: "0 2px 10px rgba(0,0,0,0.5)"}}>Motor Insurance</h1>
        <p style={{fontSize: "14px", opacity: "0.95", maxWidth: "600px", margin: "0 auto", color: "#f8fafc", textShadow: "0 1px 3px rgba(0,0,0,0.8)"}}>
          Drive with confidence. Comprehensive protection for your private and commercial vehicles.
        </p>
      </div>

      {/* --- INTRO & TYPES SECTION --- */}
      <section className="section" style={{paddingTop: "0", paddingBottom: "40px"}}>
        <div style={{maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "30px"}}>
          <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "28px", color: "#0b3c6d", marginBottom: "15px"}}>Complete Vehicle Protection</h2>
          <p style={{fontSize: "14px", color: "#555", lineHeight: "1.8"}}>
            Road accidents, theft, or natural calamities can lead to huge financial losses. 
            <strong>JB Insurance & Capital</strong> helps you find the perfect motor insurance policy that covers damages to your vehicle 
            and protects you against third-party legal liabilities.
          </p>
        </div>

        {/* --- TYPES OF MOTOR INSURANCE (Grid) --- */}
        <div className="services-grid" style={{
          maxWidth: "1100px", 
          margin: "0 auto", 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px"
        }}>
          
          {/* Card 1: Private Car */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#eef4ff", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#0b3c6d", fontSize: "22px"}}>
              <i className="fas fa-car-side"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Private Car</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Comprehensive plans covering own damage, theft, and third-party liability.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Cashless Network Garages</li>
                <li>• No Claim Bonus (NCB) Protection</li>
                <li>• Personal Accident Cover</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Two-Wheeler */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#fff4e5", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#ff9900", fontSize: "22px"}}>
              <i className="fas fa-motorcycle"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Two-Wheeler</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Affordable protection for your bike or scooter. Mandatory third-party cover available.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Instant Policy Issuance</li>
                <li>• Long-Term Plans (1-3 Years)</li>
                <li>• Low Premium Rates</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Commercial */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#eef4ff", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#0b3c6d", fontSize: "22px"}}>
              <i className="fas fa-truck-moving"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Commercial Vehicle</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Robust insurance for Goods Carrying Vehicles (GCV) and Passenger Carrying Vehicles (PCV).
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Fleet Insurance Options</li>
                <li>• Driver & Helper Cover</li>
                <li>• Third-Party Liability</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- ADD-ON COVERS SECTION (SHIFTED UP & COMPACT) --- */}
      <section className="section" style={{background: "#f8fafc", marginTop: "0", paddingTop: "40px", paddingBottom: "40px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "24px", color: "#0b3c6d", marginBottom: "30px", textAlign: "center"}}>Smart Add-Ons for Extra Protection</h3>
          
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px"}}>
            
            {/* Add-on 1 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#fff0f0", color: "#e74c3c"}}>
                <i className="fas fa-car-crash"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Zero Depreciation</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Get full claim amount without any deduction for depreciation on parts.</p>
            </div>

            {/* Add-on 2 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#eef4ff", color: "#0b3c6d"}}>
                <i className="fas fa-oil-can"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Engine Protection</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Covers repair costs for engine damage due to water ingress or leakage.</p>
            </div>

            {/* Add-on 3 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#fff8e1", color: "#f39c12"}}>
                <i className="fas fa-truck-pickup"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Roadside Assistance</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>24/7 support for towing, flat tires, battery jumpstart, and fuel delivery.</p>
            </div>

            {/* Add-on 4 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#e8f5e9", color: "#27ae60"}}>
                <i className="fas fa-award"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>NCB Protect</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Keep your No Claim Bonus (up to 50%) intact even after making a claim.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="section" style={{textAlign: "center", marginBottom: "40px", marginTop: "30px"}}>
        <div style={{background: "linear-gradient(135deg, #0b3c6d 0%, #1a4f8b 100%)", padding: "40px 20px", borderRadius: "16px", maxWidth: "900px", margin: "0 auto", color: "white", boxShadow: "0 15px 40px rgba(11, 60, 109, 0.25)"}}>
          <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "24px", marginBottom: "15px"}}>Ready to Insure Your Vehicle?</h2>
          <p style={{fontSize: "13px", opacity: "0.9", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px"}}>
            Get instant quotes from top insurers tailored for your car or bike.
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
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}