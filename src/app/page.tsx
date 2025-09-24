use client

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarBase 
          logoSrc="/images/logo.svg" 
          logoAlt="MemePulse" 
          leftButtonText="Menu" 
          rightButtonText="Buy Meme" 
          onLeftButtonClick={() => {}} 
          onRightButtonClick={() => {}} 
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero 
          title="Welcome to MemePulse" 
          subtitle="Join us in this fun memecoin journey!" 
          primaryButtonText="Get Started" 
          secondaryButtonText="Learn More" 
          onPrimaryButtonClick={() => {}} 
          onSecondaryButtonClick={() => {}} 
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout 
          title="About MemePulse" 
          descriptions={["A memecoin that brings fun and community together!", "Join our vibrant community and invest today!"]} 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D 
          title="How to Buy" 
          steps={[
            { title: "Step 1", description: "Set up your wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Buy MemePulse tokens", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Join our community", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]} 
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics 
          title="Tokenomics Overview" 
          description="MemePulse is built on transparency and community support." 
          cardItems={[
            { id: 1, title: "Market Cap", description: "$10M" },
            { id: 2, title: "Total Supply", description: "1 Billion" },
            { id: 3, title: "Liquidity", description: "60% in liquidity pool" }
          ]} 
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo 
          logoSrc="/images/logo.svg" 
          logoAlt="MemePulse" 
          logoText="MemePulse" 
          className="footer-main" 
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} }
            ]},
            { title: "Resources", items: [
              { label: "Download", onClick: () => {} },
              { label: "Community", onClick: () => {} }
            ]},
            { title: "Support", items: [
              { label: "Contact", onClick: () => {} },
              { label: "FAQ", onClick: () => {} }
            ]}
          ]}
          copyrightText="© 2023 MemePulse. All rights reserved." 
          onPrivacyClick={() => {}} 
        />
      </div>
    </SiteThemeProvider>
  );
}
