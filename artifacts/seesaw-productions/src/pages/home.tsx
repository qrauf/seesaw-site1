import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Play, X } from 'lucide-react';

const img = (n: string) => `${import.meta.env.BASE_URL}images/${n}`;
const VIMEO = 'https://vimeo.com/seesawproduction';
const EMAIL = 'salman.tahir@seesawproduction.com';
const PHONE = '+92 321 3784208';
const PHONE_HREF = 'tel:+923213784208';
const ADDRESS = 'Suite#402, Murtaza Lane 1-A, DHA Phase 8, Karachi';

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'studio', label: 'Studio' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

const TILES = [
  { src: 'studio-bts.png', kicker: 'Showreel', title: 'SeeSaw Productions Reel', note: 'Watch on Vimeo', href: VIMEO },
  { src: 'tile-crane.jpg', kicker: 'Capability', title: 'TV Commercials', note: '', href: '#capabilities' },
  { src: 'tile-sea.jpg', kicker: 'Capability', title: 'Content Production', note: '', href: '#capabilities' },
  { src: 'tile-post.jpg', kicker: 'Capability', title: 'Post-Production', note: '', href: '#capabilities' },
];

const SERVICES = [
  { n: '01', t: 'TV Commercials', d: 'Cinematic broadcast spots, carried from concept to final delivery.' },
  { n: '02', t: 'Content Production', d: 'Narrative-driven films that build a genuine connection with audiences.' },
  { n: '03', t: 'Digital Ads', d: 'Agile, multi-format social content cut for every screen and platform.' },
  { n: '04', t: 'AI Productions', d: 'AI-assisted workflows and generative content, directed with a filmmaker’s eye.' },
  { n: '05', t: 'Post-Production', d: 'Editing, colour grading, VFX and sound under one roof.' },
];

const TEAM = [
  { name: 'Salman Tahir', role: 'Founder & Executive Producer', src: 'salman.jpg' },
  { name: 'Naveed Zuberi', role: 'Producer & Business Director', src: 'naveed.png' },
  { name: 'Dilawar Ghafoor', role: 'Producer', src: 'dilawar.jpeg' },
  { name: 'Nawal Karim', role: 'Associate Producer', src: 'nawal.png' },
];

const CLIENTS = ["L'OREAL", 'UNILEVER', 'HALEON', 'FRIESLAND CAMPINA', 'CBL', 'TOYOTA', 'OLIVIA', 'BAKEPARLOR', 'SCB', 'MEEZAN BANK', 'COLA NEXT', 'GARNIER', 'ISLAMABAD TEA', 'DABUR', 'FREEFIRE', 'HBL', 'NATIONAL BANK', 'JAZZ', 'TECNO MOBILE', 'SHANGRILA FOODS', 'OLX', 'ALLIED BANK', 'ITEL MOBILES', 'DIAMOND FOAM', 'PAYPAK', 'HIMONT', 'NOVO NORDISK', 'PSO', 'BETTANI TEA', 'MARTIN DOW', 'BRITO FINELINERS', 'SWVL', 'OREO'];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-[#ece6dc] ${className}`}>
      <img src={img('seesaw-logo.png')} alt="SeeSaw Productions" className="w-[82%] h-auto mix-blend-multiply" />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled || open ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-gradient-to-b from-black/60 to-transparent'}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-primary text-primary-foreground px-3 py-2 text-sm">Skip to content</a>
      <div className="flex h-16 items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3" data-testid="link-home" aria-label="SeeSaw Productions, back to top">
          <Logo className="h-10 w-10" />
          <span className="text-[13px] font-medium tracking-[0.32em] uppercase">SeeSaw</span>
        </a>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} data-testid={`link-nav-${n.id}`} className="group relative text-[12px] uppercase tracking-[0.24em] text-foreground/75 hover:text-foreground transition-colors">
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a href={VIMEO} target="_blank" rel="noreferrer" data-testid="link-nav-vimeo" className="flex items-center gap-2 border border-foreground/30 px-4 py-2 text-[11px] uppercase tracking-[0.24em] hover:bg-foreground hover:text-background transition-colors">
            <Play className="h-3 w-3 fill-current" /> Reel
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} data-testid="button-menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-border px-5 pb-8 pt-4" aria-label="Mobile">
          {NAV.map((n, i) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} data-testid={`link-mobile-${n.id}`} className="rise flex items-baseline gap-4 py-3 font-serif text-3xl" style={{ animationDelay: `${i * 60}ms` }}>
              <span className="font-mono text-[10px] text-primary">0{i + 1}</span>{n.label}
            </a>
          ))}
          <a href={VIMEO} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.24em]">
            <Play className="h-3 w-3 fill-current" /> Watch showreel
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden bg-black">
      <img src={img('hero.jpg')} alt="" className="kenburns absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,8,7,.85)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="rise group font-mono text-lg md:text-3xl uppercase tracking-[0.2em] text-primary" style={{ animationDelay: '150ms' }}>
          <span className="inline-block transition-transform duration-300 ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:-translate-y-1">Seesaw Productions</span>
        </p>
        <h1 className="rise mt-6 font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight" style={{ animationDelay: '300ms' }}>
          Crafting legacies<br /><em className="text-primary">with impact.</em>
        </h1>
        <p className="rise mt-7 max-w-xl text-sm md:text-base text-foreground/75 font-light" style={{ animationDelay: '500ms' }}>
          Award-winning TVC, DVC &amp; Content Production. Cinematic storytelling that tips the scales in your favor.
        </p>
        <a href={VIMEO} target="_blank" rel="noreferrer" data-testid="button-watch-showreel" className="rise group mt-10 flex items-center gap-4" style={{ animationDelay: '700ms' }}>
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/40 transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary">
            <Play className="h-5 w-5 fill-current translate-x-[1px] group-hover:text-primary-foreground" />
          </span>
          <span className="text-left">
            <span className="block text-[11px] uppercase tracking-[0.3em]">Watch showreel</span>
            <span className="block font-mono text-[10px] text-foreground/50">Opens on Vimeo</span>
          </span>
        </a>
      </div>
      <div className="absolute bottom-6 left-5 md:left-8 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">24.8667 N / 67.0011 E</div>
      <a href="#work" className="absolute bottom-6 right-5 md:right-8 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50 hover:text-primary">Scroll</a>
    </section>
  );
}

