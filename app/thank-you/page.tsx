import Link from 'next/link';

export default function ThankYou() {
  return (
    <main style={{textAlign: "center", padding: "100px 20px", minHeight: "60vh"}}>
        <div style={{maxWidth: "600px", margin: "0 auto", background: "#fff", padding: "40px", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", borderTop: "5px solid #0b3c6d"}}>
            <i className="fas fa-check-circle" style={{fontSize: "50px", color: "#2ecc71", marginBottom: "20px"}}></i>
            <h1 style={{fontFamily: "'Cinzel', serif", color: "#0b3c6d", marginBottom: "10px"}}>Message Received!</h1>
            <p style={{color: "#666", fontSize: "16px", marginBottom: "30px"}}>Thank you for contacting JB Insurance & Capital. Our team will review your request and get back to you shortly.</p>
            
            <Link href="/" style={{background: "#0b3c6d", color: "white", padding: "12px 30px", textDecoration: "none", borderRadius: "5px", fontWeight: "600"}}>
                Return Home
            </Link>
        </div>
    </main>
  );
}