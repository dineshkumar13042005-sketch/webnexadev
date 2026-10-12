import { NextResponse } from "next/server";

interface EnquiryPayload {
  fullName: string;
  businessName?: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
}

// In-memory store for recent submissions to prevent rapid duplicates and allow development inspection
const recentSubmissions: Array<{
  id: string;
  timestamp: string;
  data: EnquiryPayload;
}> = [];

export async function POST(request: Request) {
  let body: EnquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload provided." },
      { status: 400 }
    );
  }

  try {
    const { fullName, email, phone, service, budget, description } = body;

    // 1. Validation: Required fields
    if (!fullName || !fullName.trim()) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!service || !service.trim()) {
      return NextResponse.json(
        { success: false, error: "Please select a required service." },
        { status: 400 }
      );
    }

    if (!budget || !budget.trim()) {
      return NextResponse.json(
        { success: false, error: "Please select an estimated budget range." },
        { status: 400 }
      );
    }

    if (!description || !description.trim() || description.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a brief project description (at least 10 characters).",
        },
        { status: 400 }
      );
    }

    // 2. Prevent rapid duplicate submissions within 30 seconds
    const now = Date.now();
    const duplicate = recentSubmissions.find(
      (sub) =>
        sub.data.email === email.trim() &&
        now - new Date(sub.timestamp).getTime() < 30000
    );

    if (duplicate) {
      return NextResponse.json(
        {
          success: false,
          error:
            "We already received an enquiry from this email just a moment ago. Please wait before submitting again.",
        },
        { status: 429 }
      );
    }

    // 3. Record enquiry
    const submissionId = `ENQ-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    const newEnquiry = {
      id: submissionId,
      timestamp: new Date().toISOString(),
      data: {
        fullName: fullName.trim(),
        businessName: body.businessName?.trim() || "N/A",
        email: email.trim(),
        phone: phone.trim(),
        service: service.trim(),
        budget: budget.trim(),
        description: description.trim(),
      },
    };

    recentSubmissions.unshift(newEnquiry);
    if (recentSubmissions.length > 50) {
      recentSubmissions.pop();
    }

    // Webhook hook: If WEBHOOK_URL or NOTIFICATION_EMAIL is configured, you can trigger it here
    if (process.env.ENQUIRY_WEBHOOK_URL) {
      try {
        await fetch(process.env.ENQUIRY_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEnquiry),
        });
      } catch (err) {
        console.error("Webhook notification error:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your project enquiry has been received. Our team will review your requirements and reach out promptly.",
        referenceId: submissionId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred while processing your request. Please try again or reach out directly on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
