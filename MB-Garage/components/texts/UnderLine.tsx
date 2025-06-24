import { Props } from "next/script";
import { useEffect, useRef, useState } from "react";

const UnderLine = ({ children }: Props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Store the ref value in a variable

    // Ustvarimo IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Ko je element v viewportu, nastavimo stanje
        }
      },
      { threshold: 0.1 } // Nastavimo, da se observer aktivira, ko je 10% elementa videno
    );

    // Opazujemo element
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Čistimo observer, ko je komponenta uničena
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array, runs only once on mount/unmount

  return (
    <span className="relative inline-block px-1.5">
      <span className="z-20">{children}</span>

      <span
        ref={ref}
        className={`underline-after z-10 inline-block bg-center ${inView ? "animated-width z-10" : "z-10"}`}
      />
    </span>
  );
};

export default UnderLine;
