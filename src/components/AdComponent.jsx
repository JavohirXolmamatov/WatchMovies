// src/components/AdComponent.jsx
import { useEffect, useRef } from "react";

const AdComponent = () => {
  const adRef = useRef(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current && window.adsbygoogle && adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        loaded.current = true;
      } catch (e) {
        console.error("Adsense error", e);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle block"
      data-ad-client="ca-pub-4925736794049445"
      data-ad-slot="9702195196"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
