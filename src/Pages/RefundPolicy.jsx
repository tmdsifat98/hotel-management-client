import React, { useEffect } from "react";

const RefundPolicy = () => {
      useEffect(()=>{
        document.title="Refund Policy"
      },[])
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 button-common rounded py-4 text-center">
        <h1 className="text-5xl font-bold font-playfair">Refund Policy</h1>
      </div>
      <div className="container mx-auto px-4 py-1">
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-700 mb-9">
            At Lodgify Hotels, we strive to provide exceptional service and a
            seamless booking experience. We understand that plans may change,
            and we aim to accommodate our guests with a fair and transparent
            refund policy. Please review the details below to understand our
            refund procedures.
          </p>

          <h3 className="text-xl font-semibold mb-3">1. Cancellation Policy</h3>
          <ul className="list-disc list-inside text-gray-700 mb-9">
            <li className="mb-2">
              <strong>Cancelation Policy:</strong> Reservations can not be
              canceled 24 hours prior to the check-in date. You are not eligible
              for any refund.
            </li>
            <li className="mb-2">
              <strong>Flexible Bookings:</strong> Reservations canceled at least
              48 hours prior to the check-in date are eligible for a full
              refund, minus a $20 administrative fee.
            </li>
            <li className="mb-2">
              <strong>Non-Refundable Bookings:</strong> Some bookings may be
              marked as non-refundable at the time of reservation. These
              bookings are not eligible for refunds or modifications unless
              otherwise stated.
            </li>
            <li className="mb-2">
              <strong>Partial Refunds:</strong> Cancellations made within 48
              hours of the check-in date may be eligible for a partial refund,
              subject to the discretion of the hotel management.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">2. Refund Processing</h3>
          <ul className="list-disc list-inside text-gray-700 mb-9">
            <li className="mb-2">
              Refunds will be processed to the original payment method within
              7-10 business days after approval.
            </li>
            <li className="mb-2">
              Any bank or credit card fees charged during the original
              transaction are non-refundable.
            </li>
            <li className="mb-2">
              Refunds for bookings made through third-party platforms are
              subject to the policies of those platforms.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">3. No-Show Policy</h3>
          <p className="text-gray-700 mb-9">
            Guests who fail to check in on the scheduled arrival date without
            prior cancellation will be considered a "no-show" and will not be
            eligible for a refund.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            4. Special Circumstances
          </h3>
          <p className="text-gray-700 mb-9">
            In the event of unforeseen circumstances, such as natural disasters,
            government restrictions, or other force majeure events, Lodgify
            Hotels may offer refunds or rebooking options at our discretion.
            Please contact our support team for assistance.
          </p>

          <h3 className="text-xl font-semibold mb-3">5. Contact Us</h3>
          <p className="text-gray-700 mb-6">
            If you have any questions about our refund policy or need assistance
            with a refund request, please reach out to our team:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              <strong>Email:</strong> support@lodgify.com
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> +880 15217-30173
            </li>
            <li className="mb-2">
              <strong>Address:</strong>{" "}
              <span>
                Lodgify, 123 Motel Area Lane, Coxs'Bazar 100, Chittagong City,
                Bangladesh
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
