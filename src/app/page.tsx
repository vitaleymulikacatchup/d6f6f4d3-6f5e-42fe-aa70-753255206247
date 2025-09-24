"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

const navItems = [{ name: 'Hero', id: '#hero' }, { name: 'About', id: '#about' }, { name: 'How to Buy', id: '#how-to-buy' }, { name: 'Tokenomics', id: '#tokenomics' }, { name: 'Footer', id: '#footer' }];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay logoSrc="/images/logo.svg" logoAlt="MemePulse" navItems={navItems} buttonText="Buy Meme" onButtonClick={() => {}} />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero title="Join the MemePulse Journey!" subtitle="Get onto the memecoin train today with simple steps." primaryButtonText="Buy Now" secondaryButtonText="Learn More" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} />
      </div>
      <div id="about" data-section="about">
        <CtaAbout title="About MemePulse" descriptions={["A fun memecoin aimed at community engagement.", "Join our vibrant community and participate in something exciting!"]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D title="How to Buy MemePulse" steps={[{ title: "Step 1", description: "Set up your wallet", image: "/images/logo.svg", position: "left", isCenter: false }, { title: "Step 2", description: "Fund your wallet", image: "/images/logo.svg", position: "center", isCenter: true }, { title: "Step 3", description: "Purchase MemePulse on any exchange", image: "/images/logo.svg", position: "right", isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics title="Tokenomics Overview" description="Clear breakdown of MemePulse's economics." cardItems={[{ id: 1, title: "Total Supply", description: "1,000,000,000 tokens" }, { id: 2, title: "Liquidity", description: "80% liquidity locked" }, { id: 3, title: "Community Rewards", description: "15% of tokens reserved for community" }]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo logoSrc="/images/logo.svg" logoAlt="MemePulse" logoText="MemePulse" className="footer-class" svgClassName="footer-logo-class" />
      </div>
    </SiteThemeProvider>
  );
}