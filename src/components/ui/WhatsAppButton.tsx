'use client';

import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '918300149040';
  const message = encodeURIComponent('Hello! I would like to know more about AXAL.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-fab"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        width="32"
        height="32"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.606c-.394 1.112-1.946 2.034-3.19 2.304-.852.182-1.964.326-5.71-1.228-4.796-1.988-7.878-6.856-8.118-7.174-.228-.318-1.924-2.562-1.924-4.888 0-2.326 1.218-3.468 1.65-3.942.394-.432.924-.608 1.234-.608.148 0 .282.008.402.014.432.018.648.044.932.722.354.85 1.218 2.928 1.324 3.14.108.214.214.498.068.794-.136.302-.254.49-.498.756-.242.268-.498.474-.74.766-.216.254-.462.526-.196.982.268.456 1.186 1.952 2.546 3.164 1.748 1.556 3.22 2.038 3.676 2.264.456.226.722.19.988-.116.268-.308 1.148-1.336 1.454-1.796.302-.456.608-.382.998-.228.396.15 2.5 1.18 2.928 1.394.432.214.716.324.822.498.108.178.108 1.018-.286 2.126z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
