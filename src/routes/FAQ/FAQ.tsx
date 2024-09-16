import "./FAQ.css";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Down from "../../assets/down.svg";

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore.svg';

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
    "What happens if I lose the app connection?",
    "If your settings are set to 'Auto Connect', the app should attempt to regain connection immediately. Otherwise, you will need to press 'Connect' again. If you are still unable to connect to your module, you may want to try to unplug it, and plug it back in."
  ],
  [
    "Can I still control the headlights manually?",
    "Yes, the OEM headlight button will still function as normal. Along with additional double and triple press actions."
  ],
  [
    "What kind of support is offered if something goes wrong?",
    "We do not have 24/7 support as we are an individually run business, but if you contact us about something that went wrong with your module, we will do our best to get back to you in a timely fashion."
  ],
  [
    "How is the Wink Mod powered?",
    "The wink mod is powered directly by the 12V rail that powers the headlight motors. The module often goes to sleep when not being used, only periodically waking to attempt to connect to your phone."
  ],
  [
    "Will the Wink Mod kill my battery?",
    ""
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
    "What if I want to remove the mod later—will it leave any permanent changes?",
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

export default function FAQ() {
  return <div className="faq-page">
    <div className="questions-and-answers">
      <h1 className="faq-header-title">FAQ</h1>
      {
        qas.map((val, i) =>
          <QA question={val[0]} answer={val[1]} key={i} />
        )
      }
    </div>
  </div >
}