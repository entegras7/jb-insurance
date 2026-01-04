"use client";
import { useState } from "react";

export default function GetQuote() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        // Capture form element to avoid null errors later
        const formElement = e.currentTarget;
        const formData = new FormData(formElement);

        try {
            // Connect to the same API route as the Navbar
            const response = await fetch("/api/send-quote", {
                method: "POST",
                body: formData, // Sending directly as FormData (not JSON)
            });

            if (response.ok) {
                setIsSuccess(true);

                // Reset the form safely
                if (formElement) {
                    formElement.reset();
                }

                // Auto-Refresh (Reappear Form) after 3 Seconds
                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);

            } else {
                setErrorMessage("Server error. Please try again.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setErrorMessage("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="quote-box" id="quote">
            {isSuccess ? (
                <div style={{ textAlign: 'center', padding: '50px 10px', animation: 'fadeIn 0.5s' }}>
                    <div style={{ fontSize: '50px', color: '#2ecc71', marginBottom: '20px' }}>✓</div>
                    <h3 style={{ color: 'white', marginBottom: '10px', fontSize: '24px' }}>Message Sent Successfully!</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Our team will contact you shortly.</p>
                </div>
            ) : (
                <>
                    <h3>Get a Quick Quote</h3>
                    <p>Fill details to get a callback</p>
                    <form onSubmit={handleQuoteSubmit}>
                        <div className="form-group"><input type="text" name="name" placeholder="Full Name" required /></div>
                        <div className="form-group"><input type="tel" name="phone" placeholder="Mobile Number" required /></div>
                        <div className="form-group"><input type="email" name="email" placeholder="Email Address" required /></div>
                        <div className="form-group">
                            <select name="insurance" defaultValue="" required>
                                <option value="" disabled>Select Insurance Type</option>
                                <option value="Motor Insurance">Motor Insurance</option>
                                <option value="Health Insurance">Health Insurance</option>
                                <option value="Life Insurance">Life Insurance</option>
                                <option value="SME / Business">SME / Business</option>
                            </select>
                        </div>
                        {errorMessage && <p style={{ color: '#ff6b6b', fontSize: '12px', marginBottom: '10px', fontWeight: 'bold' }}>{errorMessage}</p>}
                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Request Quote"}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}