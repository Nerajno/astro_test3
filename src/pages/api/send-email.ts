import sgMail from '@sendgrid/mail';

export const POST = async ({ request }) => {
  const body = await request.json();
  const { name, email, message } = body;

  const apiKey = process.env.SENDGRID_API_KEY || import.meta.env.SENDGRID_API_KEY || "";

  if (!apiKey.startsWith("SG.")) {
    console.error("Invalid SendGrid API key format");
    return new Response(JSON.stringify({ error: 'Invalid API key configuration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  sgMail.setApiKey(apiKey);

  const msg = {
    to: 'Iamnerandojohnson@gmail.com', // Change to your recipient
    from: 'Iamnerandojohnson@gmail.com', // Change to your verified sender
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
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
