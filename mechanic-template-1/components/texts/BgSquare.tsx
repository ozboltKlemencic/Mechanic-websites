import { Props } from "next/script";
import { useEffect, useRef, useState } from "react";

const BgSquare = ({ children }: Props) => {
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
    <span className="relative inline-block px-3 py-2">
      <span className="z-20">{children}</span>

      <span
        ref={ref}
        className={`absolute  left-0 top-0 z-[-1] h-full bg-green-200/35 transition-all delay-500 duration-1000 ${inView ? "w-full" : "w-0"}`}
      />
    </span>
  );
};

export default BgSquare;
