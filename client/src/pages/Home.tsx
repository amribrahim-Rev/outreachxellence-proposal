import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ChevronRight, Activity, GitCommit, Search, Shield, Zap, Target, Mail, Send, ActivitySquare, LayoutDashboard, BarChart3, Database, Filter } from "lucide-react";
import { useEffect, useState } from "react";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const SectionEyebrow = ({ text }: { text: string }) => (
  <div className="font-mono text-[10px] tracking-[0.18em] text-live opacity-80 mb-4 flex items-center gap-3">
    {text}
    <div className="w-8 h-px bg-live opacity-40" />
  </div>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`font-serif text-3xl md:text-5xl font-normal leading-[1.1] text-cream mb-[14px] ${className}`}>
    {children}
  </h2>
);

const SectionIntro = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[15px] font-light text-muted max-w-[520px] leading-[1.75] mb-[52px]">
    {children}
  </p>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-ink text-cream selection:bg-live/30 selection:text-cream">
      {/* Ticker */}
      <div className="bg-live h-8 flex items-center sticky top-0 z-50 overflow-hidden border-b border-ink/20 shadow-sm">
        <div className="flex whitespace-nowrap ticker-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-mono text-[10px] font-medium text-white tracking-[0.08em] px-7 flex items-center">
              OUTREACHXELLENCE <span className="opacity-40 mx-2">◆</span> PREPARED FOR GSD IDEA
              <span className="opacity-40 mx-2">◆</span> STRUCTURAL ENGINEERING SOFTWARE
              <span className="opacity-40 mx-2">◆</span> GCC OUTBOUND SYSTEM
              <span className="opacity-40 mx-2">◆</span> SIGNAL-LED · NOT SPRAY-AND-PRAY
              <span className="opacity-40 mx-2">◆</span> 90-DAY ENGINE BUILD
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-14 py-5 border-b border-dim bg-ink/90 backdrop-blur-sm sticky top-8 z-40">
        <a href="#" className="font-mono text-xs font-medium tracking-[0.12em] text-cream no-underline">
          OUTREACH<span className="text-live">X</span>ELLENCE
        </a>
        <div className="hidden md:flex gap-8">
          {["situation", "engine", "timeline", "pricing"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono text-[10px] tracking-[0.1em] no-underline uppercase transition-colors duration-200 ${
                activeSection === id ? "text-cream" : "text-muted hover:text-cream"
              }`}
            >
              {id}
            </a>
          ))}
        </div>
        <div className="font-mono text-[10px] tracking-[0.08em] text-muted border border-dim px-3.5 py-1.5 rounded-sm">
          For <span className="text-live">GSD Idea</span>
        </div>
      </nav>

      {/* Cover */}
      <div className="pt-16 pb-16 px-6 md:px-14 border-b border-dim grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-start relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-live/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="z-10">
          <div className="font-mono text-[10px] tracking-[0.14em] text-muted mb-8 flex items-center gap-4">
            <div className="w-6 h-px bg-muted opacity-40" />
            CONFIDENTIAL PROPOSAL · OUTREACHXELLENCE · 2025
          </div>
          <h1 className="font-serif text-5xl md:text-[76px] font-normal leading-[1.05] text-cream mb-7 tracking-tight">
            More engineers<br />
            across the GCC<br />
            need to find <em className="italic text-live">you.</em>
          </h1>
          <p className="text-base font-light text-muted leading-[1.8] max-w-[520px] mb-6">
            GSD Idea is the GCC's authorised reseller for IDEA StatiCa — one of the most advanced structural design platforms available to engineers today. The software is exceptional. The problem is <strong className="text-cream font-medium">the right engineers across Saudi, Qatar, Kuwait, and beyond aren't seeing it.</strong>
          </p>
          <p className="text-base font-light text-muted leading-[1.8] max-w-[520px] mb-10">
            This proposal outlines how OutreachXellence will build a structured outbound system to put IDEA StatiCa in front of the structural engineers, BIM managers, and technical directors who need it — systematically, across the entire GCC.
          </p>
        </div>
        
        <Reveal delay={0.2}>
          <div className="bg-ink2 border border-dim p-7 rounded-sm relative shadow-2xl shadow-black/50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-live to-transparent opacity-50" />
            <div className="font-mono text-[9px] tracking-[0.16em] text-live opacity-70 mb-5 pb-3.5 border-b border-dim uppercase">
              // PROPOSAL BRIEF
            </div>
            
            {[
              ["Prepared For", "GSD Idea — Gulf Structural Design"],
              ["Product", "IDEA StatiCa — Steel, Concrete & BIM"],
              ["Region", "GCC — 6 Markets"],
              ["Target Buyers", "Structural Engineers · BIM Managers · Technical Directors"],
              ["Engagement", "90-Day Outbound Engine Build"]
            ].map(([k, v], i) => (
              <div key={i} className="mb-4 last:mb-0">
                <div className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase mb-1">{k}</div>
                <div className="text-sm font-medium text-cream">{v}</div>
              </div>
            ))}
            
            <div className="h-px bg-dim my-5" />
            <div className="font-serif italic text-sm text-warm leading-[1.65] opacity-80">
              "The right engineers aren't finding you — because no structured system exists to reach them."
            </div>
          </div>
        </Reveal>
      </div>

      {/* Snapshot */}
      <section className="bg-ink2 py-20 px-6 md:px-14 border-b border-dim" id="glance">
        <SectionEyebrow text="AT A GLANCE" />
        <SectionTitle className="mb-10">Everything in<br />four lines.</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-dim">
          {[
            { l: "The Problem", v1: "No structured", v2: "outreach engine", d: "IDEA StatiCa's value is proven. The gap is systematic outreach to GCC engineers who've never been introduced to it." },
            { l: "What We Build", v1: "A signal-led", v2: "outbound system", d: "ICP-targeted, multi-channel outreach to structural engineering firms across all 6 GCC markets." },
            { l: "The Goal", v1: "Demo & trial", v2: "conversations", d: "Get qualified structural engineers booked for demos and 14-day trials through a repeatable outbound process." },
            { l: "The Guarantee", v1: "Performance-", v2: "backed terms", d: "If qualified conversation targets aren't met and you've met your SLA, we extend one month at no cost." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-ink2 h-full border border-transparent hover:border-live/30 p-7 transition-colors duration-300">
                <div className="font-mono text-[9px] tracking-[0.14em] text-live opacity-70 mb-3 uppercase">{item.l}</div>
                <div className="font-serif text-[22px] text-cream leading-[1.2] mb-2">
                  {item.v1}<br /><em className="italic text-warm">{item.v2}</em>
                </div>
                <div className="text-xs font-light text-muted leading-[1.6]">{item.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Situation */}
      <section className="py-20 px-6 md:px-14 border-b border-dim" id="situation">
        <SectionEyebrow text="YOUR SITUATION" />
        <SectionTitle>Why your current<br />reach has a <em className="italic text-warm">ceiling.</em></SectionTitle>
        <SectionIntro>GSD Idea has the right product, the right territory, and the right timing. What's missing is a system that proactively puts it in front of the people who need it.</SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-dim">
          {[
            { n: "01", t: "Your buyers don't find software — they get referred to it", d: <>Structural engineers in the GCC are a tight, technical community. They trust peer recommendations and direct outreach from credible sources far more than inbound discovery. <strong className="text-cream font-medium">Without proactive outreach, you're invisible to engineers who haven't already heard of IDEA StatiCa through their network.</strong></>, tag: "Discovery gap" },
            { n: "02", t: "The trial and demo model needs a pipeline feeding it", d: <>The 14-day trial is an excellent conversion mechanism — but only if the right people are being directed to it. <strong className="text-cream font-medium">Right now there's no structured top-of-funnel system generating a consistent flow of qualified engineers into that trial.</strong> The mechanism exists. The pipeline doesn't.</>, tag: "Pipeline gap" },
            { n: "03", t: "GCC market expansion requires market-specific outreach", d: <>Each GCC market has different project cycles, procurement patterns, and buyer behaviours. Saudi is infrastructure-heavy. UAE is mixed private-public. Qatar is post-World Cup consolidation. <strong className="text-cream font-medium">A generic approach treats six distinct buyer markets as one — and that's why blanket outreach fails here.</strong></>, tag: "Market depth gap" },
            { n: "04", t: "LinkedIn presence alone doesn't drive consistent demos", d: <>GSD Idea has a LinkedIn presence and a well-structured website. But passive content and organic reach produce inconsistent, unpredictable results. <strong className="text-cream font-medium">Content builds awareness. Outbound builds pipeline.</strong> The two serve different functions — and right now only one is running.</>, tag: "Channel gap" }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-ink2 h-full p-8 relative overflow-hidden group border border-transparent hover:border-live/25 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-live scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                <div className="font-mono text-[9px] tracking-[0.1em] text-live opacity-60 mb-3.5">{item.n}</div>
                <div className="font-serif text-[21px] text-cream mb-2.5 leading-[1.2]">{item.t}</div>
                <div className="text-sm font-light text-muted leading-[1.75] mb-4">{item.d}</div>
                <span className="font-mono text-[9px] tracking-[0.1em] text-dim border border-dim px-2.5 py-1 inline-block uppercase mt-auto">{item.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What We Build - FLOWCHART VERSION */}
      <section className="bg-ink2 py-20 px-6 md:px-14 border-b border-dim" id="engine">
        <SectionEyebrow text="WHAT WE BUILD" />
        <SectionTitle>The outbound engine,<br /><em className="italic text-warm">layer by layer.</em></SectionTitle>
        <SectionIntro>This is what gets built in the first 90 days. A visual representation of how the data flows from intelligence to output.</SectionIntro>

        <div className="relative mt-12 mb-8">
          {/* Connecting vertical line for desktop */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-dim hidden md:block"></div>
          
          <div className="flex flex-col gap-12">
            {[
              { 
                num: "L-01", name: "ICP Intelligence", desc: "Who We Target", badge: "Foundation", icon: <Target size={20} className="text-live" />,
                items: ["Structural engineering firms (GCC)", "BIM managers & technical directors", "STAAD / ETABS / SAP2000 users", "Consultancies with mandates", "TAM sizing per GCC market"]
              },
              { 
                num: "L-02", name: "Infrastructure", desc: "The Sending Architecture", badge: "Engineering", icon: <Database size={20} className="text-live" />,
                items: ["10–15 dedicated domains", "30–45 managed inboxes", "SPF · DKIM · DMARC config", "21-day warmup protocol", "Deliverability monitoring"]
              },
              { 
                num: "L-03", name: "Playbook", desc: "What We Say & How", badge: "Messaging", icon: <ActivitySquare size={20} className="text-live" />,
                items: ["Engineer-specific messaging", "Trial & demo primary CTA", "Signal-based personalisation", "Software comparison hooks", "A/B testing cycles weekly"]
              },
              { 
                num: "L-04", name: "Activation", desc: "LinkedIn + Cold Email", badge: "Execution", icon: <Send size={20} className="text-live" />,
                items: ["LinkedIn connection sequences", "Cold email campaigns", "Touch timing optimisation", "GCC market sequencing"]
              },
              { 
                num: "L-05", name: "Qualification", desc: "Replies Into Demo Bookings", badge: "Filtering", icon: <Filter size={20} className="text-live" />,
                items: ["Reply classification by intent", "Demo & trial routing", "CRM pipeline integration", "Feedback loop into messaging"]
              },
              { 
                num: "L-06", name: "Output", desc: "Demos Booked, Pipeline Reported", badge: "Output", icon: <BarChart3 size={20} className="text-live" />, out: true,
                items: ["Qualified demo meetings booked", "Trial activations tracked", "Show-rate optimisation", "No-show recovery sequences"]
              }
            ].map((stage, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  {/* Node Icon */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2 border-dim bg-ink2 ${stage.out ? 'shadow-[0_0_20px_rgba(107,61,245,0.3)] border-live/50' : ''}`}>
                    {stage.icon}
                  </div>
                  
                  {/* Content Box */}
                  <div className={`flex-grow border border-dim rounded-sm p-6 bg-ink ${stage.out ? 'border-live/30' : ''} relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-1 h-full ${stage.out ? 'bg-live' : 'bg-dim'}`}></div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] tracking-[0.06em] text-live">{stage.num}</span>
                          <h3 className="text-[17px] font-semibold text-cream tracking-[0.01em]">{stage.name}</h3>
                        </div>
                        <p className="text-[13px] font-light text-muted mt-1">{stage.desc}</p>
                      </div>
                      <span className={`font-mono text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 border ${stage.out ? 'border-live/30 text-live bg-live/5' : 'border-dim text-muted'}`}>
                        {stage.badge}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-dim/50">
                      {stage.items.map((item, idx) => (
                        <span key={idx} className="font-mono text-[10px] px-2.5 py-1 border border-live/20 text-warm bg-live/5 rounded-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Week One */}
      <section className="py-20 px-6 md:px-14 border-b border-dim" id="weekone">
        <SectionEyebrow text="WHAT HAPPENS FIRST" />
        <SectionTitle>Your first 7 days,<br /><em className="italic text-warm">exactly.</em></SectionTitle>
        <SectionIntro>The biggest anxiety with any new engagement is the unknown. Here's precisely what the first week looks like — day by day.</SectionIntro>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[2px] bg-dim mb-10">
          {[
            { l: "Day 1", t: "Onboarding Call", d: "60-min session. We align on ICP, confirm offer angles, agree SLA terms, and hand off access credentials.", h: true },
            { l: "Day 2", t: "ICP Workshop", d: "We map your ideal buyer profile across each GCC market. Engineer roles, firm sizes, software stack signals." },
            { l: "Day 3", t: "TAM Build Starts", d: "Prospect list construction begins. Clay enrichment workflows activated. Account scoring applied." },
            { l: "Day 4", t: "Domain Setup", d: "Purchasing 10-15 dedicated sending domains. DNS records configured for maximum deliverability." },
            { l: "Day 5", t: "Inbox Config", d: "Creating 30-45 Google Workspaces. Setting up DMARC, DKIM, and SPF protocols for all domains." },
            { l: "Day 6", t: "Playbook Draft", d: "First iteration of messaging sequences created based on Day 2 workshop insights." },
            { l: "Day 7", t: "Infrastructure Live", d: "All domains and inboxes active. Warmup running. First week report shared. Week 2 launch prep begins." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`h-full border border-transparent p-5 ${item.h ? 'bg-ink3 border-live/30' : 'bg-ink2 hover:border-live/30'} transition-colors duration-300`}>
                <div className="font-mono text-[9px] tracking-[0.14em] text-live opacity-60 mb-2.5 uppercase">{item.l}</div>
                <div className="text-[13px] font-semibold text-cream mb-1.5 leading-[1.3]">{item.t}</div>
                <div className="text-[11px] font-light text-muted leading-[1.55]">{item.d}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="bg-live/5 border border-live/20 p-6 flex items-start gap-4 rounded-sm">
            <div className="font-mono text-[11px] text-live opacity-70 flex-shrink-0 pt-0.5"><ArrowRight size={16} /></div>
            <div className="text-[13px] font-light text-muted leading-[1.7]">
              <strong className="text-cream font-medium">We don't send a single outreach message in week one.</strong> Everything in week one is about building the infrastructure correctly so that every message sent from week three onward lands in the inbox, reaches the right person, and says the right thing. Speed without foundation is how outbound gets blacklisted.
            </div>
          </div>
        </Reveal>
      </section>

      {/* 90-Day Build (Timeline) */}
      <section className="bg-ink2 py-20 px-6 md:px-14 border-b border-dim" id="timeline">
        <SectionEyebrow text="90-DAY BUILD" />
        <SectionTitle>The full build,<br /><em className="italic text-warm">phase by phase.</em></SectionTitle>
        <SectionIntro>Four phases. Each has defined outputs before we move to the next. Nothing launches before it's ready.</SectionIntro>

        <div className="flex flex-col gap-[2px] bg-dim">
          {[
            { 
              w: "Week 1–2", p1: "Intelligence &", p2: "Architecture", 
              d: "We define the ICP with precision, size the addressable market across each GCC territory, map buyer signals, and draft the full playbook architecture. Nothing is built until the targeting is right.",
              t: ["ICP Definition", "GCC TAM Sizing", "Signal Mapping", "Playbook Draft", "Offer Angle Validation"]
            },
            { 
              w: "Week 2–3", p1: "Infrastructure &", p2: "Deliverability", 
              d: "Domains provisioned. Inboxes configured. Authentication stack fully deployed. Warmup running. We don't proceed to activation until inbox placement is confirmed at target rates.",
              t: ["Domain Setup", "Inbox Configuration", "SPF · DKIM · DMARC", "Warmup Protocol", "Deliverability Audit"]
            },
            { 
              w: "Week 3–6", p1: "Multi-Channel", p2: "Activation", 
              d: "LinkedIn and email launch in coordinated sequence. Signal-based personalisation is live. First replies come in. CRM routing and qualification filtering activated. The first iteration cycle begins.",
              t: ["LinkedIn Launch", "Email Campaigns Live", "Signal Personalisation", "Reply Management", "Demo Routing"]
            },
            { 
              w: "Week 7+ · Ongoing", p1: "Optimisation &", p2: "Pipeline Control", on: true,
              d: "The engine compounds. Every week we run structured A/B experiments, refine messaging from real reply data, tighten qualification criteria, and optimise show rates for booked demos. The system gets measurably better each cycle.",
              t: ["Weekly A/B Cycles", "Messaging Refinement", "Show-Rate Optimisation", "Pipeline Reporting", "Quarterly Review"]
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-[2px]">
                <div className={`bg-ink2 p-7 flex flex-col justify-start border-l-2 ${item.on ? 'border-live' : 'border-transparent'}`}>
                  <div className="font-mono text-[9px] tracking-[0.12em] text-live opacity-70 mb-1.5 uppercase">{item.w}</div>
                  <div className="font-serif text-lg text-cream leading-[1.2]">
                    {item.p1}<br /><em className="italic text-warm">{item.p2}</em>
                  </div>
                </div>
                <div className="bg-ink2 p-7 flex flex-col gap-3">
                  <div className="text-sm font-light text-muted leading-[1.7]">{item.d}</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.t.map((tag, idx) => (
                      <span key={idx} className={`font-mono text-[10px] px-2.5 py-1 border ${item.on ? 'border-live/25 text-live/80 bg-live/5' : 'border-dim text-muted'} rounded-sm`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 px-6 md:px-14 border-b border-dim" id="terms">
        <SectionEyebrow text="HOW WE WORK" />
        <SectionTitle>The engagement<br /><em className="italic text-warm">structure.</em></SectionTitle>
        <SectionIntro>Clear terms on both sides from day one. This isn't fine print — it's what makes the results predictable.</SectionIntro>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
          <Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase mb-5 pb-3 border-b border-live/25 text-live">
                // What we deliver
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Full infrastructure build — domains, inboxes, authentication, warmup",
                  "ICP definition, GCC TAM mapping, and signal layer activation",
                  "LinkedIn + cold email execution targeting GCC engineering firms",
                  "Weekly A/B experimentation with documented learnings each cycle",
                  "CRM routing, reply management, and demo qualification filtering",
                  "Monthly pipeline review with forward forecasting",
                  "Deliverability monitoring throughout the engagement"
                ].map((li, i) => (
                  <li key={i} className="text-sm font-light text-cream/75 leading-[1.55] flex items-start gap-3">
                    <span className="font-mono text-[11px] text-live flex-shrink-0 mt-0.5">✓</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase mb-5 pb-3 border-b border-dim text-dim">
                // Not included
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Closing calls, demo delivery, or technical sales support",
                  "Content creation, SEO, or inbound marketing",
                  "Paid advertising of any kind",
                  "Revenue or conversion guarantees — we guarantee qualified conversations",
                  "CRM platform licensing or implementation",
                  "Engagements shorter than 90 days"
                ].map((li, i) => (
                  <li key={i} className="text-sm font-light text-muted leading-[1.55] flex items-start gap-3">
                    <span className="font-mono text-[11px] text-dim flex-shrink-0 mt-0.5">—</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="bg-live/5 border border-live/20 p-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center rounded-sm">
            <div className="font-serif italic text-6xl text-live opacity-30 select-none">G</div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.16em] text-live opacity-70 mb-2 uppercase">// CONDITIONAL PERFORMANCE GUARANTEE</div>
              <div className="text-sm font-light text-cream leading-[1.75]">
                If agreed qualified demo and conversation targets are not met by the end of month three — and GSD Idea has met all SLA obligations with a clear, closable offer — <strong className="font-semibold text-live">OutreachXellence extends the engagement for one additional month at no charge.</strong> No revenue guarantees are made. This is a pipeline guarantee, conditional on bilateral accountability.
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="bg-ink2 py-20 px-6 md:px-14 border-b border-dim" id="pricing">
        <SectionEyebrow text="INVESTMENT" />
        <SectionTitle>Choose the tier that<br />fits where you <em className="italic text-warm">are.</em></SectionTitle>
        <SectionIntro>All three tiers run on the same signal-led methodology. The difference is channel depth and execution bandwidth.</SectionIntro>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3px] bg-dim mb-6">
          {[
            { 
              t: "TIER 1", n: "LinkedIn\nPipeline", d: "One channel to establish GCC presence and start getting qualified engineers into conversations.",
              p: "$2,000", bg: "bg-ink2 hover:border-live/30", text: "text-cream", f: [
                "ICP targeting + persona mapping", "LinkedIn connection sequences", "Conversation & reply management", 
                "Demo booking & calendar routing", "Weekly optimisation cycles", "Monthly performance report"
              ]
            },
            { 
              t: "TIER 2", n: "Multi-Channel\nEngine", d: "LinkedIn + Cold Email as one coordinated system. Full sending infrastructure built and managed for you.",
              p: "$3,500", bg: "bg-live border-live", text: "text-white", pop: "Most Popular", f: [
                "Everything in Tier 1", "Cold email — 10–15 domains, 30–45 inboxes", "SPF · DKIM · DMARC + warmup protocol",
                "Signal-based personalisation layer", "Clay enrichment workflows", "Multi-channel sequencing & CRM routing",
                "Bi-weekly strategy calls", "Weekly A/B experiment cycles"
              ]
            },
            { 
              t: "TIER 3", n: "Full Outbound\nPod", d: "All channels plus a dedicated SDR handling calls, follow-ups, and full pipeline management.",
              p: "$5,500", bg: "bg-[#0A0814] border-dim", text: "text-cream", f: [
                "Everything in Tier 2", "Dedicated SDR — calls + follow-ups", "Custom call scripts & objection playbook",
                "Voicemail drop sequences", "No-show recovery campaigns", "Full pipeline management",
                "Weekly strategy sessions", "Priority Slack support"
              ]
            }
          ].map((tier, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className={`${tier.bg} h-full border p-8 md:p-10 flex flex-col relative transition-colors duration-300`}>
                {tier.pop && (
                  <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-white text-live font-mono text-[9px] tracking-[0.1em] px-3.5 py-1 whitespace-nowrap border border-live uppercase">
                    {tier.pop}
                  </div>
                )}
                <div className={`font-mono text-[9px] tracking-[0.2em] mb-3 uppercase ${tier.pop ? 'text-white/55' : 'text-muted'}`}>{tier.t}</div>
                <div className={`font-serif text-[26px] leading-[1.15] mb-2.5 whitespace-pre-line ${tier.text}`}>{tier.n}</div>
                <div className={`text-[13px] font-light leading-[1.65] mb-5 ${tier.pop ? 'text-white/60' : 'text-muted'}`}>{tier.d}</div>
                
                <div className="flex items-baseline gap-1 mb-5 mt-auto">
                  <span className={`font-serif text-[54px] leading-none ${tier.pop ? 'text-white' : (i === 2 ? 'text-live' : 'text-cream')}`}>{tier.p}</span>
                  <span className={`font-mono text-xs tracking-[0.04em] ${tier.pop ? 'text-white/45' : 'text-muted'}`}>/mo</span>
                </div>
                
                <div className={`h-px mb-5 ${tier.pop ? 'bg-white/20' : 'bg-dim'}`} />
                
                <ul className="flex flex-col gap-3 flex-1">
                  {tier.f.map((li, idx) => (
                    <li key={idx} className={`text-[13px] font-light flex items-start gap-2.5 leading-[1.45] ${tier.pop ? 'text-white/80' : 'text-muted'}`}>
                      <span className={`font-mono text-[10px] flex-shrink-0 mt-0.5 ${tier.pop ? 'text-white/60' : 'text-live'}`}>✓</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="font-mono text-[10px] text-dim leading-[1.7] tracking-[0.03em] max-w-[640px]">
          All tiers require a 3-month minimum engagement. The conditional guarantee applies to Tier 2 and Tier 3 when SLA obligations are fully met.
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-6 md:px-14 border-b border-dim" id="close">
        <SectionEyebrow text="NEXT STEP" />
        <SectionTitle className="mb-10">Ready when<br /><em className="italic text-warm">you are.</em></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:gap-16 items-start">
          <div>
            <p className="text-[15px] font-light text-muted leading-[1.85] max-w-[500px] mb-4">
              To move forward, simply reply to this proposal with your preferred tier. We'll schedule a 45-minute onboarding call to finalise ICP scope, confirm SLA terms, and begin infrastructure provisioning within the first working week.
            </p>
            <p className="text-[15px] font-light text-muted leading-[1.85] max-w-[500px] mb-4">
              If you'd like to discuss which tier is the right fit before committing, we're happy to get on a 30-minute scoping call first — no pressure, just clarity on what the right starting point looks like for GSD Idea's growth stage.
            </p>
            <p className="text-[15px] font-light text-muted leading-[1.85] max-w-[500px]">
              <strong className="font-medium text-cream">This proposal is valid for 30 days from the date of issue.</strong> Pricing and availability are subject to change after that window.
            </p>
          </div>
          
          <Reveal>
            <div className="bg-ink2 border border-dim p-7 rounded-sm relative shadow-xl shadow-black/40">
              <div className="font-mono text-[9px] tracking-[0.16em] text-live opacity-70 mb-5 pb-3.5 border-b border-dim uppercase">
                // OUTREACHXELLENCE
              </div>
              
              {[
                ["Email", "hello@outreachxellence.com"],
                ["WhatsApp", "+971 XX XXX XXXX"],
                ["Prepared For", "GSD Idea — Gulf Structural Design"],
                ["Valid Until", "30 days from issue"]
              ].map(([k, v], i) => (
                <div key={i} className="mb-3.5 flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase">{k}</span>
                  <span className="text-[13px] font-medium text-cream">{v}</span>
                </div>
              ))}
              
              <div className="h-px bg-dim my-4" />
              <div className="font-serif italic text-sm text-warm opacity-70 leading-[1.5]">
                "The right engineers aren't finding you yet. Let's fix that — systematically."
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 p-6 md:px-14 border-t border-dim bg-ink">
        <div className="font-mono text-xs tracking-[0.1em] text-dim">
          OUTREACH<span className="text-live opacity-60">X</span>ELLENCE
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left">
          <div className="font-mono text-[10px] text-dim tracking-[0.05em]">SIGNAL-LED OUTBOUND SYSTEMS · GCC REGION</div>
          <div className="font-mono text-[10px] text-dim tracking-[0.05em]">CONFIDENTIAL · PREPARED FOR GSD IDEA · 2025</div>
        </div>
      </footer>
    </div>
  );
}
