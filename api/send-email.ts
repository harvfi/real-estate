import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      accredited,
      journey,
      opportunity,
      timeline,
      hearAbout
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send notification email to site owner
    const { data, error } = await resend.emails.send({
      from: 'Blackstar Group <onboarding@resend.dev>',
      to: ['chehayden34@gmail.com'], // Temporary: Change to blackstarholdings1@gmail.com after verifying domain in Resend
      subject: `New Investor Network Submission - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #002366; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">🌟 New Investor Network Submission</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f5f5f5;">
            <h2 style="color: #002366; margin-top: 0;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #002366;">${email}</a></td>
              </tr>
            </table>

            <h2 style="color: #002366; margin-top: 30px;">Investment Profile</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Accredited Investor:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${accredited || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Real Estate Journey:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${journey || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Opportunity Interest:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${opportunity || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Investment Timeline:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${timeline || 'Not specified'}</td>
              </tr>
              ${hearAbout ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>How They Heard:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${hearAbout}</td>
              </tr>
              ` : ''}
            </table>

            <div style="margin-top: 30px; padding: 15px; background-color: white; border-left: 4px solid #002366;">
              <p style="margin: 0; color: #666;">
                <strong>Next Steps:</strong> Follow up with this lead within 24 hours for best results.
              </p>
            </div>
          </div>

          <div style="background-color: #002366; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">The Blackstar Group Investor Network</p>
            <p style="margin: 5px 0 0 0;">Automated notification from your website</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'The Blackstar Group <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to The Blackstar Group Investor Network',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #002366; color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🌟 Welcome to the Network!</h1>
          </div>
          
          <div style="padding: 40px 30px; background-color: #f5f5f5;">
            <p style="font-size: 16px; color: #333; margin-top: 0;">Hi ${firstName},</p>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Thank you for joining The Blackstar Group Investor Network! We're excited to have you as part of our community.
            </p>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h2 style="color: #002366; margin-top: 0; font-size: 20px;">What's Next?</h2>
              <ul style="color: #666; line-height: 1.8; padding-left: 20px;">
                <li>You'll receive our newsletter, <strong>Multifamily Made Simple</strong>, with market insights and investment strategies</li>
                <li>Get early access to exclusive investment opportunities</li>
                <li>Receive deal breakdowns and analysis from our team</li>
                <li>A member of our team will reach out to you shortly</li>
              </ul>
            </div>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              In the meantime, feel free to explore our resources or schedule a call with our team to discuss your investment goals.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://calendly.com/blackstarholdings1" 
                 style="display: inline-block; background-color: #002366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Schedule an Intro Call
              </a>
            </div>

            <p style="font-size: 14px; color: #666; margin-bottom: 0;">
              Best regards,<br>
              <strong style="color: #002366;">The Blackstar Group Team</strong>
            </p>
          </div>

          <div style="background-color: #002366; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">The Blackstar Group</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Clarity in Multifamily Investing</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully',
      emailId: data?.id
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message
    });
  }
}
