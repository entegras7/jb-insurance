"use client"
import Link from 'next/link';

export default function Services() {
  return (
    <main style={{background: "#f8f9fa", minHeight: "100vh"}}>
      {/* --- INJECT STYLES --- */}
      <style jsx global>{`
        /* Force remove underlines from ALL links in this grid */
        a.service-card-link {
          text-decoration: none !important;
          color: inherit !important;
          display: block;
          height: 100%;
        }
      `}</style>
      
      <style jsx>{`
        .services-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px; /* Slightly tighter gap */
          max-width: 1200px;
          margin: 0 auto;
        }
        
        /* THE CARD DESIGN */
        .service-card {
          background: white;
          border-radius: 12px;
          padding: 35px 30px; /* Slightly more compact padding */
          box-shadow: 0 5px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.03);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border-color: rgba(11, 60, 109, 0.1);
        }

        /* ICON STYLING */
        .icon-circle {
          width: 55px;
          height: 55px;
          background: #eef4ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #0b3c6d;
          margin-bottom: 20px;
          transition: background 0.3s;
        }
        .service-card:hover .icon-circle {
          background: #0b3c6d;
          color: white;
        }

        /* TEXT STYLING */
        .card-title {
          font-family: 'Cinzel', serif;
          font-size: 20px;
          color: #0b3c6d;
          font-weight: 700;
          margin-bottom: 12px;
        }
        
        .card-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          font-weight: 400;
        }

        /* CHECKLIST STYLING */
        .features-list {
          margin-top: auto;
          list-style: none;
          padding: 0;
          width: 100%;
        }
        .features-list li {
          font-size: 12px;
          color: #555;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .features-list li i {
          color: #2ecc71;
          font-size: 13px;
        }
      `}</style>

      {/* --- PAGE BANNER (Less Space, More Text) --- */}
      <div className="page-header" style={{
        padding: '50px 5% 30px', /* Reduced padding */
        textAlign: 'center',
        background: "white",
        borderBottom: "1px solid #f0f0f0"
      }}>
        <h1 style={{fontFamily: "'Cinzel', serif", fontSize: "36px", color: "#0b3c6d", marginBottom: "15px"}}>Our Expertise</h1>
        <div style={{width: "70px", height: "4px", background: "#ff9900", margin: "0 auto 25px", borderRadius: "2px"}}></div>
        
        {/* Added Content to Fill Gap */}
        <p style={{fontSize: "15px", color: "#555", maxWidth: "800px", margin: "0 auto", lineHeight: "1.8"}}>
          At JB Insurance & Capital, we understand that every individual and business has unique protection needs. 
          Our comprehensive suite of insurance solutions is designed to provide you with financial security and peace of mind. 
          Whether you are safeguarding your family&apos;s future, protecting your vehicle, or securing your business assets, 
          our expert advisors are here to guide you through every step of the process.
        </p>
      </div>

      {/* --- CARD GRID --- */}
      <section className="section" style={{padding: "40px 5% 80px"}}> {/* Reduced top padding */}
        <div className="services-wrapper">
          
          {/* 1. Motor */}
          <Link href="/motor" className="service-card-link">
            <div className="service-card">
              <div className="icon-circle"><i className="fas fa-car"></i></div>
              <h3 className="card-title">Motor Insurance</h3>
              <p className="card-desc">
                Comprehensive coverage for your car, bike, or commercial vehicle. Includes protection against accidents, theft, and third-party liabilities.
              </p>
              <ul className="features-list">
                <li><i className="fas fa-check-circle"></i> Zero Depreciation Cover</li>
                <li><i className="fas fa-check-circle"></i> 24x7 Roadside Assistance</li>
                <li><i className="fas fa-check-circle"></i> Cashless Garages</li>
              </ul>
            </div>
          </Link>

          {/* 2. Health */}
          <Link href="/health" className="service-card-link">
            <div className="service-card">
              <div className="icon-circle"><i className="fas fa-heartbeat"></i></div>
              <h3 className="card-title">Health Insurance</h3>
              <p className="card-desc">
                Secure your family&apos;s health with plans that cover hospitalization costs, critical illnesses, and preventive checkups.
              </p>
              <ul className="features-list">
                <li><i className="fas fa-check-circle"></i> Cashless Treatment</li>
                <li><i className="fas fa-check-circle"></i> Pre & Post Hospitalization</li>
                <li><i className="fas fa-check-circle"></i> Tax Benefits</li>
              </ul>
            </div>
          </Link>

          {/* 3. Life */}
          <Link href="/life" className="service-card-link">
            <div className="service-card">
              <div className="icon-circle"><i className="fas fa-user-shield"></i></div>
              <h3 className="card-title">Life Insurance</h3>
              <p className="card-desc">
                Ensure your loved ones are financially secure. Choose from Term Plans, Endowment Policies, and Child Education Plans.
              </p>
              <ul className="features-list">
                <li><i className="fas fa-check-circle"></i> High Life Coverage</li>
                <li><i className="fas fa-check-circle"></i> Wealth Creation Options</li>
                <li><i className="fas fa-check-circle"></i> Critical Illness Riders</li>
              </ul>
            </div>
          </Link>

          {/* 4. SME / Corporate */}
          <Link href="/sme" className="service-card-link">
            <div className="service-card">
              <div className="icon-circle"><i className="fas fa-industry"></i></div>
              <h3 className="card-title">SME & Corporate</h3>
              <p className="card-desc">
                End-to-end risk management for your business. Covers shops, factories, godowns, and employee liabilities.
              </p>
              <ul className="features-list">
                <li><i className="fas fa-check-circle"></i> Fire & Burglary Insurance</li>
                <li><i className="fas fa-check-circle"></i> Marine Transit Policy</li>
                <li><i className="fas fa-check-circle"></i> Workmen Compensation</li>
              </ul>
            </div>
          </Link>

          {/* 5. Travel (No Link - Static Card) */}
          <div className="service-card">
            <div className="icon-circle" style={{background: "#e0f7fa", color: "#00bcd4"}}><i className="fas fa-plane"></i></div>
            <h3 className="card-title">Travel Insurance</h3>
            <p className="card-desc">
              Travel the world with confidence. Covers flight delays, lost baggage, and overseas medical emergencies.
            </p>
            <ul className="features-list">
              <li><i className="fas fa-check-circle"></i> Trip Cancellation</li>
              <li><i className="fas fa-check-circle"></i> Lost Passport Assistance</li>
              <li><i className="fas fa-check-circle"></i> Medical Evacuation</li>
            </ul>
          </div>

          {/* 6. Investment (No Link - Static Card) */}
          <div className="service-card">
            <div className="icon-circle" style={{background: "#fff3e0", color: "#ff9800"}}><i className="fas fa-chart-line"></i></div>
            <h3 className="card-title">Investment Plans</h3>
            <p className="card-desc">
              Smart investment solutions to grow your wealth. Systematic Investment Plans (SIPs) and high-return funds.
            </p>
            <ul className="features-list">
              <li><i className="fas fa-check-circle"></i> Guaranteed Returns</li>
              <li><i className="fas fa-check-circle"></i> Retirement Planning</li>
              <li><i className="fas fa-check-circle"></i> Tax Saving Funds</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}