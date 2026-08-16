import { useState, type FormEvent } from 'react';
import {
  ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown, ChevronRight,
  Facebook, Filter, Globe2, Instagram, Leaf, Linkedin, MapPin, Menu,
  MessageCircle, Play, Search, ShieldCheck, Sprout, Tractor, TrendingUp,
  Users, X, Youtube,
} from 'lucide-react';

const logo = '/assets/images/ChatGPT_Image_Jul_23,_2026,_02_45_06_PM_(1).png';
const heroImage = 'https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=1800';
const farmImage = 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200';
const produceImage = 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1200';

type IconType = typeof Tractor;

const features: { icon: IconType; title: string; text: string; tone: string }[] = [
  { icon: Tractor, title: 'Rent Equipment', text: 'Turn equipment sitting idle into an additional source of income.', tone: 'gold' },
  { icon: Search, title: 'Find Equipment', text: 'Find tractors, implements and agricultural machinery when you need them.', tone: 'green' },
  { icon: Leaf, title: 'Sell Produce Direct', text: 'Connect directly with consumers and buyers who value what you grow.', tone: 'sage' },
  { icon: Sprout, title: 'Find Agricultural Services', text: 'Discover nearby agricultural professionals and service providers.', tone: 'blue' },
  { icon: TrendingUp, title: 'Farm Experiences', text: 'Host U-Pick events, farm tours, workshops and more.', tone: 'coral' },
  { icon: Users, title: 'Grow Your Business', text: 'Create a professional profile and reach new customers.', tone: 'gold' },
];

const services = ['Drone Spraying', 'Soil Testing', 'Crop Monitoring', 'Harvesting', 'Transportation', 'Equipment Repair', 'Farm Consulting'];

