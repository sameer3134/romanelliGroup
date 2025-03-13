import React from "react";

const LoadingScreen = ({ progress }) => {
  const logoUrl =
    "https://media-hosting.imagekit.io//432a35325f694451/logo.png?Expires=1834842381&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bUTNXPHieLXZkZ1TVU8c7c0Sp1tM0ss5CmY5i799UOCbkGbACfxakQJSUnvyWWoNnA7ctpJyYauHziza2ox1Mf8WYsagLmr1EGDozBz6RRgT2siO2Fb8UDiUL0xUAdWHOwbWGkx-w6frrC8jyVW0oL6AO8WTmOc~yoK4K3Fkq3RXAW8FxwW4RbBJApNfppfroRExs3FahGxzNYtY6dqHm8P~X6gE~kK4P1Kfa2375FdAQlXoR347dhtKEc6qKUgnsvrz7c76hraZ0Fi3C1Kxlg3G2vqUzvAOWc2G1LKmcND-2X31I4gUVsM~jSchIssyj86h-dal5Ve3fFhwGBE2Ww__";

  return (
    <div className="fixed inset-0 bg-red-600 flex flex-col items-center justify-center text-white z-50">
      {/* Logo at the center */}
      <img src={logoUrl} alt="logo" className="w-40 h-40 object-contain mb-6"  loading="lazy" />

      {/* Progress Percentage above taskbar */}
      <div className="absolute bottom-20 left-10 w-full h-4">
      <p className="text-2xl xl:text-4xl font-semibold text-left">{progress}%</p>
</div>
      {/* Taskbar-style Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-8 ">
        <div
          className="bg-white h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
