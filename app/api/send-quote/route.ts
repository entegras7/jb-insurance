import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Get the form data sent from the website (Navbar, Contact, etc.)
    const formData = await request.formData();
    
    // 2. Your specific Google Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbymjriMgPm3ybkh6en1e8qotaQTtgg6Jq9863GpEpPqvt8D82j_uPotb1TKbnwpGBA6/exec"; 

    // 3. Forward the data securely to Google
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
    });

    // 4. Check if Google received it correctly
    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      throw new Error('Google Script returned an error');
    }

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: 'Failed to send data' }, { status: 500 });
  }
}