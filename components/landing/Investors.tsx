import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  button,
  Image,
} from "@nextui-org/react";

// import { QuickLink } from "@/types";

interface InvestorsProps {
  id?: string;
  //   links: QuickLink[];
}

export const Investors: React.FC<InvestorsProps> = ({ id }) => {
  const [selectedInvestor, setSelectedInvestor] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState(false);

  const handleOpen = () => {
    setBackdrop(true);
    onOpen();
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const investors = [
    {
      name: "Abdullahi Bukar",
      src: "https://i.pravatar.cc/150?u=0",
      role: "Board Director",
      bio: `Oil & Gas Facilities and Field Development Engineer with 50 years’ experience in Nigeria’s energy sector, former Shell GM, ex-NNPC Director.`,
      fullBio: `A 1972 graduate from the University of South Wales and an alumnus of Barewa College, Abdullahi Bukar was born on 25th July 1948 in Daura, Katsina State. He is an all-round oil and gas Facilities and Field development Engineer with 50 years’ experience in the Nigerian Oil and Gas Industry. He has a sound understanding of the international and local oil and gas industry and a well proven track record of gas development. As General Manager Facilities in Shell Nigeria, he managed several technically and commercially complex large budget projects in excess of US$0.500 billion involving large multi-cultural/multi-discipline teams.

He has established long standing relationships with E&P professionals internationally and locally and a good understanding of the key issues of the Nigerian Oil & Gas Industry especially in relation to matters of the Niger-Delta where he has long standing relationships spanning more than 35 years. Currently serving on the Board of Frontier Oil Limited, as well as its Director for Engineering, and was at one time in Seven Energy Ltd, and helped deliver the largest Indigenous Gas producer to the Power Sector in the Eastern part of Nigeria. A Fellow of the Nigerian Society of Engineers and COREN registered engineer, he was a Non-Executive Director on the Board of NNPC during July 2012 through June 2015.

He became a member of the Daura Emirate Council as Sarkin Kudu, in 2008. He is married to Rakiya and blessed with children and grandchildren.`,
    },
    {
      name: "Ade Dare",
      src: "https://i.pravatar.cc/150?u=1",
      role: "Board Director",
      bio: `Over 34 years’ Oil & Gas experience spanning Shell Nigeria, Netherlands, and West African Gas Pipeline project. Expert in Gas Monetisation.`,
      fullBio: `Has over 34 years of well-rounded experience in Oil & Gas industry with extensive (equally split) technical and commercial background in Exploration & Production, Gas & Power and verifiable record of pivotal roles played in Nigeria and the Netherlands (as Deputy Corporate Production Technologist, Business Planning/Economics, Partner Liaison and Capital Investment Proposal coordination).

Ade served as SPDC Coordinator for the West African Gas Pipeline project development until final investment decision in 2004. This maiden $700mln cross-border project was conceived to deliver Nigerian gas through Benin and Togo to foundation customers in Ghana. He is a Subject Matter Expert on Gas Monetisation and negotiated related value chain agreements - upstream gas sale to Nigeria LNG, Domestic Gas Sale/Aggregation, Gas/Crude Handling, Infrastructure, Payment Securitisation and deal delivery.

He championed the maturation of the opportunity that led to unprecedented delivery of non-NLNG equity partner gas. Ade is presently pioneer Managing Partner of Upstream Commercial Advisory Limited, where he has served as forensic expert in claim of damages relating to a repudiated gas agreement. Ade is on the Board of PetrOcean Nigeria Limited.`,
    },
    {
      name: "Dimieari Von Kemedi",
      src: "https://i.pravatar.cc/150?u=2",
      role: "Board Director",
      bio: `Investor, entrepreneur and environmentalist; Founder & CEO of Alluvial, championing agriculture and fintech ventures across Africa.`,
      fullBio: `Dimieari Von Kemedi is an African investor, entrepreneur, environmentalist and thought leader. Von has founded several companies spanning agriculture, food and retail, fintech, logistics and renewable energy in more than 8 African countries. As Founder and CEO of Alluvial, a private sector group working to provide direct access to finance, technology, mechanization, inputs and markets for 2,000,000 African farmers Von has already reached 5% of the target figure with the support of Mastercard Foundation, IDH Trade and several financial institutions.

Kemedi also founded Angala Fintech, which promotes financial and digital inclusion to help small businesses grow. He was formerly Director General of Due Process and Electronic Governance in Bayelsa State and has served with the UNDP and UN Panel of Experts on Liberia. He holds a law degree and has worked as a Visiting Fellow at UC Berkeley. Von is currently enrolled at the Frankfurt School of Finance and Management to be a certified Climate and Renewable Energy Finance expert.`,
    },
    {
      name: "Gabriel Osayande",
      src: "https://i.pravatar.cc/150?u=3",
      role: "Board Director",
      bio: `Nearly 40 years in oil & gas, former Shell Nigeria executive, geoscientist, and sustainable development leader.`,
      fullBio: `He is an executive in the oil and gas industry with nearly 40 years of diverse local and international experience in leading and managing multi-cultural teams mostly in Shell Nigeria and the Nederlandse Ardolie Maatchapij (a Shell/Exxon JV) in the Netherlands.

With BSc, MSc and MBA degrees, he attended leadership education at Wharton. A fellow of the Nigerian Association of Petroleum Explorationists and COMEG registered geoscientist, he has deep appreciation of Niger Delta communities. He created the Shell Community Development and Transformation Index (SCODTI) and led several Shell technology and R&D initiatives. He championed the Shell Centre of Excellence for Geosciences and Petroleum Engineering at the University of Benin.

He is currently CEO of BOJ Energy Limited, Lekosa Nigeria Limited, and a director at Mercator Technologies, PaySimple Technologies, and others.`,
    },
    {
      name: "Hezekiah Sola Oyinlola",
      src: "https://i.pravatar.cc/150?u=4",
      role: "Board Chairman, GTCO",
      bio: `Over 35 years in Schlumberger, ex-Group Treasurer, Global Head of Sustainability & ESG, Board Chair of GTCO, investor and finance expert.`,
      fullBio: `Mr. Oyinlola holds a B.Sc in Accounting (First Class Hons.) from University of Ghana, Legon and an MBA from Stanford University. He is an alumnus of Oxford University’s Institute for Energy Studies and has attended executive and board governance courses globally.

He worked with Schlumberger Group from 1984 to 2015, holding senior roles across the US, Europe, Asia and Africa, including VP & Group Treasurer, Chairman Africa, and pioneer Global Head of Sustainability & ESG. He was also previously President of the Schlumberger Foundation.

Since 2014, he has been director of Guaranty Trust Bank and in 2021 became Chairman of Guaranty Trust Holding Company plc (GTCO). He is also a member on boards including Shelf Drilling Offshore Nigeria and FSD Africa. He is Chairman of the Nigerian American Chamber of Commerce in Houston.`,
    },
    {
      name: "Ernest Olufemi Akinmade",
      src: "https://i.pravatar.cc/150?u=5",
      role: "Board Director",
      bio: `Over 50 years Oil & Gas experience, pioneer in deep drilling discoveries in Niger Delta, ex-GM Exploration at Agip.`,
      fullBio: `Has over 50 years Oil and Gas experience. Graduated B.Sc. in Geology from University of Ibadan and M. Sc. in Petroleum Geology from the University of Tulsa, USA. His thesis “Abnormal Fluid Pressure in the Subsurface of the Niger Delta” influenced early deep discoveries in the Niger delta.

He was seconded to ENI in Italy and later became GM Exploration at Nigerian Agip Oil Company Ltd, where he coordinated exploration business development. He was involved in setting up Nigerian Agip Exploration Ltd for Deepwater and put Nigeria’s first deepwater field into production. He was also an Executive Director and Board Member of NAOC and NAE. He is currently a consultant at Professionals Experts and Energy Company Limited.`,
    },
    {
      name: "Precious Omuku",
      src: "https://i.pravatar.cc/150?u=6",
      role: "Board Director",
      bio: `Former Shell Nigeria Chief Geologist, later External Affairs Director; Bishop and strategic advisor on African energy and governance.`,
      fullBio: `A professional geologist, Omuku held senior positions in Shell Nigeria and Shell UK, including Chief Geologist and later Executive Director External Affairs. He was Chairman, Board of Shell Nigeria Gas and Senior Advisor, Shell International, London until retirement. He is a past President of the Nigerian Association of Petroleum Explorationists (NAPE), Fellow of NAPE and NMGS, and recipient of NAPE’s highest award.

He has served on the boards of ABU Zaria, Nigerian Mining Corp, and Rivers State Sustainable Development Agency. He is also a Bishop in the Diocese of Southwark, Church of England, and the Archbishop of Canterbury’s Special Representative on Conflict in Sub-Saharan Africa. He is chairman of BOJ Energy Ltd and Alluvial Trade Advisory Board.`,
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((investor, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedInvestor(investor);
                handleOpen();
              }}>
              <Card
                key={i}
                className="p-4 bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-all border border-gray-300/50 dark:border-gray-800 cursor-pointer">
                <CardHeader className="justify-between">
                  <div className="flex gap-6">
                    <Avatar
                      radius="full"
                      size="lg"
                      src={`https://i.pravatar.cc/150?u=${i}`} // placeholder avatar
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
                  <p className="line-clamp-3">{investor.bio}</p>
                  {/* line-clamp ensures truncation to 3 lines */}
                </CardBody>
              </Card>
            </button>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          backdrop="blur"
          size="lg"
          scrollBehavior="inside">
          <ModalContent className="p-4 py-8">
            {(onClose) => (
              <>
                <ModalBody>
                  <article>
                    <Image
                      className="w-full h-48 pr-4 pb-4 object-cover float-left"
                      src={selectedInvestor?.src}
                      alt={selectedInvestor?.name}
                    />
                    <h2 className="text-2xl font-bold">
                      {selectedInvestor?.name}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {selectedInvestor?.role}
                    </span>
                    <p className="text-gray-700 mt-4 dark:text-gray-300 whitespace-pre-line">
                      {selectedInvestor?.fullBio}
                    </p>
                  </article>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};
