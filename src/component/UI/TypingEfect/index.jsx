import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./Style.css";

// Register TextPlugin with gsap
gsap.registerPlugin(TextPlugin);

const TypingEffect = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(textRef.current, {
      duration: 2,
      text: text,
      ease: "none",
      repeat: Infinity,
      repeatDelay: 1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, [text]);

  return <span ref={textRef} className="typing-effect"></span>;
};

export default TypingEffect;
