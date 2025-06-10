import React, { useEffect } from "react";

const PrivacyPolicy = () => {
      useEffect(()=>{
        document.title="Privacy Policy"
      },[])
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-2 md:px-0">
      <h2 className="button-common text-center md:w-4/5 py-5 text-5xl font-playfair font-semibold mx-auto">
        Privacy Policy
      </h2>
      <div className="md:w-4/5 mx-auto py-3">
        <div className="bg-white dark:bg-gray-600 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Privacy Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-6">
            At Lodgify, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your data when
            you use our hotel management website and services. By using Lodgify,
            you agree to the practices described in this policy.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            1. Information We Collect
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-xl mb-6">
            <li className="mb-2">
              <strong>Personal Information:</strong> Name, email address, phone
              number, payment details, and other information provided during
              booking or account creation.
            </li>
            <li className="mb-2">
              <strong>Usage Data:</strong> Information about how you interact
              with our website, such as IP address, browser type, pages visited,
              and time spent on the site.
            </li>
            <li className="mb-2">
              <strong>Cookies:</strong> We use cookies and similar technologies
              to enhance your experience and analyze website performance. You
              can manage cookie preferences through your browser settings.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            2. How We Use Your Information
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-4">
            Your information is used to:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-xl mb-6">
            <li className="mb-2">
              Process and manage your bookings and payments.
            </li>
            <li className="mb-2">
              Communicate with you about your reservations or inquiries.
            </li>
            <li className="mb-2">
              Improve our website and services through analytics.
            </li>
            <li className="mb-2">
              Comply with legal obligations and protect against fraud.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            3. Sharing Your Information
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-6">
            We do not sell or rent your personal information. We may share your
            data with:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-xl mb-6">
            <li className="mb-2">
              Service providers who assist with payment processing, booking
              management, or website analytics.
            </li>
            <li className="mb-2">
              Legal authorities when required by law or to protect our rights.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">4. Data Security</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-6">
            We implement industry-standard security measures, including
            encryption and secure servers, to protect your data. However, no
            online platform can guarantee absolute security, and you share
            information at your own risk.
          </p>

          <h3 className="text-xl font-semibold mb-3">5. Your Rights</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-6">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-xl mb-6">
            <li className="mb-2">
              Access or correct your personal information.
            </li>
            <li className="mb-2">Request deletion of your data.</li>
            <li className="mb-2">Opt out of marketing communications.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-6">
            To exercise these rights, please contact us using the details below.
          </p>

          <h3 className="text-xl font-semibold mb-3">6. Third-Party Links</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-6">
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices of these sites. Please review
            their policies before sharing information.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            7. Updates to This Policy
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-6">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date. Your continued
            use of Lodgify constitutes acceptance of these changes.
          </p>

          <h3 className="text-xl font-semibold mb-3">8. Contact Us</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl mb-6">
            If you have any questions or concerns about this Privacy Policy,
            please reach out to our team:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-xl">
            <li className="mb-2">
              <strong>Email:</strong> privacy@lodgify.com
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> +1 (800) 987-6543
            </li>
            <li className="mb-2">
              <strong>Address:</strong> Lodgify, 456 Tranquil Avenue, Suite 200,
              Hospitality City, HC 67890
            </li>
          </ul>

          <p className="text-gray-700 mt-6">
            <strong>Effective Date:</strong> June 10, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
