import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Home } from './pages/Home';
import { StartingPoint } from './pages/StartingPoint';
import { LayeredHumanPatterns } from './pages/LayeredHumanPatterns';
import { StructuredTherapeuticThinking } from './pages/StructuredTherapeuticThinking';
import { PractitionerJourneys } from './pages/PractitionerJourneys';
import { Internship } from './pages/Internship';
import { CHC } from './pages/CHC';
import { CHP } from './pages/CHP';
import { Cohorts } from './pages/Cohorts';
import { About } from './pages/About';
import { SpecializationHub } from './pages/SpecializationHub';
import { RelationshipSpecialization } from './pages/RelationshipSpecialization';
import { SchoolCounsellingSpecialization } from './pages/SchoolCounsellingSpecialization';
import { FAQ } from './pages/FAQ';
import { Consultation } from './pages/Consultation';
import { Workshops } from './pages/Workshops';
import { Webinars } from './pages/Webinars';
import { Level1 } from './pages/Level1';
import { Level2 } from './pages/Level2';
import { Level3 } from './pages/Level3';
import { Level4 } from './pages/Level4';
import { ProspectusSuccessCHC } from './pages/ProspectusSuccessCHC';
import { ProspectusSuccessCHP } from './pages/ProspectusSuccessCHP';
import { ProspectusSuccessRelationship } from './pages/ProspectusSuccessRelationship';
import { ProspectusSuccessSchool } from './pages/ProspectusSuccessSchool';
import { Resources } from './pages/Resources';
import { PractitionerToolkit } from './pages/PractitionerToolkit';
import { BrandManual } from './pages/BrandManual';
import { Research } from './pages/Research';
import { BlogArchive } from './pages/BlogArchive';
import { RecommendedBooks } from './pages/RecommendedBooks';
import { AffiliateProgram } from './pages/AffiliateProgram';
import { BlogPost } from './pages/BlogPost';
import { ProgramsPreview } from './pages/ProgramsPreview';
import { CHCPAnnouncement } from './pages/CHCPAnnouncement';
import { AiProgramAdvisor } from './components/AiProgramAdvisor';

