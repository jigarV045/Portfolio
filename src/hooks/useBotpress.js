import { useEffect } from 'react';

export default function useBotpress() {
  useEffect(() => {
    if (document.getElementById('botpress-inject')) return;

    const script1 = document.createElement('script');
    script1.id = 'botpress-inject';
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2026/03/23/15/20260323151334-Z1OMWQ3D.js';
    script2.defer = true;
    document.body.appendChild(script2);
  }, []);

  const openChat = () => {
    window.botpress?.open();
  };

  return { openChat };
}