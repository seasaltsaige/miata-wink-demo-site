import "../shared/cta.css";
import "./LearnMore.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Down from "../../assets/down.svg";
import GetOnAppStore from "../../assets/GetOnAppStore.svg";
import GetOnGooglePlay from "../../assets/GetOnGooglePlay.svg";
import Checkmark from "../../assets/Checkmark.svg";
import Questionmark from "../../assets/Questionmark.svg";
import Xmark from "../../assets/Xmark.svg";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const qas = [
  [
    "Is the Wink Mod compatible with all Miata models?",
    "No. It is only compatible with 'NA' Miata's, which includes any Miata from 1989 to 1997. It works with these models popup headlights."
  ],
  [
    "How difficult is installation for beginners?",
    "It should be very beginner friendly, as it is directly compatible with the headlight connectors. No splicing wires required!"
  ],
  [
    "How much does the Wink Mod cost?",
    "The base model starts at $TBD, with customization options available to be made, by request."
  ],
  [
    "Can I request customization of the app and/or module?",
    "Unfortunately, this option is generally only available for Android devices, as iOS makes it difficult to side-load any sort of app. If you own an iPhone, and would like customization, you will need an Apple Developer account to be able to do so."
  ],
  [
    "What comes with my purchase?",
    "This kit contains the wink mod control unit in its housing, cabling long enough to reach both headlights, mounting hardware to mount it in your engine bay, an instruction pamphlet on how to install your module, along with an instruction pamphlet on how to use the app. (Also available in pdf form.)"
  ],
  [
    "What happens if I lose connection?",
    "If your settings are set to 'Auto Connect', the app should attempt to regain connection immediately. Otherwise, you will need to press 'Connect' again. If you are still unable to connect to your module, you may want to try to unplug it, and plug it back in."
  ],
  [
    "Can I still control the headlights manually?",
    "Yes. The OEM headlight button will still function as normal. Along with additional double and triple press actions."
  ],
  [
    "Is it compatible with the flash to pass mod?",
    "Yes, the wink mod is compatible with the flash to pass mod; you will just need to ensure that the setting is enabled in the app to ensure the module knows it is installed.",
  ],
  [
    "How is the Wink Mod powered?",
    "The wink mod is powered directly by the 12V rail that powers the headlight motors. The module often goes to sleep when not being used, only periodically waking to attempt to connect to your phone."
  ],
  [
    "Is there a way to update the software on the Wink Mod?",
    "Yes, updates are uploaded to the cloud, and the wink controller app will scan for updates when the app connects to your module. If one is found, you will be able to follow on app instructions on how to update the module."
  ],
  [
    "Can I customize the wink speed or behavior?",
    "Wink speed is proportional to the Voltage that is delivered to the headlight motor. While the car is on, it will be slightly faster than while it is off. Behavior can be modified with custom presets which can be created to have saved sequences."
  ],
  [
    "What if I want to remove the mod later, will it leave any permanent changes?",
    "Since this mod is entirely plug and play, there are no modifications made to the cars wiring harness, meaning it is able to revert to OEM condition."
  ],
];

const comparisons = [
  { value: "High quality, high temp rated materials", ours: 2, others: 1 },
  { value: "Large amounts of customizations on board", ours: 2, others: 1 },
  { value: "Long range Bluetooth connectivity & controller", ours: 2, others: 1 },
  { value: "Modern and intuitive app for easy use", ours: 2, others: 0 },
  { value: "Frequent updates to both wink module and app", ours: 2, others: 0 },
  { value: "Color customization for casing and wiring", ours: 2, others: 0 },
  { value: "Competitive pricing", ours: 2, others: 0 },
];

const featureCards = [
  {
    title: 'Plug and play installation',
    description: 'No wire splicing or permanent modifications connect directly to your existing headlight harness.',
  },
  {
    title: 'Full manual headlight compatibility',
    description: 'OEM headlight controls still work perfectly with wink and sleep eye modes enabled.',
  },
  {
    title: 'Custom presets and auto updates',
    description: 'Save wink sequences, set sleep eye speed, and update firmware from the phone app.',
  },
  {
    title: 'Safe and reliable',
    description: 'Cased, temperature-rated module with surge protection and stable Bluetooth connection.',
  },
];

