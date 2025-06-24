import Link from "next/link";

import ROUTES from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="bg-gradient flex h-screen flex-col items-center justify-center gap-y-3 text-black">
      <h1 className="font-montserrat text-4xl font-bold">
        Nekaj je šlo narobe.
      </h1>
      <p className="font-Hind text-2xl font-light text-black/60">
        Stran, ki jo iščeš ne obstaja.
      </p>
      <Link href={ROUTES.HOME} className="pb-3 text-green-500 hover:underline">
        <p className="primary-text-gradient mt-16  font-Hind text-2xl font-bold ">
          Vrni se domov
        </p>
      </Link>
    </div>
  );
}
