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
    title: "Disconnect battery and discharge residuals",
    body: "Turn off the car and disconnect the battery. Discharge residual charge in the wiring harness by depressing the brakes a few times or honking the horn until flat, so the wiring is discharged before handling the connectors.",
    image: "https://placehold.co/420x220?text=Disconnect+Battery",
    alt: "Disconnect Battery",
  },
  {
    step: "2",
    title: "Open hood and locate headlight connectors",
    body: "Find the headlight connectors and confirm both left/right lines are accessible.",
    image: "https://placehold.co/420x220?text=Locate+Connectors",
    alt: "Locate Headlight Connectors",
  },
  {
    step: "3",
    title: "Disconnect headlight connectors",
    body: "Carefully unplug the connectors from both headlight motor harnesses before wiring the Wink Module harness.",
  },
  {
    step: "4",
    title: "Mount Wink Module",
    body: "Secure the module in a TBD location, using zip ties or mounting hardware to secure it away from heat and water. Ensure the provided wiring can reach both headlight connectors before securing the module.",
    image: "https://placehold.co/420x220?text=Mount+Location",
    alt: "Mount Wink Module",
  },
  {
    step: "5",
    title: "Connect headlight connectors to corresponding plugs",
    body: "Plug both left and right headlight connectors into the corresponding headlight motor harnesses. The 'left' harness connector will be shorter than the 'right' harness connector.",
    images: [
      { src: "https://placehold.co/200x120?text=Left+Motor", alt: "Left Headlight Plug" },
      { src: "https://placehold.co/200x120?text=Right+Motor", alt: "Right Headlight Plug" },
    ],
  },
  {
    step: "6",
    title: "Plug main connector into mounted module",
    body: "Connect the main harness to the module box. Confirm clip locks in place and securely fits before continuing.",
    image: "https://placehold.co/420x220?text=Plugin+Module",
    alt: "Plug Connector Into Module",
  },
  {
    step: "7",
    title: "Reconnect battery",
    body: "Reconnect the car battery to provide power to the newly installed module, allowing it to power on and connect to the app."
  },
  {
    step: "8",
    title: "Install app and allow services",
    body: "Download the TBD app from your corresponding app store and grant Bluetooth and location services. Location services are required for Bluetooth connectivity and proper app function. (Note: the app does not use location data beyond what is required for Bluetooth connectivity.)",
  },
  {
    step: "9",
    title: "Connect to module",
    body: "Open the app, scan for the newly installed module, and connect. The app will load the default configuration from the module, and you will be able to start using the Wink Mod features. Refer to the 'How It Works' page for a full walkthrough of app features and configurations.",
  },
  {
    step: "10",
    title: "Wink and customize app",
    body: "Use the app to test the wink action, set preferences, and enjoy your one press wireless winks. ;)",
    image: "https://placehold.co/420x220?text=Miata+Winking",
    alt: "Enjoy Winking",
  },
];

const requirements = [
  "A compatible vehicle with compatible headlight motors. (1989-1997 NA Miata)",
  "An Android device running tbd+ or an iOS device running tbd+.",
  "Bluetooth Access and Location Services enabled on your phone.",
  "10 to 15 minutes of installation time.",
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
              Follow this step by step guide to install your new Wink Module, complete setup, and start using the Wink Mod features.
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
            <h2 id="requirements">What You'll Need</h2>
            <p>Before you start, confirm you have the following items ready.</p>
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
            <p>Refer to the following steps. If you need additional help, reach out over email for more detailed support.</p>
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