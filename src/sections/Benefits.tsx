import { DEMO_BUTTON_TEXT, CONTACT_US_CALL_LINK, BENEFITS_CONSTANTS } from "@/constants/website";
import { MotionButtonWithCustomIcon } from "@/components/buttons/motion-button-with-icon";

const BenefitCard = ({ card }: { card: (typeof BENEFITS_CONSTANTS.cards)[0] }) => {
  const Icon = card.icon;

  return (
    <div className="p-8 flex flex-col items-center text-center">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <h3 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">{card.stat}</h3>
      <p className="mb-4 text-base font-medium text-gray-800">{card.label}</p>
      <p className="text-[14px] mt-3 leading-relaxed text-gray-500 max-w-[280px]">{card.description}</p>
    </div>
  );
};

export default function Benefits() {
  return (
    <section className="container pt-24 intersect-once intersect:motion-preset-slide-up motion-delay-200 motion-duration-800 motion-ease-in-out" id="features">
      <div className="mx-auto max-w-[1000px] text-center space-y-8 mb-32">
        <p className="text-sm tracking-widest mb-6 text-muted-foreground font-medium uppercase">{BENEFITS_CONSTANTS.badge}</p>
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.4] sm:leading-[1.4]">
            {BENEFITS_CONSTANTS.title.firstLine.beforeItalic} <span className="italic font-serif">{BENEFITS_CONSTANTS.title.firstLine.italic}</span> {BENEFITS_CONSTANTS.title.firstLine.afterItalic}
            <br className="hidden sm:block" /> {BENEFITS_CONSTANTS.title.secondLine.before}
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">{BENEFITS_CONSTANTS.description}</p>
        </div>
        <div className="flex justify-center">
          <MotionButtonWithCustomIcon
            size="lg"
            textOptions={{
              textOptions: [{ text: DEMO_BUTTON_TEXT, href: CONTACT_US_CALL_LINK }],
              blank: true,
            }}
            fromColor="bg-primary"
            toColor="bg-black"
            switchTextColor={false}
          />
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-white shadow-[0_8px_40px_rgb(0,0,0,0.08)] backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {BENEFITS_CONSTANTS.cards.map((card, i) => (
              <BenefitCard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
