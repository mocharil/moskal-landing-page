import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoskalIcon } from "@/components/ui/moskal-icon"

export default function PrivacyPolicy() {
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
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Moskal, we are committed to protecting your privacy and handling your personal information with care
                and transparency. This Privacy Policy explains how we collect, use, and protect your information when
                you use our AI-powered sentiment monitoring platform.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-5 w-5 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Name and email address when you create an account</li>
                <li>Company or organization information (if applicable)</li>
                <li>Account preferences and settings</li>
                <li>Billing and payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Usage Data</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Platform usage patterns and feature interactions</li>
                <li>Search queries and filter preferences</li>
                <li>Report generation and download activities</li>
                <li>Technical information such as IP address, browser type, and device information</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Public Social Media Data</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Publicly available social media posts and content</li>
                <li>Public user profiles and engagement metrics</li>
                <li>Trending topics and hashtags</li>
                <li>Public sentiment and conversation data</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="h-5 w-5 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Provision</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide real-time sentiment analysis and monitoring services</li>
                <li>Generate insights, reports, and analytics dashboards</li>
                <li>Deliver AI-powered conversation analysis and topic tracking</li>
                <li>Maintain and improve platform functionality</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Communication</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Send automated reports and alerts</li>
                <li>Provide customer support and technical assistance</li>
                <li>Share important service updates and announcements</li>
                <li>Respond to your inquiries and feedback</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Platform Improvement</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Develop new features and capabilities</li>
                <li>Improve AI algorithms and accuracy</li>
                <li>Conduct research and development activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">3. Data Protection and Security</h2>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Security Measures</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure cloud infrastructure with regular security audits</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security updates and vulnerability assessments</li>
                  <li>Limited access controls and employee training</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Retention</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only as long as necessary to provide our services and comply with
                legal obligations. Account data is typically retained for the duration of your subscription plus a
                reasonable period for backup and recovery purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information in
                the following limited circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>
                  With trusted service providers who assist in platform operations (under strict confidentiality
                  agreements)
                </li>
                <li>In connection with a business transfer or acquisition (with prior notice)</li>
                <li>To protect the rights, property, or safety of Moskal, our users, or others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate personal information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                  requirements)
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a machine-readable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain types of data processing
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at privacy@moskal.id. We will respond to your request within
                30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience on our platform:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for platform functionality and security
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how you use our platform
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings and preferences
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings, though disabling certain cookies may
                affect platform functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a global platform, we may transfer your information to countries outside of Indonesia. We ensure
                appropriate safeguards are in place to protect your information during such transfers, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Compliance with international data protection standards</li>
                <li>Use of approved transfer mechanisms and safeguards</li>
                <li>Contractual protections with international service providers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moskal is not intended for use by individuals under the age of 18. We do not knowingly collect personal
                information from children. If we become aware that we have collected information from a child, we will
                take steps to delete such information promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will notify you of significant changes by email or through our platform. Your continued
                use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Privacy Officer:</strong> privacy@moskal.id
                  <br />
                  <strong>General Inquiries:</strong> info@moskal.id
                  <br />
                  <strong>Address:</strong> Jl. Bangka IX No.40D 1, RT.1/RW.10, Pela Mampang, Kec. Mampang Prpt., Kota
                  Jakarta Selatan, DKI Jakarta 12720
                  <br />
                  <strong>Phone:</strong> +62 21 1234 5678
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
