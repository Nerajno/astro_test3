import sgMail from '@sendgrid/mail';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, message } = body;

  // Input validation
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Simple email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email format' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

// const apiKey = process.env.SENDGRID_API_KEY || "";
const apiKey = import.meta.env.SENDGRID_API_KEY;

  if (!apiKey.startsWith("SG.")) {
    console.error("Invalid SendGrid API key format", process.env);
    return new Response(JSON.stringify({ error: 'Invalid API key configuration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  sgMail.setApiKey(apiKey);

  const msg = {
    to: 'nerando@developingdvlpr.com',
    from: 'nerando@developingdvlpr.com',
    subject: `New message from ${name}`,
    text: `From: ${name} (${email})\n\nMessage: ${message}`,
    html: `<strong>From:</strong> ${name} (${email})<br><br><strong>Message:</strong><br>${message}`,
  };

  try {
    await sgMail.send(msg);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
