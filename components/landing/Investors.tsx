import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

// import { QuickLink } from "@/types";

interface InvestorsProps {
  id?: string;
  //   links: QuickLink[];
}

export const Investors: React.FC<InvestorsProps> = ({ id }) => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const investors = [
    {
      name: "Zoey Lang",
      role: "Frontend Developer",
      bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      name: "Zoey Lang",
      role: "Frontend Developer",
      bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      name: "Zoey Lang",
      role: "Frontend Developer",
      bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      name: "Zoey Lang",
      role: "Frontend Developer",
      bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      name: "Zoey Lang",
      role: "Frontend Developer",
      bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      name: "Zoey Lang",
      role: "Frontend Developer",
      bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      name: "Zoey Lang",
      role: "Frontend Developer",
      bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
    {
      name: "Zoey Lang",
      role: "Frontend Developer",
      bio: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    },
  ];

  return (
    <section
      id={id}
      className="scroll-mt-24 md:scroll-mt-28 py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            Investor Relations
          </h2>
          <p className="text-lg text-gray-600 max-w-7xl mx-auto dark:text-gray-400">
            Investor relations is the management of investments by an
            organization, usually for the purpose of raising capital and
            managing risk. It includes the activities of investment managers,
            investment banks, and other financial institutions. Investor
            relations is a critical function for companies seeking to attract
            and retain investors and to build trust in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {investors.map((investor) => (
            <Card className="p-4 bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-all border border-gray-300/50 dark:border-gray-800">
              <CardHeader className="justify-between">
                <div className="flex gap-6">
                  <Avatar
                    radius="full"
                    size="lg"
                    src="https://heroui.com/avatars/avatar-1.png"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      {investor.name}
                    </h4>
                    <h5 className="text-xs tracking-tight text-default-400">
                      {investor.role}
                    </h5>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-500 dark:text-default-400">
                <p>{investor.bio}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
