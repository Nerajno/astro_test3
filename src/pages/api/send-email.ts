import sgMail from '@sendgrid/mail';

export const post = async ({ request }) => {
  const body = await request.json();
  const { name, email, message } = body;

  sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

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
