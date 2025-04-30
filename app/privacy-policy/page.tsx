import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | PowerQ",
  description: "PowerQ's Privacy Policy - Learn how we handle your data and protect your privacy.",
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/70 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-foreground/70 mb-4">
              PowerQ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-foreground/70 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-foreground/70 mb-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Business information</li>
              <li>Energy usage data</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/70 mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-foreground/70 mb-4">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Process transactions</li>
              <li>Send periodic emails and updates</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-foreground/70 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-foreground/70 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-foreground/70 mb-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-foreground/70 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-foreground/70">
            Email: powerQ.ke@gmail.com<br />
            Phone: +254 717052939<br />
            Address: Nairobi, Kenya
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 