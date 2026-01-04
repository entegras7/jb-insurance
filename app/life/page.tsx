import Link from 'next/link';

export default function LifeInsurance() {
  return (
    <main>
      {/* --- INJECT CUSTOM STYLES FOR HOVER EFFECTS --- */}

      {/* --- PAGE BANNER --- */}
      <div className="page-header" style={{
        position: 'relative',
        width: '100%',
        padding: '60px 5%', 
        textAlign: 'center',
        color: 'white',
        marginBottom: '30px',
        // Using life_hero.jpg with high transparency overlay
        backgroundImage: "linear-gradient(rgba(11, 60, 109, 0.9), rgba(2, 6, 23, 0.95)), url('/images/life_hero.jpg')",
        backgroundSize: "cover",       
        backgroundPosition: "center 40%",
        backgroundRepeat: "no-repeat",
        borderRadius: "0 0 20px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
      }}>
        <h1 style={{fontFamily: "'Cinzel', serif", fontSize: "34px", marginBottom: "12px", textShadow: "0 2px 10px rgba(0,0,0,0.5)"}}>Life Insurance</h1>
        <p style={{fontSize: "14px", opacity: "0.95", maxWidth: "600px", margin: "0 auto", color: "#f8fafc", textShadow: "0 1px 3px rgba(0,0,0,0.8)"}}>
          Protect your loved ones. Ensure their financial independence even in your absence.
        </p>
      </div>

      {/* --- INTRO SECTION --- */}
      <section className="section" style={{paddingTop: "0", paddingBottom: "40px"}}>
        <div style={{maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "30px"}}>
          <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "28px", color: "#0b3c6d", marginBottom: "15px"}}>A Promise for the Future</h2>
          <p style={{fontSize: "14px", color: "#555", lineHeight: "1.8"}}>
            Life insurance is the most important financial tool to secure your family&apos;s future. 
            Whether you are looking for pure protection through Term Plans or wealth creation via Savings Plans, 
            <strong>JB Insurance & Capital</strong> helps you find the right policy to meet your life goals.
          </p>
        </div>

        {/* --- TYPES OF LIFE INSURANCE (Grid) --- */}
        <div className="services-grid" style={{
          maxWidth: "1100px", 
          margin: "0 auto", 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px"
        }}>
          
          {/* Card 1: Term Life */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#eef4ff", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#0b3c6d", fontSize: "22px"}}>
              <i className="fas fa-user-shield"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Term Insurance</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Pure protection plan that offers high life cover at very affordable premiums. The best way to secure your family.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• High Sum Assured (1 Cr+)</li>
                <li>• Tax Benefits u/s 80C</li>
                <li>• Cover up to 99 Years</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Savings / Endowment */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#fff4e5", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#ff9900", fontSize: "22px"}}>
              <i className="fas fa-piggy-bank"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Savings Plans</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Dual benefit of insurance and investment. Create a corpus for your future goals with guaranteed returns.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Guaranteed Maturity Benefit</li>
                <li>• Regular Income Options</li>
                <li>• Wealth Creation</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Child Plan */}
          <div className="img-card" style={{height: "auto", minHeight: "200px", background: "white", border: "1px solid #eee", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderRadius: "16px"}}>
            <div style={{background: "#eef4ff", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", color: "#0b3c6d", fontSize: "22px"}}>
              <i className="fas fa-baby"></i>
            </div>
            <h4 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", fontSize: "18px", marginBottom: "10px"}}>Child Future Plan</h4>
            <p style={{fontSize: "12px", color: "#666", lineHeight: "1.6", marginBottom: "15px"}}>
              Secure your child&apos;s education and marriage dreams. Ensures funding continues even if you are not around.
            </p>
            <div style={{borderTop: "1px solid #eee", paddingTop: "15px", width: "100%"}}>
              <ul style={{fontSize: "12px", color: "#555", paddingLeft: "15px", margin: 0, lineHeight: "1.6"}}>
                <li>• Premium Waiver Benefit</li>
                <li>• Money Back at Milestones</li>
                <li>• Education Fund Security</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- ADD-ON COVERS SECTION (SHIFTED UP & COMPACT) --- */}
      <section className="section" style={{background: "#f8fafc", marginTop: "0", paddingTop: "40px", paddingBottom: "40px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto"}}>
          <h3 style={{fontFamily: "'Cinzel', serif", fontSize: "24px", color: "#0b3c6d", marginBottom: "30px", textAlign: "center"}}>Riders for Extra Protection</h3>
          
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px"}}>
            
            {/* Add-on 1 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#ffebee", color: "#e53935"}}>
                <i className="fas fa-wheelchair"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Accidental Disability</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Provides financial support in case of permanent or total disability due to an accident.</p>
            </div>

            {/* Add-on 2 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#e3f2fd", color: "#1e88e5"}}>
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Waiver of Premium</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>All future premiums are waived off if the policyholder suffers a critical illness or disability.</p>
            </div>

            {/* Add-on 3 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#e8f5e9", color: "#43a047"}}>
                <i className="fas fa-procedures"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Critical Illness</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Receive a lump sum amount upon diagnosis of specified critical illnesses.</p>
            </div>

            {/* Add-on 4 */}
            <div className="addon-card">
              <div className="icon-circle" style={{background: "#fff8e1", color: "#fbc02d"}}>
                <i className="fas fa-umbrella"></i>
              </div>
              <strong style={{color: "#0b3c6d", display: "block", marginBottom: "8px", fontSize: "15px", fontFamily: "'Cinzel', serif"}}>Accidental Death</strong>
              <p style={{fontSize: "12px", color: "#666", margin: 0, lineHeight: "1.5"}}>Additional sum assured is paid to the nominee in case of accidental death.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="section" style={{textAlign: "center", marginBottom: "40px", marginTop: "30px"}}>
        <div style={{background: "linear-gradient(135deg, #0b3c6d 0%, #1a4f8b 100%)", padding: "40px 20px", borderRadius: "16px", maxWidth: "900px", margin: "0 auto", color: "white", boxShadow: "0 15px 40px rgba(11, 60, 109, 0.25)"}}>
          <h2 style={{fontFamily: "'Cinzel', serif", fontSize: "24px", marginBottom: "15px"}}>Plan Your Legacy Today</h2>
          <p style={{fontSize: "13px", opacity: "0.9", marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px"}}>
            Compare Term and Savings plans from LIC, Tata AIA, HDFC Life, and more.
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
              Check Premium
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}