// A simple mock router without any dependencies to keep it purely HTML/CSS blueprint focused
export default function App() {
const validRoutes = [
    '#home', '#start', '#ecosystem', '#programs', '#layered-patterns', '#structured-thinking', 
    '#journeys', '#internship', '#chc', '#chp', '#cohorts', '#about', '#specialization-hub', 
    '#relationship-specialization', '#school-counselling-specialization', '#faq', '#consultation', 
    '#workshops', '#webinars', '#level-1', '#level-2', '#level-3', '#level-4',
    '#prospectus-success-chc', '#prospectus-success-chp', '#prospectus-success-relationship', '#prospectus-success-school',
    '#blogs-and-resources', '#blog', '#blog-post', '#recommended-books', '#affiliation-program', '#brand-manual', '#practitioner-toolkit', '#terms-and-conditions', '#privacy-policy', '#research', '#chcp-announcement'
  ];

  const getValidRoute = (hash: string) => {
    if (!hash) return '#home';
    let cleanHash = hash.toLowerCase();
    
    if (cleanHash.startsWith('#/')) {
        cleanHash = '#' + cleanHash.slice(2);
    }
    
    if (validRoutes.includes(cleanHash)) return cleanHash;
    return null; // Signals it's not a page route
  };

  const [route, setRoute] = useState(getValidRoute(window.location.hash) || '#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      const validRoute = getValidRoute(newHash);
      if (validRoute) {
        setRoute(validRoute);      
      }
      setIsMobileMenuOpen(false); // Close mobile menu on route change
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [route]);

  const isActive = (path: string) => {
    if (path === '#programs') {
      return route === '#programs' || route === '#ecosystem';
    }
    return route === path;
  };

  const navLinkClass = (path: string) => 
    `transition-colors hover:text-brand-deep-teal font-medium ${isActive(path) ? 'text-brand-deep-teal' : 'text-brand-primary-text'}`;

  const mobileNavLinkClass = (path: string) => 
    `block py-3 border-b border-brand-soft-neutral/30 font-medium ${isActive(path) ? 'text-brand-deep-teal' : 'text-brand-primary-text'}`;

  return (
    <div className="min-h-screen flex flex-col font-body bg-brand-warm-white text-brand-primary-text">
      {/* Global Notification Banner (Temporary) */}
      <div className="bg-brand-structural-navy text-white text-center py-2.5 px-4 text-xs sm:text-sm relative z-[60]">
          <span className="inline-block bg-brand-accent-orange text-brand-structural-navy font-bold text-xs sm:text-xs uppercase tracking-widest px-2 py-0.5 rounded-sm mr-2 mb-1 sm:mb-0 align-middle">Update</span>
          <span className="opacity-90 font-medium inline-block align-middle mt-0.5 sm:mt-0">The ICHARS ecosystem has expanded to support non-clinical practitioners.</span>
          <a href="#chcp-announcement" className="ml-2 font-semibold text-brand-soft-teal hover:text-white underline decoration-brand-soft-teal/30 hover:decoration-white transition-all inline-block mt-1 sm:mt-0">
            Read Announcement &rarr;
          </a>
      </div>

      {/* Global Navigation */}
      <header className="sticky top-0 z-50 bg-brand-warm-white/95 backdrop-blur border-b border-brand-soft-neutral shadow-sm">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 z-50">
            <img 
              src="https://instituteofclinicalhypnosis.com/wp-content/uploads/2023/07/ICHARS-Logo-1.png" 
              alt="ICHARS" 
              className="h-10 w-auto"
              onError={(e) => {
                // If the real logo image fails to load, fallback to text
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-xl font-heading font-bold text-brand-deep-teal tracking-tight">ICHARS</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex gap-5 items-center text-sm font-medium">
            <a href="#about" className={navLinkClass('#about')}>About</a>
            
            <div className="relative group p-2 cursor-pointer">
              <span className="flex items-center gap-1 hover:text-brand-deep-teal transition-colors">
                Pathways <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
              </span>
              <div className="absolute top-full left-0 mt-0 bg-white border border-brand-soft-neutral shadow-lg rounded-xl p-3 flex flex-col gap-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                <div className="px-4 py-1 text-xs font-bold text-brand-soft-teal uppercase tracking-widest mt-1">Core Programs</div>
                <a href="#chc" className={`px-4 py-2 hover:bg-brand-soft-teal/10 rounded-lg ${isActive('#chc') ? 'text-brand-deep-teal bg-brand-soft-teal/5' : ''}`}>Coaching (CHC)</a>
                <a href="#chp" className={`px-4 py-2 hover:bg-brand-soft-teal/10 rounded-lg ${isActive('#chp') ? 'text-brand-deep-teal bg-brand-soft-teal/5' : ''}`}>Psychotherapy (CHP)</a>
                <a href="#internship" className={`px-4 py-2 hover:bg-brand-soft-teal/10 rounded-lg ${isActive('#internship') ? 'text-brand-deep-teal bg-brand-soft-teal/5' : ''}`}>Internship</a>
                <a href="#specialization-hub" className={`px-4 py-2 hover:bg-brand-soft-teal/10 rounded-lg ${isActive('#specialization-hub') ? 'text-brand-deep-teal bg-brand-soft-teal/5' : ''}`}>Specializations</a>
                <div className="px-4 py-1 text-xs font-bold text-brand-soft-teal uppercase tracking-widest mt-2 border-t border-brand-soft-neutral/30 pt-2">Formats</div>
                <a href="#programs" className={`px-4 py-2 hover:bg-brand-soft-teal/10 rounded-lg ${isActive('#programs') ? 'text-brand-deep-teal bg-brand-soft-teal/5' : ''}`}>Programs & Ecosystem</a>
                <a href="#cohorts" className={`px-4 py-2 hover:bg-brand-soft-teal/10 rounded-lg ${isActive('#cohorts') ? 'text-brand-deep-teal bg-brand-soft-teal/5' : ''}`}>Guided Cohorts</a>
              </div>
            </div>

            <div className="relative group p-2 cursor-pointer">
              <span className="flex items-center gap-1 hover:text-brand-deep-teal transition-colors">
                Events <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
              </span>
              <div className="absolute top-full left-0 mt-0 bg-white border border-brand-soft-neutral shadow-lg rounded-xl p-3 flex flex-col gap-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                <a href="#workshops" className={`px-4 py-2 hover:bg-brand-soft-teal/10 rounded-lg ${isActive('#workshops') ? 'text-brand-deep-teal bg-brand-soft-teal/5' : ''}`}>Workshops</a>
                <a href="#webinars" className={`px-4 py-2 hover:bg-brand-soft-teal/10 rounded-lg ${isActive('#webinars') ? 'text-brand-deep-teal bg-brand-soft-teal/5' : ''}`}>Webinars</a>
              </div>
            </div>

            <a href="#consultation" className={navLinkClass('#consultation')}>Consultation</a>
            
            <a href="#start" className="ml-2 bg-brand-deep-teal text-white px-5 py-2.5 rounded-lg hover:bg-brand-structural-depth transition-colors shadow-sm">
              Start Here
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-brand-structural-navy hover:bg-brand-soft-neutral/30 rounded-lg transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-soft-neutral shadow-xl overflow-y-auto max-h-[calc(100vh-5rem)]">
            <nav className="flex flex-col p-6 text-base">
              <a href="#about" className={mobileNavLinkClass('#about')}>About ICHARS</a>
              
              <div className="py-3 border-b border-brand-soft-neutral/30">
                <div className="font-bold text-brand-soft-teal text-xs uppercase tracking-wider mb-2">Pathways</div>
                <div className="pl-4 flex flex-col gap-3">
                  <div className="text-xs font-bold text-brand-secondary-text uppercase tracking-widest mt-1">Core Programs</div>
                  <a href="#chc" className={mobileNavLinkClass('#chc').replace('border-b', 'border-none py-1')}>Coaching (CHC)</a>
                  <a href="#chp" className={mobileNavLinkClass('#chp').replace('border-b', 'border-none py-1')}>Psychotherapy (CHP)</a>
                  <a href="#internship" className={mobileNavLinkClass('#internship').replace('border-b', 'border-none py-1')}>Internship</a>
                  <a href="#specialization-hub" className={mobileNavLinkClass('#specialization-hub').replace('border-b', 'border-none py-1')}>Specializations</a>
                  <div className="text-xs font-bold text-brand-secondary-text uppercase tracking-widest mt-2 border-t border-brand-soft-neutral/30 pt-2">Formats</div>
                  <a href="#programs" className={mobileNavLinkClass('#programs').replace('border-b', 'border-none py-1')}>Programs & Ecosystem</a>
                  <a href="#cohorts" className={mobileNavLinkClass('#cohorts').replace('border-b', 'border-none py-1')}>Guided Cohorts</a>
                </div>
              </div>

              <div className="py-3 border-b border-brand-soft-neutral/30">
                <div className="font-bold text-brand-soft-teal text-xs uppercase tracking-wider mb-2">Events</div>
                <div className="pl-4 flex flex-col gap-3">
                  <a href="#workshops" className={mobileNavLinkClass('#workshops').replace('border-b', 'border-none py-1')}>Workshops</a>
                  <a href="#webinars" className={mobileNavLinkClass('#webinars').replace('border-b', 'border-none py-1')}>Webinars</a>
                </div>
              </div>

              <a href="#faq" className={mobileNavLinkClass('#faq')}>FAQ</a>
              <a href="#consultation" className={mobileNavLinkClass('#consultation')}>Consultation</a>
              
              <div className="pt-6">
                <a href="#start" className="block text-center bg-brand-deep-teal text-white w-full px-5 py-3 rounded-lg hover:bg-brand-structural-depth transition-colors font-bold shadow-md">
                  Start Here
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {route === '#home' && <Home />}
        {route === '#start' && <StartingPoint />}
        {route === '#ecosystem' && <ProgramsPreview />}
        {route === '#programs' && <ProgramsPreview />}
        {route === '#layered-patterns' && <LayeredHumanPatterns />}
        {route === '#structured-thinking' && <StructuredTherapeuticThinking />}
        {route === '#journeys' && <PractitionerJourneys />}
        {route === '#internship' && <Internship />}
        {route === '#chc' && <CHC />}
        {route === '#chp' && <CHP />}
        {route === '#cohorts' && <Cohorts />}
        {route === '#about' && <About />}
        {route === '#specialization-hub' && <SpecializationHub />}
        {route === '#relationship-specialization' && <RelationshipSpecialization />}
        {route === '#school-counselling-specialization' && <SchoolCounsellingSpecialization />}
        {route === '#faq' && <FAQ />}
        {route === '#consultation' && <Consultation />}
        {route === '#workshops' && <Workshops />}
        {route === '#webinars' && <Webinars />}
        {route === '#level-1' && <Level1 />}
        {route === '#level-2' && <Level2 />}
        {route === '#level-3' && <Level3 />}
        {route === '#level-4' && <Level4 />}
        {route === '#prospectus-success-chc' && <ProspectusSuccessCHC />}
        {route === '#prospectus-success-chp' && <ProspectusSuccessCHP />}
        {route === '#prospectus-success-relationship' && <ProspectusSuccessRelationship />}
        {route === '#prospectus-success-school' && <ProspectusSuccessSchool />}
        {route === '#blogs-and-resources' && <Resources />}
        {route === '#blog' && <BlogArchive />}
        {route === '#blog-post' && <BlogPost />}
        {route === '#recommended-books' && <RecommendedBooks />}
        {route === '#affiliation-program' && <AffiliateProgram />}
        {route === '#practitioner-toolkit' && <PractitionerToolkit />}
        {route === '#brand-manual' && <BrandManual />}
        {route === '#research' && <Research />}
        {route === '#chcp-announcement' && <CHCPAnnouncement />}
        {route !== '#home' && route !== '#start' && route !== '#ecosystem' && route !== '#about' && route !== '#chc' && route !== '#chp' && route !== '#programs' && route !== '#layered-patterns' && route !== '#structured-thinking' && route !== '#journeys' && route !== '#internship' && route !== '#cohorts' && route !== '#specialization-hub' && route !== '#relationship-specialization' && route !== '#school-counselling-specialization' && route !== '#faq' && route !== '#consultation' && route !== '#workshops' && route !== '#webinars' && route !== '#level-1' && route !== '#level-2' && route !== '#level-3' && route !== '#level-4' && route !== '#prospectus-success-chc' && route !== '#prospectus-success-chp' && route !== '#prospectus-success-relationship' && route !== '#prospectus-success-school' && route !== '#blogs-and-resources' && route !== '#blog' && route !== '#blog-post' && route !== '#recommended-books' && route !== '#practitioner-toolkit' && route !== '#brand-manual' && route !== '#research' && route !== '#affiliation-program' && route !== '#chcp-announcement' && (
          <div className="py-32 text-center text-brand-secondary-text">
            <h2 className="text-2xl font-medium mb-4">Page under construction</h2>
            <p>This path ({route}) is a placeholder for demonstration.</p>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <footer className="bg-brand-structural-depth text-white py-16 border-t font-body">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 text-sm opacity-90 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-heading text-white font-bold tracking-tight mb-4">ICHARS</div>
            <p className="max-w-sm text-white/70 leading-relaxed mb-6">
              A psychologically sophisticated practitioner-development ecosystem designed for deep, integrative understanding.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-white/50 mb-6">
              <a href="https://www.facebook.com/icharsonline/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <a href="https://www.instagram.com/icharsonline/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/school/icharsonline/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.youtube.com/icharsonline/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
              <a href="https://www.twitter.com/icharsonline/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Ecosystem & Philosophy</div>
            <div className="flex flex-col gap-3">
              <a href="#about" className="hover:text-white text-white/70 transition-colors">About ICHARS</a>
              <a href="#programs" className="hover:text-white text-white/70 transition-colors">Programs & Ecosystem</a>
              <a href="#layered-patterns" className="hover:text-white text-white/70 transition-colors">Layered Patterns</a>
              <a href="#structured-thinking" className="hover:text-white text-white/70 transition-colors">Structured Thinking</a>
              <a href="#journeys" className="hover:text-white text-white/70 transition-colors">Practitioner Journeys</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Pathways</div>
            <div className="flex flex-col gap-3">
              <a href="#internship" className="hover:text-white text-white/70 transition-colors">Internship</a>
              <a href="#chc" className="hover:text-white text-white/70 transition-colors">Coaching (CHC)</a>
              <a href="#chp" className="hover:text-white text-white/70 transition-colors">Psychotherapy (CHP)</a>
              <a href="#specialization-hub" className="hover:text-white text-white/70 transition-colors">Specializations</a>
              <a href="#programs" className="hover:text-white text-white/70 transition-colors">Programs & Ecosystem</a>
              <a href="#cohorts" className="hover:text-white text-white/70 transition-colors">Guided Cohorts</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Resources & Support</div>
            <div className="flex flex-col gap-3">
              <a href="#blogs-and-resources" className="hover:text-white text-white/70 transition-colors">Resources Hub</a>
              <a href="#blog" className="hover:text-white text-white/70 transition-colors">Blog</a>
              <a href="#recommended-books" className="hover:text-white text-white/70 transition-colors">Recommended Books</a>
              <a href="#research" className="hover:text-white text-white/70 transition-colors">Research Repository</a>
              <a href="#practitioner-toolkit" className="hover:text-white text-white/70 transition-colors">Practitioner Toolkit</a>
              <a href="#brand-manual" className="hover:text-white text-white/70 transition-colors">Brand Manual</a>
              <a href="#affiliation-program" className="hover:text-white text-white/70 transition-colors">Affiliate Program</a>
            </div>
          </div>
          
          <div>
            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Events & Contact</div>
            <div className="flex flex-col gap-3">
              <a href="#webinars" className="hover:text-white text-white/70 transition-colors">Free Webinars</a>
              <a href="#workshops" className="hover:text-white text-white/70 transition-colors">Workshops Schedule</a>
              <a href="#faq" className="hover:text-white text-white/70 transition-colors">FAQ</a>
              <a href="#consultation" className="hover:text-white text-white/70 transition-colors">Consultation</a>
              <a href="tel:+918080208473" className="hover:text-white text-white/70 transition-colors">+91-808-020-8473</a>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} ICHARS. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="#privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
      <AiProgramAdvisor />
    </div>
  );
}
