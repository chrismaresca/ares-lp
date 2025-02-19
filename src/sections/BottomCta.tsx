// Constants
import { bottomCTAConstants, CONTACT_US_CALL_LINK } from "@/constants/website";
import { MotionButtonWithCustomIcon } from "@/components/buttons/motion-button-with-icon";

export default function BottomCta() {
  return (
    <section className=" flex items-center justify-center pb-16 overflow-hidden  intersect-once intersect:motion-preset-slide-up motion-delay-200 motion-duration-800 motion-ease-in-out">
      <div className="container">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex items-center justify-center">
          <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
            <h2 className="mb-8 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">{bottomCTAConstants.title}</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">{bottomCTAConstants.description}</p>

            <MotionButtonWithCustomIcon size="lg" textOptions={{ textOptions: [{ text: bottomCTAConstants.cta, href: CONTACT_US_CALL_LINK }], blank: true }} fromColor="bg-primary" toColor="bg-black" switchTextColor={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
