import Link from 'next/link';
import Slider from './components/Slider';
import GetQuote from './components/GetQuote';

export default function Home() {

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero">
          <div className="welcome-text">Welcome to JB Insurance and Capital</div>
          <div className="hero-container">
             <Slider />
             <GetQuote />
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
              <p>Providing transparent coverage options from India&apos;s most trusted brands.</p>
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
                  <div className={`review-slide ${'active'}`}>
                      <p className="review-text">&quot;Claim settled in 3 days. Excellent support during my car accident. Highly recommend JBIC.&quot;</p>
                      <span className="review-author">- Amit K., Jamshedpur</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
                  {/* <div className={`review-slide ${reviewIndex === 1 ? 'active' : ''}`}>
                      <p className="review-text">&quot;Got the cheapest bike insurance rates here. Honest advice and no hidden charges.&quot;</p>
                      <span className="review-author">- Rahul S., Ranchi</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div> */}
              </div>
              <div className="review-col">
                  <h4>Health Plans</h4>
                  <div className="review-stars">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className={`review-slide ${'active'}`}>
                      <p className="review-text">&quot;Cashless facility worked perfectly for my father&apos;s surgery. Thank you for the quick help.&quot;</p>
                      <span className="review-author">- Priya S., Ranchi</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
                  {/* <div className={`review-slide ${reviewIndex === 1 ? 'active' : ''}`}>
                      <p className="review-text">&quot;Best advice for my elderly parents. They explained every detail clearly.&quot;</p>
                      <span className="review-author">- Dr. Gupta, Jamshedpur</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div> */}
              </div>
              <div className="review-col">
                  <h4>Support Service</h4>
                  <div className="review-stars">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <div className={`review-slide ${'active'}`}>
                      <p className="review-text">&quot;Very polite staff at Adityapur office. They handled my renewal instantly.&quot;</p>
                      <span className="review-author">- Md. Irfan, Adityapur</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div>
                  {/* <div className={`review-slide ${reviewIndex === 1 ? 'active' : ''}`}>
                      <p className="review-text">&quot;Trustworthy people. I have been insuring my shop with them for 2 years.&quot;</p>
                      <span className="review-author">- S. Pandey, Ranchi</span>
                      <span className="verified-badge"><i className="fas fa-check-circle"></i> Verified Client</span>
                  </div> */}
              </div>
          </div>
      </section>
    </main>
  );
}