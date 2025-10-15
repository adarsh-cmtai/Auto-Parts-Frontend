'use client'
import React from 'react';

const PrivacyPolicyContent = [
  {
    title: "1. Information We Collect",
    content: "We may collect personal information from you when you interact with our website, such as when you make a purchase, sign up for our newsletter, or contact us for support. The types of personal information we may collect include:",
    list: [
      "Name",
      "Email address",
      "Phone number",
      "Mailing address",
      "Payment information",
      "IP address",
      "Browser type and operating system",
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the information we collect for various purposes, including:",
    list: [
      "To process and fulfill your orders",
      "To communicate with you regarding your orders or inquiries",
      "To send you promotional offers and updates (with your consent)",
      "To improve our website, products, and services",
      "To protect the security and integrity of our website",
      "To comply with legal obligations",
    ]
  },
  {
    title: "3. How We Share Your Information",
    content: "We do not sell, rent, or trade your personal information to third parties. However, we may share your information with:",
    list: [
      "Service Providers: We may share your information with trusted service providers who assist us in operating our website, processing payments, or delivering products.",
      "Legal Compliance: We may disclose your information if required to do so by law or in response to valid legal requests from governmental authorities.",
      "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.",
    ]
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: "We use cookies and similar tracking technologies to enhance your browsing experience on our website. Cookies are small text files stored on your device that help us recognize you and remember your preferences. You can manage your cookie preferences through your browser settings.",
  },
  {
    title: "5. Data Security",
    content: "We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You can also opt out of receiving promotional communications from us at any time. To exercise these rights, please contact us using the information provided below.",
  },

  {
    title: "7. Third-Party Links",
    content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.",
  },
  {
    title: "8. Children's Privacy",
    content: "Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information.",
  },
  {
    title: "9. Changes to This Privacy Policy",
    content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with the updated effective date. We encourage you to review this Privacy Policy periodically.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:py-12">

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Effective Date: [24-08-2024]
          </p>
        </div>

        <div className="prose prose-lg max-w-none mx-auto text-gray-700">
          <p>
            Own Silent International Limited ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or purchase our products and services.
          </p>
          
          {PrivacyPolicyContent.map((section) => (
            <div key={section.title} className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p>{section.content}</p>
              {section.list && (
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-12 border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-3 space-y-1 not-prose">
              <p><strong>Email:</strong> <a href="mailto:help@ownsilent.com" className="text-blue-600 hover:underline">help@ownsilent.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+14244540430" className="text-blue-600 hover:underline">+1 (424) 454-0430</a></p>
              <p><strong>Address:</strong> 16192 Coastal Highway, Lewes, Delaware, USA 🇺🇸</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}