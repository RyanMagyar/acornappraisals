import { background } from "../../app/public";
import { acorn1 } from "../../app/public";
import { acorn2 } from "../../app/public";
import { acorn3 } from "../../app/public";
import Image from "next/image";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <Image
        src={acorn1}
        alt="Acorn"
        className="absolute top-[4.4rem] left-16 w-4 h-4"
      />
      <Image
        src={acorn2}
        className="absolute top-[12.6rem] right-16 w-4 h-4 scale-x-[-1]"
        alt="Acorn"
      />
      <Image
        src={acorn3}
        alt="acorn"
        className="absolute top-[26.8rem] left-12 w-6 h-6"
      />
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.06]">
        <Image
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};
