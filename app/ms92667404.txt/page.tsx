import React from 'react';

const Page = () => {
  const jsonString = `{
    "Description": "Domain ownership verification file for Microsoft 365 - place in the website root",
    "Domain": "highendtrading.ae",
    "Id": "873765c2-982e-4267-9b70-bf87c3169cfc"
  }`;

  return (
    <div>
      <h1>Domain Ownership Verification</h1>
      <pre>{jsonString}</pre>
    </div>
  );
};

export default Page;