const agritourism = ['U-Pick', 'Farm Tours', 'Workshops', 'Harvest Festivals', 'Educational Visits', 'Farm Markets'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(true);

  if (window.location.pathname !== '/') {
    return <LegalPage path={window.location.pathname} />;
  }

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Croprr home">
            <img src={logo} alt="Croprr" />
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <button onClick={() => scrollTo('features')}>Features</button>
            <button onClick={() => scrollTo('farmers')}>Farmers</button>
            <button onClick={() => scrollTo('marketplace')}>Marketplace</button>
            <button onClick={() => scrollTo('map')}>Map</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
            <div className="mobile-nav-actions">
              <button className="button button-gold small" onClick={() => scrollTo('download')}>Download app</button>
            </div>
          </nav>
          <div className="nav-actions">
            <button className="button button-gold small" onClick={() => scrollTo('download')}>Download app</button>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="hero-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(10, 37, 25, .98) 0%, rgba(10, 37, 25, .78) 38%, rgba(10, 37, 25, .1) 78%), url(${heroImage})` }} />
          <div className="container hero-content">
            <div className="eyebrow light"><span /> The operating system for agriculture</div>
            <h1>Our Culture, Agriculture.<br /><em>One Marketplace.</em></h1>
            <p>Connect with farmers, equipment owners, agricultural businesses, service providers and buyers — all in one place.</p>
            <div className="hero-actions">
              <button className="button button-gold" onClick={() => scrollTo('download')}>Download Croprr <ArrowRight size={17} /></button>
              <button className="button button-ghost" onClick={() => scrollTo('features')}><Play size={16} fill="currentColor" /> Explore how it works</button>
            </div>
            <div className="hero-note"><ShieldCheck size={16} /> Built for the people who grow, move and shape food.</div>
          </div>
          <div className="hero-card">
            <div className="pulse-dot" /><span>Live marketplace</span>
            <strong>Explore agriculture around you</strong>
            <div className="mini-pins">
              <span className="pin pin-one"><Tractor size={12} /></span>
              <span className="pin pin-two"><Leaf size={12} /></span>
              <span className="pin pin-three"><TrendingUp size={12} /></span>
            </div>
            <div className="hero-card-footer"><MapPin size={14} /> 2,480+ local listings <ArrowRight size={14} /></div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="trust-strip"><div className="container trust-inner">
          <span>BUILT FOR EVERY CORNER OF AGRICULTURE</span>
          <div><Sprout /><b>Grow</b></div>
          <div><Tractor /><b>Move</b></div>
          <div><Users /><b>Connect</b></div>
          <div><Globe2 /><b>Go further</b></div>
        </div></section>

        {/* Features */}
        <section className="section section-white" id="features">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow"><span /> One platform, many possibilities</div>
              <h2>One Marketplace.<br /><em>Multiple Ways to Grow.</em></h2>
              <p>Whatever your role in agriculture, Croprr helps you turn opportunity into action.</p>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, text, tone }) => (
                <div className={`feature-card ${tone}`} key={title}>
                  <div className="feature-icon"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="card-link">Learn more <ArrowUpRight /></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farmers section */}
        <section className="split-section forest-section" id="farmers">
          <div className="container split-grid">
            <div className="split-copy">
              <div className="eyebrow light"><span /> For every kind of grower</div>
              <h2>More Value<br /><em>From Your Farm.</em></h2>
              <p>Large farms often own equipment that sits unused for significant periods of the year. Croprr helps equipment owners create new opportunities, while small farmers discover what they need nearby.</p>
              <div className="flow">
                <div><strong>01</strong><span>Large farm</span></div>
                <i />
                <div><strong>02</strong><span>Unused equipment</span></div>
                <i />
                <div className="flow-highlight"><strong>03</strong><span>Croprr</span></div>
                <i />
                <div><strong>04</strong><span>Nearby farmer</span></div>
              </div>
              <button className="button button-gold" onClick={() => scrollTo('download')}>Download Croprr <ArrowRight size={17} /></button>
            </div>
            <div className="image-stack">
              <img src={farmImage} alt="Modern farm field with tractor" loading="lazy" />
              <div className="floating-stat">
                <span className="stat-icon"><TrendingUp size={18} /></span>
                <div><small>New opportunity</small><strong>Make idle assets work harder.</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* Produce marketplace */}
        <section className="split-section section-white produce-section" id="marketplace">
          <div className="container split-grid reverse">
            <div className="image-stack">
              <img src={produceImage} alt="Fresh produce at a market" loading="lazy" />
              <div className="photo-label"><Leaf size={16} /> From farm to table</div>
            </div>
            <div className="split-copy">
              <div className="eyebrow"><span /> Direct connections</div>
              <h2>From Farm<br /><em>To Consumer.</em></h2>
              <p>Farmers can list their produce and connect directly with consumers and buyers. Consumers can discover fresh agricultural products directly from farms.</p>
              <div className="comparison">
                <div><small>Traditional</small><b>Farmer</b><span>Multiple intermediaries</span><b>Consumer</b></div>
                <div className="comparison-croprr"><small>With Croprr</small><b>Farmer</b><span>Croprr</span><b>Consumer</b></div>
              </div>
              <button className="text-button" onClick={() => scrollTo('download')}>Discover local produce <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>

        {/* Agritourism */}
        <section className="section section-white">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow"><span /> Turn your farm into an experience</div>
              <h2>Give families a reason<br /><em>to visit the farm.</em></h2>
              <p>Host U-Pick events, farm tours, workshops and other experiences. Help people learn about agriculture and experience where food comes from.</p>
            </div>
            <div className="tag-grid">
              {agritourism.map(item => (
                <div className="tag-card" key={item}><span className="tag-dot" />{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="split-section forest-section">
          <div className="container split-grid">
            <div className="split-copy">
              <div className="eyebrow light"><span /> The right help, nearby</div>
              <h2>Find the Right<br /><em>Agricultural Service.</em></h2>
              <p>Discover nearby agricultural professionals and service providers for every part of your operation.</p>
              <button className="button button-gold" onClick={() => scrollTo('download')}>Find services <ArrowRight size={17} /></button>
            </div>
            <div className="service-list">
              {services.map((s, i) => (
                <div className="service-row" key={s}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <b>{s}</b>
                  <ArrowUpRight />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="map-section" id="map">
          <MapSection />
        </section>

        {/* Business profile */}
        <section className="profile-section section-white">
          <div className="container profile-grid">
            <div className="profile-copy">
              <div className="eyebrow"><span /> Your business, all in one place</div>
              <h2>One profile for<br /><em>everything you offer.</em></h2>
              <p>Bring your products, equipment, services and events together in a professional profile your next customer can find and trust.</p>
              <button className="button button-dark" onClick={() => scrollTo('download')}>Download Croprr <ArrowRight size={17} /></button>
            </div>
            <div className="business-card">
              <div className="business-cover">
                <div className="verified"><ShieldCheck size={13} /> Verified business</div>
              </div>
              <div className="business-body">
                <div className="avatar">GV</div>
                <h3>Green Valley Farm <span>✓</span></h3>
                <p><MapPin size={14} /> Madison, Wisconsin</p>
                <div className="business-tabs">
                  <span className="selected">Overview</span>
                  <span>Products</span>
                  <span>Equipment</span>
                  <span>Events</span>
                </div>
                <div className="business-stats">
                  <div><b>24</b><small>Listings</small></div>
                  <div><b>4.9</b><small>Reviews</small></div>
                  <div><b>1.2k</b><small>Followers</small></div>
                </div>
                <div className="business-actions">
                  <button><MessageCircle size={15} /> Message</button>
                  <button className="dark-action">View listings <ArrowRight size={15} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOMO / demo dashboard */}
        <section className="section section-white">
          <div className="container">
            <div className="fomo-card">
              <div className="fomo-copy">
                <div className="eyebrow"><span /> A head start matters</div>
                <h2>Your customers<br /><em>are already looking.</em></h2>
                <p>Businesses that build their presence early can establish their profile, listings and local visibility as the Croprr marketplace grows.</p>
                <button className="button button-dark" onClick={() => scrollTo('download')}>Download Croprr <ArrowRight size={17} /></button>
              </div>
              <div className="demo-dashboard">
                <div className="dashboard-top">
                  <span><span className="live-dot" /> SAMPLE / DEMO DATA</span>
                  <span>Last 30 days <ChevronDown size={14} /></span>
                </div>
                <div className="dashboard-title"><b>Profile performance</b><span>Visibility snapshot</span></div>
                <div className="chart">
                  <div className="chart-grid"><span /><span /><span /><span /></div>
                  <svg viewBox="0 0 500 135" preserveAspectRatio="none">
                    <path d="M0 116 C35 110, 45 105, 68 110 S110 90, 130 100 S170 76, 190 82 S230 60, 255 70 S290 50, 315 57 S350 32, 380 46 S430 16, 460 31 S485 5, 500 12" fill="none" stroke="#e8a719" strokeWidth="4" />
                  </svg>
                </div>
                <div className="dashboard-metrics">
                  <div><b>1,284</b><span>Profile views</span><small>+18.4%</small></div>
                  <div><b>486</b><span>Listing views</span><small>+12.1%</small></div>
                  <div><b>94</b><span>Map discoveries</span><small>+8.7%</small></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download section */}
        <section className="download-section" id="download">
          <div className="container download-inner">
            <div>
              <div className="eyebrow light"><span /> Agriculture, in your pocket</div>
              <h2>Take Croprr<br /><em>with you.</em></h2>
              <p>Discover agriculture, connect with businesses and manage your listings from anywhere.</p>
              <div className="store-buttons">
                <button>
                  <span className="store-symbol">●</span>
                  <span><small>Download on the</small><b>App Store</b></span>
                </button>
                <button>
                  <span className="store-symbol play-store"><Play size={16} fill="currentColor" /></span>
                  <span><small>GET IT ON</small><b>Google Play</b></span>
                </button>
              </div>
            </div>
            <div className="qr-card">
              <div className="qr-grid">
                {Array.from({ length: 49 }).map((_, i) => <i key={i} className={(i * 7 + i * i) % 5 < 2 ? 'on' : ''} />)}
              </div>
              <span>Scan to explore Croprr</span>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <ContactSection />
      </main>

      <Footer scrollTo={scrollTo} />

      {cookieOpen && (
        <div className="cookie-banner">
          <div>
            <strong>Your privacy matters</strong>
            <span>We use essential cookies to keep Croprr working. Optional analytics will only be used with your permission.</span>
          </div>
          <div className="cookie-actions">
            <button onClick={() => setCookieOpen(false)}>Reject optional</button>
            <button className="button button-dark small" onClick={() => setCookieOpen(false)}>Accept all</button>
          </div>
        </div>
      )}
    </div>
  );
}

function MapSection() {
  const [filter, setFilter] = useState('All');
  return (
    <div className="container map-layout">
      <div className="map-copy">
        <div className="eyebrow"><span /> The marketplace, mapped</div>
        <h2>Discover agriculture<br /><em>around you.</em></h2>
        <p>Find the farms, products, equipment, services, events and businesses that make your local food system move.</p>
        <div className="filter-row">
          {['All', 'Products', 'Equipment', 'Services', 'Events', 'Businesses'].map(item => (
            <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>
          ))}
        </div>
        <div className="map-result">
          <div className="result-icon"><Filter size={18} /></div>
          <div>
            <strong>{filter === 'All' ? '2,480' : '486'} listings near you</strong>
            <span>Updated moments ago</span>
          </div>
          <ChevronRight />
        </div>
      </div>
      <div className="map-art">
        <img className="map-image" src="/assets/images/image.png" alt="Illustrated marketplace map with agricultural listing pins" />
        <div className="map-overlay-card">
          <span className="map-marker green"><MapPin size={14} /></span>
          <div><b>Madison, Wisconsin</b><small>Sample marketplace area</small></div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const errs: Record<string, string> = {};
    const data = new FormData(form);
    if (!String(data.get('name') || '').trim()) errs.name = 'Please enter your full name.';
    const email = String(data.get('email') || '').trim();
    if (!email) errs.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.';
    if (!String(data.get('country') || '').trim()) errs.country = 'Please enter your country.';
    if (!String(data.get('subject') || '').trim()) errs.subject = 'Please select a subject.';
    if (!String(data.get('message') || '').trim()) errs.message = 'Please enter a message.';
    if (!data.get('consent')) errs.consent = 'Please accept the consent checkbox.';
    return errs;
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      const data = new FormData(form);

      // Replaced Supabase POST with Formspree Endpoint POST
      const res = await fetch('https://formspree.io/f/xaewqawv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: data, // Formspree natively accepts FormData objects directly
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section section-white" id="contact">
      <div className="container">
        <div className="section-heading centered">
          <div className="eyebrow"><span /> We're here to help</div>
          <h2>Let's start a<br /><em>conversation.</em></h2>
          <p>Have a question, idea or partnership in mind? Send us a note and our team will get back to you.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-aside">
            <div className="contact-detail"><MessageCircle /><div><b>General inquiries</b><span>info@croprr.com</span></div></div>
            <div className="contact-detail"><Globe2 /><div><b>Global community</b><span>We welcome questions from everywhere agriculture happens.</span></div></div>
            <div className="contact-detail"><ShieldCheck /><div><b>Your privacy</b><span>Your information is only used to respond to your inquiry.</span></div></div>
          </div>

          {status === 'success' ? (
            <div className="success-card">
              <div className="success-icon"><Check /></div>
              <h3>Thank you.</h3>
              <p>Your message has been received. Our team will get back to you.</p>
              <button className="button button-dark" onClick={() => setStatus('idle')}>Send another message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              {status === 'error' && (
                <div className="form-error-banner">Something went wrong sending your message. Please try again.</div>
              )}
              <div className="form-row">
                <label>
                  Full name
                  <input name="name" placeholder="Your full name" />
                  {errors.name && <small className="field-error">{errors.name}</small>}
                </label>
                <label>
                  Email address
                  <input name="email" type="email" placeholder="you@example.com" />
                  {errors.email && <small className="field-error">{errors.email}</small>}
                </label>
              </div>
              <div className="form-row">
                <label>
                  Phone number <small className="optional-tag">(optional)</small>
                  <input name="phone" type="tel" placeholder="+1 555 000 0000" />
                </label>
                <label>
                  Country
                  <input name="country" placeholder="Where are you based?" />
                  {errors.country && <small className="field-error">{errors.country}</small>}
                </label>
              </div>
              <label>
                Subject
                <select name="subject" defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option>General Inquiry</option>
                  <option>Business Support</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Report a Listing</option>
                  <option>Privacy Request</option>
                  <option>Other</option>
                </select>
                {errors.subject && <small className="field-error">{errors.subject}</small>}
              </label>
              <label>
                Message
                <textarea name="message" rows={5} placeholder="How can we help?" />
                {errors.message && <small className="field-error">{errors.message}</small>}
              </label>
              <label className="consent">
                <input name="consent" type="checkbox" />
                I agree that Croprr may use the information I provide to respond to my inquiry.
                {errors.consent && <small className="field-error">{errors.consent}</small>}
              </label>
              <button className="button button-dark" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : <>Send message <ArrowRight size={17} /></>}
              </button>
              <small className="form-note">Your information is only used to respond to this inquiry.</small>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <button className="brand footer-logo" onClick={() => scrollTo('top')}><img src={logo} alt="Croprr" /></button>
          <p>Everything Agriculture.<br />One Marketplace.</p>
          <div className="socials"><Instagram /><Facebook /><Linkedin /><Youtube /></div>
        </div>
        <div className="footer-col">
          <b>Explore</b>
          <button onClick={() => scrollTo('features')}>Features</button>
          <button onClick={() => scrollTo('farmers')}>Farmers</button>
          <button onClick={() => scrollTo('marketplace')}>Marketplace</button>
          <button onClick={() => scrollTo('map')}>Map</button>
        </div>
        <div className="footer-col">
          <b>Company</b>
          <button onClick={() => scrollTo('contact')}>Contact</button>
          <button onClick={() => scrollTo('download')}>Download app</button>
        </div>
        <div className="footer-col">
          <b>Legal</b>
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/terms-of-service">Terms of service</a>
          <a href="/cookie-policy">Cookie policy</a>
        </div>
        <div className="footer-col">
          <b>Connect</b>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
          <span>YouTube</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Croprr. Built for a more connected agricultural community.</span>
        <span>App store links and social URLs are configurable.</span>
      </div>
    </footer>
  );
}

const legalContent: Record<string, { title: string; intro: string; sections: { heading: string; text: string }[] }> = {
  '/privacy-policy': {
    title: 'Privacy Policy',
    intro: 'This Privacy Policy explains how Croprr collects, uses, shares, and protects information when you visit our website or use our marketplace services.',
    sections: [
      { heading: 'Information we collect', text: 'We may collect information you provide directly, such as your name, email address, phone number, location, business details, listings, and messages. We also receive technical information such as browser type, device information, approximate location, and pages visited.' },
      { heading: 'How we use information', text: 'We use information to provide and improve Croprr, publish marketplace listings you choose to share, respond to inquiries, maintain safety and security, communicate about the service, and comply with legal obligations.' },
      { heading: 'How we share information', text: 'We may share information with service providers that help us operate the website, with other users when you publish a public profile or listing, or when required by law. We do not sell personal information for money.' },
      { heading: 'Your U.S. privacy choices', text: 'Depending on where you live, including California, you may have rights to know, access, correct, delete, or limit certain uses of your personal information. You may submit a request through our contact form with the subject “Privacy Request.” We will verify requests as required by law and will not discriminate against you for exercising your rights.' },
      { heading: 'Children’s privacy', text: 'Croprr is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided information, please contact us so we can delete it.' },
      { heading: 'Security and retention', text: 'We use reasonable administrative, technical, and organizational safeguards. No online service is completely secure. We retain information only as long as reasonably necessary for the purposes described here, legal obligations, and dispute resolution.' },
      { heading: 'Contact us', text: 'For privacy questions or requests, contact info@croprr.com. This policy was last updated August 10, 2026.' },
    ],
  },
  '/terms-of-service': {
    title: 'Terms of Service',
    intro: 'These Terms of Service govern your access to and use of Croprr. By using the website, you agree to these terms.',
    sections: [
      { heading: 'The Croprr marketplace', text: 'Croprr provides tools for discovering agricultural products, equipment, services, businesses, and experiences. Croprr is a marketplace and is not the seller, owner, insurer, broker, or provider of items and services listed by users.' },
      { heading: 'User content and listings', text: 'You are responsible for the accuracy, legality, and rights associated with content you submit. Do not post misleading, unlawful, infringing, unsafe, or fraudulent content. You grant Croprr a non-exclusive license to host, display, and distribute your content as needed to operate the service.' },
      { heading: 'Transactions and safety', text: 'Users are responsible for evaluating listings, communicating honestly, confirming terms, and complying with applicable federal, state, and local laws. Croprr does not guarantee the quality, availability, legality, or safety of a listing or transaction.' },
      { heading: 'Acceptable use', text: 'Do not misuse the service, attempt unauthorized access, interfere with its operation, scrape data without permission, impersonate another person, send spam, or use Croprr for unlawful activity. We may remove content or restrict access when reasonably necessary to protect users or the service.' },
      { heading: 'Disclaimers and liability', text: 'The service is provided on an “as available” basis to the fullest extent permitted by law. Croprr disclaims warranties not expressly stated in these terms. To the fullest extent permitted by law, Croprr will not be liable for indirect, incidental, special, consequential, or exemplary damages arising from use of the service.' },
      { heading: 'Governing law and changes', text: 'These terms are governed by the laws applicable in the United States and the state where Croprr’s principal business is located, without regard to conflict-of-law rules. We may update these terms by posting a revised version. Continued use after an update means you accept the revised terms.' },
      { heading: 'Contact us', text: 'Questions about these terms may be sent to info@croprr.com. These terms were last updated August 10, 2026.' },
    ],
  },
  '/cookie-policy': {
    title: 'Cookie Policy',
    intro: 'This Cookie Policy explains how Croprr uses cookies and similar technologies on its website.',
    sections: [
      { heading: 'What cookies are', text: 'Cookies are small files stored on your device. Similar technologies can remember settings, support security, and help us understand how the service is used.' },
      { heading: 'How we use them', text: 'We use essential cookies that are necessary for core site functions, security, preferences, and consent choices. Optional analytics cookies may be used only after you give permission through the cookie notice.' },
      { heading: 'Your choices', text: 'You can reject optional cookies in the cookie notice. You can also control cookies through your browser settings, although disabling essential cookies may affect site functionality. We do not use cookies to sell your personal information.' },
      { heading: 'Do not track', text: 'Because there is not yet a common industry standard for responding to browser Do Not Track signals, Croprr may not respond to them. We honor the choices available through our cookie controls and applicable law.' },
      { heading: 'Updates and contact', text: 'We may update this policy when our technology or legal obligations change. For questions, contact info@croprr.com. This policy was last updated August 10, 2026.' },
    ],
  },
};

function LegalPage({ path }: { path: string }) {
  const page = legalContent[path] ?? legalContent['/privacy-policy'];

  return (
    <div className="app-shell legal-page-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="/" aria-label="Croprr home"><img src={logo} alt="Croprr" /></a>
          <div className="nav-actions"><a className="button button-gold small" href="/">Back to Croprr</a></div>
        </div>
      </header>
      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow light"><span /> Croprr legal center</div>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </section>
        <section className="section section-white">
          <div className="container legal-layout">
            <aside>
              <span>Legal documents</span>
              <a href="/privacy-policy" className={path === '/privacy-policy' ? 'selected' : ''}>Privacy policy</a>
              <a href="/terms-of-service" className={path === '/terms-of-service' ? 'selected' : ''}>Terms of service</a>
              <a href="/cookie-policy" className={path === '/cookie-policy' ? 'selected' : ''}>Cookie policy</a>
            </aside>
            <article className="legal-copy">
              <div className="legal-date">LAST UPDATED AUGUST 10, 2026</div>
              {page.sections.map(section => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </section>
              ))}
              <p className="legal-disclaimer">These pages are general information for a U.S.-focused website and are not legal advice. Have counsel review them for your business, state requirements, and actual data practices before publishing.</p>
            </article>
          </div>
        </section>
      </main>
      <footer><div className="container footer-bottom"><span>© 2026 Croprr.</span><span>Questions: info@croprr.com</span></div></footer>
    </div>
  );
}

export default App;