function Work() {
  return (
    <section id="work" aria-label="Work">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {TILES.map((t, i) => {
          const ext = t.href.startsWith('http');
          return (
            <a key={t.title} href={t.href} target={ext ? '_blank' : undefined} rel={ext ? 'noreferrer' : undefined} data-testid={`card-tile-${i}`} className="group relative block aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-card">
              <img src={img(t.src)} alt={`${t.title}${ext ? '' : ' (illustrative image)'}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale-[35%] transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{t.kicker}</p>
                <h3 className="mt-2 font-serif text-2xl">{t.title}</h3>
                {t.note && <p className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60 transition-colors group-hover:text-foreground">
                  {ext && <Play className="h-3 w-3 fill-current" />}{t.note}{ext && <ArrowUpRight className="h-3 w-3" />}
                </p>}
              </div>
              <span className="absolute top-5 right-5 font-mono text-[10px] text-foreground/50">0{i + 1}</span>
            </a>
          );
        })}
      </div>
      <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 px-5 md:px-8 py-20 md:py-28 border-b border-border">
        <h2 className="max-w-3xl font-serif text-4xl md:text-6xl leading-[1.05]">One reel. <em className="text-foreground/50">More than 6 years</em> of frames that moved people.</h2>
        <a href={VIMEO} target="_blank" rel="noreferrer" data-testid="link-vimeo-channel" className="group flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] hover:text-primary">
          Full showreel on Vimeo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="grid md:grid-cols-12 gap-10 px-5 md:px-8 py-24 md:py-36">
      <div className="md:col-span-5 reveal">
        <div className="relative overflow-hidden">
          <img src={img('studio-bts.png')} alt="SeeSaw Productions crew on a production set" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          <span className="absolute left-4 top-4 bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em]">On set</span>
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
        <p className="reveal font-mono text-[11px] uppercase tracking-[0.4em] text-primary">The Studio</p>
        <h2 className="reveal mt-6 font-serif text-4xl md:text-5xl leading-[1.1]">Audacious creativity, balanced by <em className="text-primary">meticulous</em> production strategy.</h2>
        <p className="reveal mt-8 text-foreground/70 font-light leading-relaxed max-w-lg">
          SeeSaw Productions bridges creative vision and flawless execution. Every project is a collaborative balance: big ideas on one side, rigorous planning on the other, held level until the film lands exactly where it should.
        </p>
        <dl className="reveal mt-14 grid grid-cols-2 border-t border-border">
          {[['06+', 'Years of experience'], ['150+', 'Films delivered']].map(([v, l]) => (
            <div key={l} className="pt-6 pr-6">
              <dt className="sr-only">{l}</dt>
              <dd className="font-serif text-6xl md:text-7xl" data-testid={`text-stat-${v}`}>{v}</dd>
              <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="bg-card px-5 md:px-8 py-24 md:py-32">
      <div className="reveal flex items-end justify-between border-b border-border pb-8">
        <h2 className="font-serif text-4xl md:text-6xl">Capabilities</h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">05 disciplines</span>
      </div>
      <ul>
        {SERVICES.map((s) => (
          <li key={s.n} className="reveal group grid grid-cols-12 items-baseline gap-4 border-b border-border py-8 md:py-10 transition-colors hover:bg-background/60" data-testid={`row-service-${s.n}`}>
            <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-primary">{s.n}</span>
            <h3 className="col-span-10 md:col-span-5 font-serif text-3xl md:text-5xl transition-transform duration-500 group-hover:translate-x-3">{s.t}</h3>
            <p className="col-span-12 md:col-span-5 md:col-start-8 text-foreground/65 font-light">{s.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Clients() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Clients" className="py-20 overflow-hidden border-b border-border">
      <p className="px-5 md:px-8 font-mono text-[11px] uppercase tracking-[0.4em] text-primary">Brands we have worked with</p>
      <div className="mt-10 flex w-max marquee" aria-hidden="true">
        {row.map((c, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-serif text-3xl md:text-5xl text-foreground/35 hover:text-foreground transition-colors px-6">
            {c}<span className="ml-12 h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
      <ul className="sr-only">{CLIENTS.map((c) => <li key={c}>{c}</li>)}</ul>
    </section>
  );
}

function TeamCard({ m, i }: { m: (typeof TEAM)[number]; i: number }) {
  const [err, setErr] = useState(false);
  const initials = m.name.split(' ').map((p) => p[0]).join('');
  return (
    <figure className="reveal group" style={{ transitionDelay: `${i * 90}ms` }} data-testid={`card-team-${i}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {err ? (
          <div className="flex h-full items-center justify-center font-serif text-6xl text-primary">{initials}</div>
        ) : (
          <img src={img(m.src)} alt={m.name} loading="lazy" onError={() => setErr(true)} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]" />
        )}
      </div>
      <figcaption className="mt-5">
        <p className="font-serif text-2xl">{m.name}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">{m.role}</p>
      </figcaption>
    </figure>
  );
}

function Team() {
  return (
    <section id="team" className="px-5 md:px-8 py-24 md:py-32">
      <div className="reveal mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">The Team</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl">The people behind the frame.</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
        {TEAM.map((m, i) => <TeamCard key={m.name} m={m} i={i} />)}
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Enter a valid email address'),
  company: z.string().trim().optional(),
  service: z.string().min(1, 'Choose a service'),
  message: z.string().trim().min(10, 'Tell us a little more (10+ characters)'),
});
type FormData = z.infer<typeof schema>;

function Contact() {
  const [composed, setComposed] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', service: '', message: '' },
  });
  const onSubmit = (d: FormData) => {
    const subject = `Project enquiry: ${d.service}${d.company ? ` | ${d.company}` : ''}`;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company || '-'}\nService: ${d.service}\n\n${d.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setComposed(true);
  };
  const field = 'w-full bg-transparent border-0 border-b border-input py-3 text-base font-light placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors';
  const label = 'font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55';
  const Err = ({ m }: { m?: string }) => (m ? <p role="alert" className="mt-2 text-xs text-destructive">{m}</p> : null);
  return (
    <section id="contact" className="relative overflow-hidden bg-card px-5 md:px-8 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-14">
        <div className="md:col-span-5 reveal">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">Contact</p>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[0.95]">Let&rsquo;s tip<br /><em className="text-primary">the scales.</em></h2>
          <ul className="mt-12 space-y-6 text-foreground/80 font-light">
            <li><a href={`mailto:${EMAIL}`} data-testid="link-email" className="flex items-center gap-4 hover:text-primary transition-colors"><Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span className="min-w-0 break-all">{EMAIL}</span></a></li>
            <li><a href={PHONE_HREF} data-testid="link-phone" className="flex items-center gap-4 hover:text-primary transition-colors"><Phone className="h-4 w-4 text-primary" />{PHONE}</a></li>
            <li className="flex items-start gap-4" data-testid="text-address"><MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />{ADDRESS}</li>
          </ul>
          <nav aria-label="Social media" className="mt-10 flex flex-wrap gap-3">
            <a href="https://www.facebook.com/profile.php?id=100063675791711" target="_blank" rel="noopener noreferrer" data-testid="link-contact-facebook" className="inline-flex items-center gap-2 border border-border px-4 py-3 text-xs text-foreground/80 transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
              <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href="https://www.linkedin.com/company/seesaw-production" target="_blank" rel="noopener noreferrer" data-testid="link-contact-linkedin" className="inline-flex items-center gap-2 border border-border px-4 py-3 text-xs text-foreground/80 transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href="https://www.instagram.com/seesawproductionspk?psln=MXZlaW1pcmZ2OTc4Yg==" target="_blank" rel="noopener noreferrer" data-testid="link-contact-instagram" className="inline-flex items-center gap-2 border border-border px-4 py-3 text-xs text-foreground/80 transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
              <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram <span className="sr-only">(opens in a new tab)</span>
            </a>
          </nav>
          <div className="mt-8 overflow-hidden border border-border">
            <iframe
              title="SeeSaw Productions studio location on Google Maps"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&output=embed`}
              className="block h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              data-testid="map-studio-location"
            />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 px-4 py-4 text-xs text-foreground/80 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              data-testid="link-studio-directions"
            >
              Get directions on Google Maps
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="md:col-span-6 md:col-start-7 reveal space-y-8" aria-label="Project enquiry">
          <div className="grid sm:grid-cols-2 gap-8">
            <div><label htmlFor="name" className={label}>Name</label><input id="name" {...register('name')} className={field} placeholder="Your name" data-testid="input-name" aria-invalid={!!errors.name} /><Err m={errors.name?.message} /></div>
            <div><label htmlFor="email" className={label}>Email</label><input id="email" type="email" {...register('email')} className={field} placeholder="you@brand.com" data-testid="input-email" aria-invalid={!!errors.email} /><Err m={errors.email?.message} /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div><label htmlFor="company" className={label}>Company / Agency</label><input id="company" {...register('company')} className={field} placeholder="Optional" data-testid="input-company" /></div>
            <div>
              <label htmlFor="service" className={label}>Service</label>
              <select id="service" {...register('service')} className={`${field} bg-card`} data-testid="select-service" aria-invalid={!!errors.service}>
                <option value="">Select one</option>
                {SERVICES.map((s) => <option key={s.t} value={s.t}>{s.t}</option>)}
              </select>
              <Err m={errors.service?.message} />
            </div>
          </div>
          <div><label htmlFor="message" className={label}>Brief</label><textarea id="message" rows={4} {...register('message')} className={`${field} resize-none`} placeholder="What are we making?" data-testid="input-message" aria-invalid={!!errors.message} /><Err m={errors.message?.message} /></div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <button type="submit" data-testid="button-compose-email" className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[12px] uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:-translate-y-0.5">
              Compose email <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <p className="text-xs text-foreground/50 font-light max-w-xs">Opens your email app with this brief pre-filled. Nothing is sent until you hit send there.</p>
          </div>
          {composed && (
            <p role="status" className="text-sm text-primary" data-testid="status-composed">
              Your email draft should now be open. If nothing appeared, write to us directly at {EMAIL}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 md:px-8 pt-20 pb-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex items-center gap-5">
          <Logo className="h-20 w-20" />
          <p className="font-serif text-2xl max-w-xs leading-tight">Cinematic storytelling.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV.map((n) => <a key={n.id} href={`#${n.id}`} className="text-[12px] uppercase tracking-[0.24em] text-foreground/60 hover:text-primary">{n.label}</a>)}
          <a href={VIMEO} target="_blank" rel="noreferrer" data-testid="link-footer-vimeo" className="text-[12px] uppercase tracking-[0.24em] text-foreground/60 hover:text-primary">Vimeo</a>
        </nav>
      </div>
      <div className="mt-16 flex flex-col sm:flex-row justify-between gap-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
        <span>&copy; {new Date().getFullYear()} SeeSaw Productions</span>
        <span>Some imagery on this site is illustrative and does not depict client work.</span>
      </div>
    </footer>
  );
}

export default function Home() {
  useReveal();
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Studio />
        <Capabilities />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
