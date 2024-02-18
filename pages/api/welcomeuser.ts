// Import required dependencies
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email } = req.body

      // Load environment variables (you may need to set these in your environment)
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PW,
        },
      })

      // Compose welcome email
      const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email, // Send the welcome email to the new user's email address
        subject: 'Welcome to Our Platform',
        html: `
          <html>
          <body>
            <h1>Welcome to NorthExpress!</h1>
            <p className="pt-1 pb-2 text-lg">Dear ${firstName} ${lastName},</p>
            <p className="pt-1 pb-2 text-lg">Thank you for joining NorthExpress, your one-stop destination for finding the right bookings and talented taskers. We're excited to have you on board and want to express our gratitude for choosing <Link href="https://www.northexpresskenya.com">NorthExpress</a>.</p>
            
            <!-- For AssignmentPosters -->
            <h2>For AssignmentPosters:</h2>
            <ul>
              <li><Link href="https://www.northexpresskenya.com/post-booking">Post your bookings for free</a> and connect with skilled taskers.</li>
              <li>Ready to get started? <Link href="https://www.northexpresskenya.com/signup">Create your account</a>, <Link href="https://www.northexpresskenya.com/browse-bookings">browse bookings</a>, and unlock a world of opportunities on NorthExpress.</li>
              <li>Find the perfect candidates to get your work done efficiently.</li>
              <li>Enjoy the flexibility to <Link href="https://www.northexpresskenya.com/how-it-works">manage projects your way</a>.</li>
              <li>Pay as you use with no subscription or credit fees.</li>
            </ul>
            
            <!-- For Taskers -->
            <h2>For Taskers:</h2>
            <ul>
              <li><Link href="https://www.northexpresskenya.com/become-a-tutor">Earn money</a> doing what you're good at.</li>
              <li><Link href="https://www.northexpresskenya.com/become-a-tutor">Expand your clientele</a> and grow your business.</li>
              <li>Access thousands of job opportunities with no hidden costs.</li>
              <li>Enjoy the freedom to work on your schedule.</li>
            </ul>
            
            <!-- Why Choose NorthExpress -->
            <h2>Why Choose NorthExpress:</h2>
            <ul>
              <li>We prioritize your <Link href="https://www.northexpresskenya.com/how-it-works">privacy</a> and <Link href="https://www.northexpresskenya.com/how-it-works">data security</a>.</li>
              <li>Benefit from a diverse pool of professionals with <Link href="https://www.northexpresskenya.com/how-it-works">verified credentials</a>.</li>
              <li>Our platform is <Link href="https://www.northexpresskenya.com/how-it-works">safe and secure</a>, backed by around-the-clock support.</li>
            </ul>
            
            <!-- Additional Links -->
            <h2>Additional Links:</h2>
            <ul>
              <li>Explore our <Link href="https://www.northexpresskenya.com/blog">blog</a> for valuable insights and tips on working online.</li>
              <li>Be sure to check out our <Link href="https://www.northexpresskenya.com/faq">frequently asked questions</a> for more information.</li>
            </ul>
            
            <p className="pt-1 pb-2 text-lg">Ready to get started? <Link href="https://www.northexpresskenya.com/signup">Create your account</a>, <Link href="https://www.northexpresskenya.com/browse-bookings">browse bookings</a>, and unlock a world of opportunities on NorthExpress.</p>
            <p className="pt-1 pb-2 text-lg">Thank you again for choosing NorthExpress. We look forward to helping you achieve your goals and find the best solutions for your bookings.</p>
            
            <p className="pt-1 pb-2 text-lg">Best regards,<br>The NorthExpress Team</p>
          </body>
          </html>
        `,
      }

      // Send the welcome email
      await transporter.sendMail(mailOptions)

      res.status(200).json({ message: 'Welcome email sent successfully!' })
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ error: 'An error occurred while sending the welcome email.' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' })
  }
}