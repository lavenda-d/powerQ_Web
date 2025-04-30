import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | PowerQ",
  description: "PowerQ's Terms of Service - Learn about our terms and conditions for using our services.",
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/70 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/70 mb-4">
              By accessing and using PowerQ's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-foreground/70 mb-4">
              PowerQ provides AI-driven power quality monitoring and predictive analytics services. Our platform helps businesses monitor and optimize their energy usage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-foreground/70 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-foreground/70 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Use the service in compliance with all applicable laws</li>
              <li>Not attempt to interfere with or disrupt the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="text-foreground/70 mb-4">
              Our services are provided on a subscription basis. Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-foreground/70 mb-4">
              <li>Monthly or annual billing cycles</li>
              <li>Automatic renewal unless cancelled</li>
              <li>Refund policy as specified in your subscription plan</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-foreground/70 mb-4">
              All content, features, and functionality of our service are owned by PowerQ and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-foreground/70 mb-4">
              PowerQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-foreground/70 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes through our website or via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-foreground/70 mb-4">
              For any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-foreground/70">
              Email: info@powerq.co.ke<br />
              Phone: +254 700 000 000<br />
              Address: Nairobi, Kenya
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 