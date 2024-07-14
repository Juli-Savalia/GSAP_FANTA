import { gsap } from "../../node_modules/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Section2 from "../component/Section2";

let TL = gsap.timeline();

TL.to(Section2, {
  ScrollTrigger: {
    trigger: Section2,
    start: "50% 50%",
    end: "100% 50%",
    scrub: true,
    markers: true,
  },
});
