const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true only for port 465; 587 uses STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendPasswordResetEmail(toEmail, resetUrl) {
  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: toEmail,
    subject: 'TravelBharat — Reset your admin password',
    text: `You requested a password reset for your TravelBharat admin account.\n\n`
      + `Click the link below to set a new password. This link expires in 1 hour.\n\n`
      + `${resetUrl}\n\n`
      + `If you didn't request this, you can safely ignore this email — your password will not change.`,
    html: `
      <p>You requested a password reset for your TravelBharat admin account.</p>
      <p><a href="${resetUrl}">Click here to set a new password</a> (expires in 1 hour).</p>
      <p>If you didn't request this, you can safely ignore this email — your password will not change.</p>
    `
  });
}

module.exports = { sendPasswordResetEmail };