const steps = [
  { label: '1. Plug in', detail: 'Connect the module directly to the headlight motor connectors and 12V power line.' },
  { label: '2. Install app', detail: 'Download the app from Google Play or App Store and pair with your module.' },
  { label: '3. Wink and create', detail: 'Use one click wink actions or create custom sequences.' },
];

const QA = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <Accordion className="accordion-faq">
      <AccordionSummary className="accordion-header" expandIcon={<Down />}>
        {question}
      </AccordionSummary>
      <AccordionDetails className="accordion-details">{answer}</AccordionDetails>
    </Accordion>
  );
};

export default function LearnMore() {
  const { width } = useWindowDimensions();

  return (
    <div className="learn-more-page">
      <div className="content-container">
        <section className="hero-panel">
          <div className="hero-content">
            <p className="eyebrow">Miata Wink Mod</p>
            <h1>Wink your headlights with confidence.</h1>
            <p className="hero-copy">
              The easiest plug and play module that supports NA Miata popup headlights, giving you winks, sleepy eye,
              custom sequences, and a modern app without changing OEM control behavior.
            </p>
            <div className="hero-buttons">
              <Link to="/install" className="cta-button-shared primary">Installation Guide</Link>
              <Link to="/contact" className="cta-button-shared ghost">Get support</Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image-wrap-img" src="/learn_more_app_image.webp" alt="Wink Mod app" />
          </div>
        </section>

        <br />
        <section className="feature-grid">
          {featureCards.map((card, index) => (
            <article className="feature-card" key={index}>
              <p className="feature-label">{card.title}</p>
              <p className="feature-detail">{card.description}</p>
            </article>
          ))}
        </section>
        <br />

        <section className="section-block">
          <div className="section-head">
            <h2>Quick Start</h2>
            <p>Install in minutes; start winking using your phone in seconds.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.label}>
                <div className="step-badge">{step.label}</div>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block split-block">
          <div className="split-left">
            <h2>Works on iOS and Android</h2>
            <p>
              Use the app to pair to your module and control wink, sleepy eye, or custom preset sequences. Auto-connect
              and firmware updates are built in.
            </p>
            <div className="install-container">
              <a href="https://play.google.com/store/games?hl=en_US">
                <GetOnGooglePlay />
              </a>
              <a href="https://www.apple.com/app-store/">
                <GetOnAppStore />
              </a>
            </div>
          </div>


          <div className="split-right">
            <img src="/learn_more_connector.webp" alt="Wink Mod app" />
          </div>
        </section>

        <section className="section-block">
          <h2 className="section-title">Why Choose Us?</h2>
          {width > 760 ? (
            <div className="why-us-table-compare">
              <div className="why-table-header">Feature</div>
              <div className="why-table-header">Ours</div>
              <div className="why-table-header">Others</div>
              {comparisons.map((val, i) => (
                <>
                  <div key={`f-${i}`} className="feature-text">{val.value}</div>
                  <div key={`o-${i}`} className="feature-check">{val.ours === 2 ? <Checkmark /> : val.ours === 1 ? <Questionmark /> : <Xmark />}</div>
                  <div key={`t-${i}`} className="feature-check">{val.others === 2 ? <Checkmark /> : val.others === 1 ? <Questionmark /> : <Xmark />}</div>
                </>
              ))}
            </div>
          ) : (
            <div className="why-us-table">
              {comparisons.map((comp, i) => (
                <div key={i} className="compare-card">
                  <div>
                    <p className="compare-value">{comp.value}</p>
                  </div>
                  <div className="compare-has">{comp.ours === 2 ? <Checkmark /> : comp.ours === 1 ? <Questionmark /> : <Xmark />}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="section-block faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="questions-and-answers">
            {qas.map((val, i) => (
              <QA question={val[0]} answer={val[1]} key={`qa-${i}`} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
