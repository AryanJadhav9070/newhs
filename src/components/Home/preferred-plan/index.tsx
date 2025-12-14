"use client";

import { useReducer, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getImgPath } from "@/utils/imagePath";

const TickIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 25"
    className="shrink-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12.5" cy="12.5" r="12.5" fill="#F3FAFF" />
    <path
      d="M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z"
      fill="#2F73F2"
    />
  </svg>
);

interface State {
  planType: string;
  basicPrice: number;
  professionalPrice: number;
  enterprisePrice: number;
  duration: string;
}

interface Action {
  type: string;
  payload: {
    duration: string;
    basicPrice: number;
    professionalPrice: number;
  };
}

const initialTabConfig: State = {
  planType: "monthly",
  basicPrice: 9999,
  professionalPrice: 14999,
  enterprisePrice: 30000,
  duration: "month",
};

const Preferred = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const [tabConfig, dispatch] = useReducer(reducer, initialTabConfig);
  const pathname = usePathname();

  function reducer(tabConfig: State, action: Action): State {
    switch (action.type) {
      case "monthly":
      case "annually":
        return {
          ...tabConfig,
          planType: action.type,
          basicPrice: action.payload.basicPrice,
          professionalPrice: action.payload.professionalPrice,
          duration: action.payload.duration,
        };
      default:
        return tabConfig;
    }
  }

  return (
    <section
      className={`dark:bg-darkmode ${
        pathname === "/" ? "py-20" : "-mt-52 pt-72 pb-20"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-secondary dark:text-white">
            Choose your website plan
          </h2>
          <p className="text-base font-normal text-SlateBlue dark:text-darktext mt-4">
            Pick a one-time website package that fits your goals today, and
            upgrade later as your business grows.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10">
          <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {/* Left highlight banner */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="shadow-plan_shadwo rounded-3xl overflow-hidden"
            >
              <div className="relative h-full bg-primary">
                <img
                  src={getImgPath("/images/price-plan/plan-image.png")}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center">
                  <div className="px-8 py-10">
                    <p className="text-white text-[22px] sm:text-3xl leading-[1.4] font-normal">
                      Most founders start with
                      <span className="font-bold">
                        {" "}
                        Growth Website package
                      </span>
                    </p>
                    <p className="text-white text-base sm:text-lg mt-4 leading-relaxed">
                      For serious businesses that want a high-converting,
                      SEO-ready website from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic */}
            <PricingCard
              title="Basic"
              price={tabConfig.basicPrice}
              description="Best for new businesses and personal brands."
              features={[
                "4 page website",
                "Basic SEO optimization",
                "Live chat integration",
                "5 Days support + 2 revisions",
                "1 Year hosting + Domain + Free SSL (Free)",
                "Single one time backup",
              ]}
            />

            {/* Professional (highlighted) */}
            <PricingCard
              title="Professional"
              price={tabConfig.professionalPrice}
              description="Best for service businesses that want more leads every month."
              features={[
                "5–8 page website",
                "Advance SEO (10 keywords + On-page SEO)",
                "WhatsApp + Live chat",
                "1 year hosting + Domain + Free SSL + 5 Business Emails",
                "12 Days support + 4 revisions",
              ]}
              highlighted
            />

            {/* Enterprise */}
            <PricingCard
              title="Enterprise"
              price={tabConfig.enterprisePrice}
              description="Best for brands and stores selling products online."
              features={[
                "Product catalogue, cart, and checkout",
                "Online payments integration (GPay, PayTM, PhonePe, credit / debit cards)",
                "Order management dashboard",
                "Performance and basic security hardening",
                "1 year hosting + Domain + Free SSL + 10 Business Emails",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={highlighted ? "400" : "300"}
      data-aos-duration="1000"
      className={`col-span-1 rounded-3xl shadow-plan_shadwo transition-transform duration-200 hover:-translate-y-1 ${
        highlighted ? "border border-primary bg-white/90 dark:bg-darklight" : "dark:bg-darklight"
      }`}
    >
      <div className="flex grow flex-col p-6 sm:p-8 h-full">
        {highlighted && (
          <span className="inline-block mb-3 text-xs font-semibold tracking-wide text-primary uppercase">
            Most popular
          </span>
        )}
        <span className="text-[22px] leading-[2rem] font-bold text-SlateBlue dark:text-darktext pb-1">
          {title}
        </span>
        <div className="mt-1">
          <span className="text-4xl sm:text-5xl font-bold text-secondary dark:text-white">
            ₹{price}
          </span>
        </div>
        <p className="text-SlateBlue dark:text-darktext opacity-80 text-sm sm:text-base mt-4 border-b border-solid border-BorderLine dark:border-dark_border pb-4 leading-relaxed">
          {description}
        </p>
        <ul className="flex flex-col grow gap-3 sm:gap-4 pt-5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <TickIcon />
              <span className="text-sm sm:text-base text-SlateBlue dark:text-darktext font-normal leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="#"
          className={`btn mt-8 py-3 rounded-lg text-center w-full ${
            highlighted ? "bg-primary text-white" : ""
          }`}
        >
          Get.Set.Go
        </Link>
      </div>
    </div>
  );
};

export default Preferred;
