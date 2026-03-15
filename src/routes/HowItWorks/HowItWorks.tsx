import './HowItWorks.css';
import '../shared/cta.css'

const steps = [
    {
        label: '1. Install & pair',
        title: 'Install module and pair in app',
        description: 'Mount the module, plug into the headlight harness, and power it. Open the app and complete Bluetooth pairing and setup.',
        image: 'https://placehold.co/420x240?text=Install+Module'
    },
    {
        label: '2. Set actions',
        title: 'Configure app setup',
        description: 'Set up custom wink and headlight movement actions for quick access. Configure presets for single-tap access to your favorite wink styles and movements.',
        image: 'https://placehold.co/420x240?text=Configure+App'
    },
    {
        label: '3. Map OEM button',
        title: 'Bind your OEM retractor',
        description: 'From settings, map the retract button to a custom action (e.g., wink, 3x flash). Keep stock operation plus the new trigger.',
        image: 'https://placehold.co/420x240?text=Map+Button'
    },
    {
        label: '4. Use anytime',
        title: 'Control from anywhere',
        description: 'Send movement commands from inside or outside the car. Use saved presets for quick, saved actions.',
        image: 'https://placehold.co/420x240?text=Use+Anywhere'
    },
    {
        label: '5. Diagnostics',
        title: 'Check status and health',
        description: 'Check module connectivity, firmware, headlight motor health, and module settings from the app.',
        image: 'https://placehold.co/420x240?text=Diagnostics'
    },
];

export default function HowItWorks() {
    return (
        <div className="how-page">
            <div className="content-container">
                <section className="hero-panel">
                    <div className="hero-content">
                        <p className="eyebrow">How it works</p>
                        <h1>App + Module Walkthrough</h1>
                        <p className="hero-copy">
                            Use the app for direct control and presets, and let your OEM headlight retractor button run custom actions too.
                        </p>
                    </div>
                    <div className="hero-card">
                        <h3>Overview</h3>
                        <ul>
                            <li>In app control for wink actions.</li>
                            <li>In app customization for custom sequences.</li>
                            <li>OEM button mapping for custom trigger.</li>
                            <li>Modern interface for seamless, painless use.</li>
                        </ul>
                    </div>
                </section>

                <section className="flow-list">

                    {steps.map((step, idx) => (
                        <article key={step.label} className="flow-row">
                            <div className="flow-step">
                                <span className="step-pill">{step.label}</span>
                                <h2>{step.title}</h2>
                                <p>{step.description}</p>
                            </div>
                            <div className="flow-image-wrap">
                                <img src={step.image} alt={step.title} />
                            </div>
                        </article>
                    ))}
                </section>

                <section className="how-block">
                    <h2>Using OEM retractor button</h2>
                    <p>
                        Enable custom press actions for your OEM retractor button in the in-app settings, then choose the behavior; Wink, Wave, Sleepy-Eye, and more.
                        This keeps your stock button functionality while adding modern functionality.
                    </p>
                </section>
            </div>
        </div>
    )
}
