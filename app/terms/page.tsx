import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoskalIcon } from "@/components/ui/moskal-icon"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-blue-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <MoskalIcon size={28} />
              <span className="font-bold text-xl text-gray-900">Moskal</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-light-lg border border-blue-100 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Moskal's services, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moskal provides AI-powered sentiment monitoring and analysis services for public conversations across
                Indonesia. Our platform offers real-time tracking, analysis, and reporting of social media sentiment and
                public discourse.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Real-time sentiment analysis and monitoring</li>
                <li>Topic tracking and narrative analysis</li>
                <li>KOL (Key Opinion Leader) identification and monitoring</li>
                <li>Automated reporting and insights generation</li>
                <li>AI-powered conversation analysis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users are responsible for maintaining the confidentiality of their account information and for all
                activities that occur under their account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete information when creating an account</li>
                <li>Use the service only for lawful purposes and in accordance with these Terms</li>
                <li>Not attempt to gain unauthorized access to our systems or data</li>
                <li>Respect the intellectual property rights of Moskal and third parties</li>
                <li>Not use the service to harm, harass, or violate the rights of others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Usage and Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moskal analyzes publicly available social media content and conversations. We are committed to
                protecting user privacy and handling data responsibly:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We only analyze publicly available content</li>
                <li>Personal data is processed in accordance with our Privacy Policy</li>
                <li>We implement appropriate security measures to protect data</li>
                <li>Users retain ownership of their account data and insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Moskal platform, including its algorithms, software, design, and content, is protected by
                intellectual property laws. Users are granted a limited, non-exclusive license to use the service for
                its intended purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to maintain high service availability, Moskal does not guarantee uninterrupted access to
                the platform. We may perform maintenance, updates, or experience technical issues that temporarily
                affect service availability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moskal provides its services "as is" and makes no warranties regarding the accuracy, completeness, or
                reliability of the information provided. Users acknowledge that sentiment analysis and social media
                monitoring involve inherent uncertainties and limitations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate this agreement at any time. Upon termination, users will lose access to the
                platform and their data may be deleted in accordance with our data retention policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moskal reserves the right to modify these Terms of Service at any time. Users will be notified of
                significant changes, and continued use of the service constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@moskal.id
                  <br />
                  <strong>Address:</strong> Jl. Bangka IX No.40D 1, RT.1/RW.10, Pela Mampang, Kec. Mampang Prpt., Kota
                  Jakarta Selatan, DKI Jakarta 12720
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
