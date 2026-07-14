import { useState } from 'react';

export const useContactViewModel = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = async (text, setter) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const copyEmail = () => copyToClipboard('sumit.kr.singh14@gmail.com', setEmailCopied);
  const copyPhone = () => copyToClipboard('+919870778070', setPhoneCopied);

  return { emailCopied, phoneCopied, copyEmail, copyPhone };
};
