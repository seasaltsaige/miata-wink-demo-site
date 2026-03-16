import './HowItWorks.css';
import '../shared/cta.css'

const steps = [
    {
        label: '1. Install & pair',
        title: 'Install module and pair in app',
        description: 'Mount the module in the vehicle, plug into the headlight harness, and connect to the module via Bluetooth in the app for control and configuration.',
        image: 'https://placehold.co/420x240?text=Install+Module'
    },
    {
        label: '2. Set actions',
        title: 'Configure app setup',
        description: 'Set up custom wink and headlight movement actions for for easy access. Set presets to your favorite winks and waves.',
        image: 'https://placehold.co/420x240?text=Configure+App'
    },
    {
        label: '3. Map OEM button',
        title: 'Bind your OEM retractor',
        description: 'Map the OEM retractor button to custom actions; (e.g., wink, wave, sleepy-eye). Keep stock operation intact while adding customizable functionality.',
        image: 'https://placehold.co/420x240?text=Map+Button'
    },
    {
        label: '4. Use anywhere',
        title: 'Control from anywhere',
        description: 'Send movement commands from inside or outside the car. Use saved presets for quick, saved actions.',
        image: 'https://placehold.co/420x240?text=Use+Anywhere'
    },
    {
        label: '5. Diagnostics',
        title: 'Check status and health',
        description: 'Check module connectivity, firmware status, headlight motor health, and module settings from the app.',
        image: 'https://placehold.co/420x240?text=Diagnostics'
    },
];


const appFeatures = [
    {
        title: 'Default Command Presets',
        description: 'Default commands allow you to send predefined, simple actions through a simple control interface. Actions include left, right, and both up, down, wink and blink. Additonally, you are able to send and reset sleepy eye status from this page as well. This is a simple page for quick access to the most common basic commands and actions.',
        image: '/src/assets/App/DefaultCmds.webp'
    },
    {
        title: 'Drag-and-Drop Command Builder',
        description: 'Design custom movements by adding command components, then save and name sequences to run instantly from the home view.',
        image: '/src/assets/App/CreateCustom.webp'
    },
    {
        title: 'Run Saved Commands Quickly',
        description: 'Run saved wink/wave sequences from the command list with a single tap and preview your selected command behavior before executing.',
        image: '/src/assets/App/SendCustom.webp'
    },
    {
        title: 'Quick Links Management',
        description: 'Customize which in app and module settings appear on the home screen for quick and easy access to the most used pages and controls; rearrange, add, and remove quick links to create your preferred, custom layout.',
        image: '/src/assets/App/QuickLinks.webp'
    },


    {
        title: 'Module Settings Center',
        description: 'Change module specific behaviors, allowing auto connection on app start up, swap the orientation of left and right control directions, and manage module sleep and settings storage actions from one page.',
        image: '/src/assets/App/Settings.webp'
    },
    {
        title: 'Wave Delay Tuning',
        description: 'Tune the delay percentage for headlight wave sequences using slider control and preset speed buttons for consistent motion timing.',
        image: '/src/assets/App/WaveDelay.webp'
    },
    {
        title: 'Precise Sleepy-Eye Positioning',
        description: 'Set specific left and right headlight positions with high/middle/low quick presets, plus coarse adjust for fine tuning.',
        image: '/src/assets/App/Sleepy.webp'
    },
    {
        title: 'Custom Button Action Mapping',
        description: 'Map OEM retractor button presses to any saved command sequence—double press, triple press, and more—with a pin to keep stock behavior safe.',
        image: '/src/assets/App/CustomButton.webp'
    },
    {
        title: 'Theme Preview and Selection',
        description: 'Preview app text and button themes in real time, then choose a complete color style for your module interface and reset if needed.',
        image: '/src/assets/App/ColorTheme.webp'
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
                            Use the app for direct actuation and sequence setup; setup the OEM headlight retractor button to run custom actions as well.
                        </p>

                        <div className="hero-buttons">
                            <a className="cta-button-shared primary" href="#tbd">App Overview</a>
                            <a className="cta-button-shared ghost" href="#tbd">Module Overview</a>
                        </div>
                    </div>
                    <div className="hero-card">
                        <h3>Overview</h3>
                        <ul>
                            <li>In app control for wink actions.</li>
                            <li>In app customization for custom sequences.</li>
                            <li>OEM button actions for custom sequences.</li>
                            <li>Modern interface for seamless integration.</li>
                        </ul>
                    </div>
                </section>


                {/* How the app works list */}
                <section className="flow-list">
                    <h1>General Overview</h1>
                    {steps.map((step) => (
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

                {/* Potentially flagged for removal */}

                <section className="how-block">
                    <h2>Using the OEM Retractor Button</h2>
                    <p>
                        Enable custom press actions for the OEM retractor button in the in-app settings. Choose from different desired behaviors; Wink, Wave, Sleepy-Eye, and more.
                        Create custom sequences and assign them to button actions as well.
                        This keeps your stock button functionality while adding customizable functionality.
                    </p>
                </section>


                <section className='flow-list'>
                    <h1>App Features</h1>
                    {appFeatures.map((feature) => (
                        <article key={feature.title} className='flow-row'>
                            <div className='flow-step'>
                                <h2>{feature.title}</h2>
                                <p>{feature.description}</p>
                            </div>
                            <div className='flow-image-wrap'>
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </article>
                    ))}
                </section>

            </div>

        </div>
    )
}
