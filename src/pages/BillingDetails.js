import React, { useState } from 'react';
import ResubmitButton from '../components/Button/ResubmitButton';

const BillingDetails = () => {
  const [billingStatus, setBillingStatus] = useState({
    panCardStatus: "Verified",
    bankDetailsStatus: "Pending Verification",
    previousSubmissionRejected: true,
  });

  const handleResubmit = () => {
    alert('Resubmitting details...');
  };

  return (
    <div>
      <h2>Billing Details</h2>
      <p>PAN Card Status: {billingStatus.panCardStatus}</p>
      <p>Bank Details Status: {billingStatus.bankDetailsStatus}</p>

      {(billingStatus.bankDetailsStatus === "Pending Verification" || billingStatus.panCardStatus === "Pending Verification") &&
        billingStatus.previousSubmissionRejected && (
          <ResubmitButton onClick={handleResubmit} />
        )}
    </div>
  );
};

export default BillingDetails;
