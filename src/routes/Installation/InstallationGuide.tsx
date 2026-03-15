import "./InstallationGuide.css";
import "../shared/cta.css";

type InstallStep = {
  step: string;
  title: string;
  body: string;
  image?: string;
  alt?: string;
  images?: { src: string; alt: string }[];
};

const installFlowSteps: InstallStep[] = [
  {
    step: "1",
    title: "Disconnect battery and discharge residual energy",
    body: "Turn off the car and disconnect the battery. Discharge residual charge by depressing the brakes or honking the horn so wiring is safe before handling connectors.",
    image: "https://placehold.co/420x220?text=Disconnect+Battery",
    alt: "disconnect battery",
  },
  {
    step: "2",
    title: "Open hood and locate headlight connectors",
    body: "Find the headlight connectors and confirm both left/right lines are accessible.",
    image: "https://placehold.co/420x220?text=Locate+Connectors",
    alt: "locate headlight connectors",
  },
  {
    step: "3",
    title: "Disconnect headlight connectors",
    body: "Carefully unplug the headlight harness from both headlight modules before wiring the Wink Module.",
  },
  {
    step: "4",
    title: "Mount Wink Module",
    body: "Secure the module in a TBD location, using zip ties or bracket mounts to secure it away from heat and water. Ensure the wiring can reach both headlight connectors.",
    image: "https://placehold.co/420x220?text=Mount+Location",
    alt: "mount wink module",
  },
  {
    step: "5",
    title: "Connect headlight connectors to corresponding plugs",
    body: "Plug left and right headlight connectors into the matching module ports. Keep labels aligned.",
    images: [
      { src: "https://placehold.co/200x120?text=Left+Motor", alt: "left headlight plug" },
      { src: "https://placehold.co/200x120?text=Right+Motor", alt: "right headlight plug" },
    ],
  },
  {
    step: "6",
    title: "Plug connector into module box",
    body: "Connect the main harness to the module box. Confirm clip locks and has a secure fit before continuing.",
    image: "https://placehold.co/420x220?text=Plugin+Module",
    alt: "plug connector into module",
  },
  {
    step: "7",
    title: "Install app and allow services",
    body: "Download the Open Wink app from your app store and grant Bluetooth/WiFi and location services.",
  },
  {
    step: "8",
    title: "Connect to module",
    body: "Open app, select your module, complete onboarding, and run the first handshake test.",
  },
  {
    step: "9",
    title: "Wink and customize app",
    body: "Use the app to test the wink action, set preferences, and enjoy your one-touch controls.",
  },
];

const requirements = [
  "Compatible vehicle with compatible headlight motors. (1989-1997 NA Miata)",
  "Android tbd+ or iOS tbd+",
  "Bluetooth Access",
  "10 to 15 minutes install time",
];

export default function InstallationGuide() {
  return (
    <div className="installation-page">
      <div className="content-container">
        <section className="hero-panel">
          <div className="hero-content">
            <p className="eyebrow">Install Guide</p>
            <h1>Install Your Wink Module</h1>
            <p className="hero-copy">
              Follow this step by step guide to install your Wink Module, complete first time setup, and start using the Open Wink mod features safely.
              We keep the process simple and reliable for both first time modders and seasoned DIYers.
            </p>
            <div className="hero-buttons">
              <a className="cta-button-shared primary" href="#install-flow">Start Setup</a>
              <a className="cta-button-shared ghost" href="#requirements">Requirements</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image-wrap-img" src="https://placehold.co/300?text=Installation" alt="Open Wink installation" />
          </div>
        </section>

        <section className="section-block">
          <div className="section-head">
            <h2 id="requirements">What You Need</h2>
            <p>Before you start, confirm you have these items ready.</p>
          </div>
          <ul className="requirements-list">
            {requirements.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section id="install-flow" className="section-block">
          <div className="section-head">
            <h2>Installation Instructions</h2>
            <p>Refer to the following steps. If you need more help, feel free to reach out for more detailed support.</p>
          </div>
          <div className="install-flow">
            {installFlowSteps.map((step) => (
              <article className="flow-item" key={step.step + step.title}>
                <div className="flow-copy">
                  <div className="flow-top"><span className="flow-number">Step {step.step}</span></div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                {(step.image || step.images) && (
                  <div className="flow-image-wrap">
                    {step.image && <img src={step.image} alt={step.alt ?? step.title} />}
                    {step.images && (
                      <div className="flow-two-images">
                        {step.images.map((image) => (
                          <img key={image.src} src={image.src} alt={image.alt} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-head">
            <h2>Need help?</h2>
            <p>
              If you encounter any issues, verify wiring, and use the checklist below or contact support for assistance.
            </p>
          </div>
          <div className="support-box">
            <h3>Troubleshooting Checklist</h3>
            <ul>
              <li>Connectors are securely connected.</li>
              <li>App detects and connects to the Wink Module.</li>
              <li>Bluetooth and location services are enabled.</li>

            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}