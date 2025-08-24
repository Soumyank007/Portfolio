import nodemailer from 'nodemailer';

// Check if all required fields are provided
function formValid(body) {
  return body.email && body.phone && body.first && body.last;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = req.body;

  if (!formValid(body)) {
    res.status(422).json({ error: 'Missing required fields' });
    return;
  }

  // Check if email credentials are configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials not configured. Please set EMAIL_USER and EMAIL_PASS in .env.local');
    res.status(500).json({ 
      error: 'Email service not configured. Please contact the administrator.',
      details: 'Email credentials missing'
    });
    return;
  }

  // Create a transporter - works with Gmail, Outlook, Yahoo, etc.
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp-mail.outlook.com', // For Outlook/Hotmail
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const message = `
    New Contact Form Submission:
    
    Name: ${body.first} ${body.last}
    Email: ${body.email}
    Phone: ${body.phone}
    
    Message:
    ${body.message}
  `;

  const mailOptions = {
    from: `"${body.first} ${body.last}" <${process.env.EMAIL_USER}>`, // Shows user's name but uses your email
    to: process.env.TO_EMAIL || process.env.EMAIL_USER, // Send to yourself
    subject: `Contact Form: ${body.first} ${body.last} (${body.email})`,
    text: message,
    replyTo: body.email // So you can reply directly to the sender
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(201).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}