import "./LearnMore.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Down from "../../assets/down.svg";
import RightArrow from "../../assets/RightArrow.svg";
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
    "The base model starts at $125, with customization options available to be made, by request."
  ],
  [
    "Can I request customization of the app and/or module?",
    "Unfortunately, this option is generally only available for Android devices, as iOS makes it difficult to side-load any sort of app. If you own an iPhone, and wish for customization, you will need an Apple Developer account to be able to do so."
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
    "How is the Wink Mod powered?",
    "The wink mod is powered directly by the 12V rail that powers the headlight motors. The module often goes to sleep when not being used, only periodically waking to attempt to connect to your phone."
  ],
  [
    "Is there a way to update the software on the Wink Mod?",
    "Yes, updates are uploaded to the cloud, and the wink controller app will scan for updates when the app connects to your module. If one is found, you will be able to follow on app instructions on how to update the module."
  ],
  [
    "Can I customize the wink speed or behavior?",
    "Wink speed is proportional to the Voltage that is delivered to the headlight motor. While the car is on, it will be slightly faster than while it is off. As for behavior, there are custom presets that you can create to have saved sequences!"
  ],
  [
    "What if I want to remove the mod later — will it leave any permanent changes?",
    "Since this mod is entirely plug and play, there are no modifications made to the cars wiring harness, meaning it is able to revert to OEM condition."
  ],
]

const QA = ({ question, answer }: { question: string, answer: string }) => {
  return <Accordion className="accordion-faq">
    <AccordionSummary className="accordion-header" expandIcon={<Down />} >
      {question}
    </AccordionSummary>
    <AccordionDetails className="accordion-details">
      {answer}
    </AccordionDetails>
  </Accordion>
}

const comparisons = [
  { value: "High quality, high temp rated materials", ours: 2, others: 1 },
  { value: "Large amounts of customizations on board", ours: 2, others: 1 },
  { value: "Long range Bluetooth connectivity & controller", ours: 2, others: 1 },
  { value: "Modern and intuitive app for easy use", ours: 2, others: 0 },
  { value: "Frequent updates to both wink module and app", ours: 2, others: 0 },
  { value: "Color customization for casing and wiring", ours: 2, others: 0 },
  { value: "Competitive pricing", ours: 2, others: 0 },
]


export default function LearnMore() {

  const { width } = useWindowDimensions();

  return <div className="learn-more-page">
    <div className="content-container">
      <div className="what-is-it">
        <h1 className="wink-mod-header">
          What is a 'Wink Mod?'
        </h1>
        <p className="wink-mod-description">
          A 'Wink Mod' refers to the ability to wink your Miata's headlights. This means 'blinking' one headlight instead of both.
          Often times people also include the ability to move the headlights to an arbitrary position, rather than all the way in one direction. This is referred to as 'Sleepy Eye.'
          Winking is often done by disconnecting one of the headlight connectors, to only allow one headlight to operate normally.
          While this does achieve the goal of 'Winking' the headlights, this is both inefficient, and dangerous.
        </p>
      </div>

      <div className="how-it-works">
        <h1 className="wink-mod-header">
          How the Wink Mod works
        </h1>
        <div className="install-brief">
          <div className="plug-and-play-img">
            <img src="/lear_more_connector.jpg" alt="Plug and Play Connectors" />
          </div>
          <div className="plug-and-play-container">
            <h2 className="install-in-minutes">
              Install in minutes
            </h2>
            <p className="plug-and-play-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas, officia suscipit provident corporis atque architecto molestiae vel nisi ex quasi cum quos rerum at voluptatibus odio modi tempore vero.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae esse incidunt reprehenderit quasi omnis suscipit aliquam explicabo id sapiente nihil, quis rerum atque, mollitia autem ullam eaque provident doloremque repellendus?
            </p>
            <Link className="cta-button-info" to="/gallery">
              See it in action <RightArrow />
            </Link>
          </div>
        </div>
        <div className="application-brief">
          <div className="app-container">
            <h2 className="app-compatibility">
              Works on iOS and Android
            </h2>
            <p className="app-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas, officia suscipit provident corporis atque architecto molestiae vel nisi ex quasi cum quos rerum at voluptatibus odio modi tempore vero.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae esse incidunt reprehenderit quasi omnis suscipit aliquam explicabo id sapiente nihil, quis rerum atque, mollitia autem ullam eaque provident doloremque repellendus?
            </p>
            <div className="install-container">
              {/* TODO: Update links with actual app links when app is uploaded to app stores */}
              <a href="https://play.google.com/store/games?hl=en_US">
                <GetOnGooglePlay />
              </a>
              <a href="https://www.apple.com/app-store/">
                <GetOnAppStore />
              </a>
            </div>
          </div>
          <div className="app-image-container">
            <img src="/learn_more_app_image.jpg" alt="App Image" />
          </div>

        </div>
      </div>

      <div className="why-us">
        <h1 className="wink-mod-header why-choose-us-header">
          Why choose us?
        </h1>
        {
          width > 750 ?
            <div className="why-us-table-compare">
              <h2 className="why-us-header"></h2>
              <h2 className="why-us-header">Our mod</h2>
              <h2 className="why-us-header">Other mods</h2>

              {
                comparisons.map(val => <>
                  <h3 className="feature-text">{val.value}</h3>
                  <div className="feature-ours">{val.ours === 2 ? <Checkmark /> : val.ours === 1 ? <Questionmark /> : <Xmark />}</div>
                  <div className="feature-others">{val.others === 2 ? <Checkmark /> : val.others === 1 ? <Questionmark /> : <Xmark />}</div>
                </>)
              }
            </div>
            :
            <div className="why-us-table">
              {comparisons.map(() => <></>)}
            </div>

        }
      </div>

      <div className="customization-options">

      </div>

      <div className="faq-section">
        <h1 className="wink-mod-header">
          Frequently asked questions
        </h1>
        <div className="questions-and-answers">
          {
            qas.map((val, i) =>
              <QA question={val[0]} answer={val[1]} key={i} />
            )
          }
        </div>

      </div>

    </div>
  </div>
}