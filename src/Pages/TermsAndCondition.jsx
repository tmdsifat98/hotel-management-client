import React, { useEffect } from "react";

const TermsAndCondition = () => {
      useEffect(()=>{
        document.title="Terms & Conditions"
      },[])
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-2 md:px-0">
        <div className="md:w-3/4 mx-auto button-common py-6 text-center">
          <h1 className="text-5xl font-bold font-playfair">Terms & Conditions</h1>
        </div>
      <div className="md:w-3/4 mx-auto py-2">
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Our Terms and Conditions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Welcome to Lodgify. These Terms and Conditions govern your use of
            our website and services. By accessing or using Lodgify, you agree
            to be bound by these terms. If you do not agree, please do not use
            our services.
          </p>

          <h3 className="text-xl font-semibold mb-3">1. Use of Our Services</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You agree to use Lodgify’s website and services only for lawful
            purposes and in accordance with these terms. You are responsible
            for:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
            <li className="mb-2">
              Providing accurate and complete information during booking or
              account creation.
            </li>
            <li className="mb-2">
              Maintaining the confidentiality of your account credentials.
            </li>
            <li className="mb-2">
              Not using our services to engage in fraudulent, harmful, or
              illegal activities.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">2. Booking and Payment</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When making a reservation through Lodgify, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
            <li className="mb-2">
              Pay all applicable fees, taxes, and charges as outlined during the
              booking process.
            </li>
            <li className="mb-2">
              Comply with our Refund Policy for cancellations or modifications.
            </li>
            <li className="mb-2">
              Provide valid payment information and authorize Lodgify to charge
              the provided payment method.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            3. Cancellations and Refunds
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Cancellations and refunds are subject to our Refund Policy,
            available on our website. Please review it carefully before making a
            reservation.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            4. Limitation of Liability
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Lodgify is not liable for any indirect, incidental, or consequential
            damages arising from your use of our services, including but not
            limited to loss of data, profits, or business opportunities. Our
            liability is limited to the amount paid for the services in
            question.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            5. Intellectual Property
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            All content on the Lodgify website, including text, images, logos,
            and software, is the property of Lodgify or its licensors and is
            protected by copyright and other intellectual property laws. You may
            not reproduce, distribute, or modify any content without prior
            written permission.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            6. Third-Party Services
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our website may integrate with or link to third-party services
            (e.g., payment processors or booking platforms). We are not
            responsible for the practices, policies, or availability of these
            third parties. Please review their terms before engaging with them.
          </p>

          <h3 className="text-xl font-semibold mb-3">7. Termination</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We reserve the right to suspend or terminate your access to
            Lodgify’s services at our discretion, including for violations of
            these Terms and Conditions or suspected fraudulent activity.
          </p>

          <h3 className="text-xl font-semibold mb-3">8. Governing Law</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            These Terms and Conditions are governed by the laws of the state of
            Hospitality City, HC, without regard to its conflict of law
            principles. Any disputes arising from these terms will be resolved
            in the courts of Hospitality City, HC.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            9. Changes to These Terms
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We may update these Terms and Conditions from time to time. Changes
            will be posted on this page with an updated effective date. Your
            continued use of Lodgify constitutes acceptance of the updated
            terms.
          </p>

          <h3 className="text-xl font-semibold mb-3">10. Contact Us</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you have any questions or concerns about these Terms and
            Conditions, please contact our team:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li className="mb-2">
              <strong>Email:</strong> support@lodgify.com
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

export default TermsAndCondition;
