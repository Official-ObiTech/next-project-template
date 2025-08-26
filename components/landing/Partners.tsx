import Image from "next/image";

const Partners = () => {
  return (
    <div className="py-8">
      {/* Global CSS for smooth scrolling and fade edges */}
      <style jsx global>{`
        .carousel {
          position: relative;
          overflow: hidden;
        }

        .partnerTrack {
          display: flex;
          align-items: center;
          gap: 56px; /* ~mx-7 on children */
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        .partnerTrack:hover {
          animation-play-state: paused;
        }

        .partnerItem {
          height: 64px; /* h-16 */
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.8;
          transition:
            filter 0.3s ease,
            opacity 0.3s ease;
        }

        .partnerItem:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel::before,
        .carousel::after {
          content: "";
          position: absolute;
          width: 120px;
          height: 100%;
          top: 0;
          z-index: 10;
          pointer-events: none;
        }

        // .carousel::before {
        //   left: 0;
        //   background: linear-gradient(
        //     to right,
        //     rgba(0, 0, 0, 0.35),
        //     transparent
        //   );
        // }

        // .carousel::after {
        //   right: 0;
        //   background: linear-gradient(
        //     to left,
        //     rgba(0, 0, 0, 0.35),
        //     transparent
        //   );
        // }
      `}</style>

      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center mb-6">
        Some of our financial partners
      </h2>

      <div className="carousel max-w-7xl mx-auto">
        {/* Track duplicated for seamless loop */}
        <div className="partnerTrack">
          {/* Sequence A */}
          <Image
            src="https://getlogo.net/wp-content/uploads/2020/04/idh-the-sustainable-trade-initiative-logo-vector.png"
            alt="IDH Sustainable Trade Initiative"
            width={160}
            height={64}
            className="partnerItem"
          />
          <Image
            src="https://seeklogo.com/images/M/mercy-corps-logo-3436282F9C-seeklogo.com.png"
            alt="Mercy Corps"
            width={160}
            height={64}
            className="partnerItem"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/8b/USAID-Identity.svg"
            alt="USAID"
            width={160}
            height={64}
            className="partnerItem"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Winrock_International_logo.svg"
            alt="Winrock International"
            width={200}
            height={64}
            className="partnerItem"
          />

          {/* Sequence B (duplicate) */}
          <Image
            src="https://getlogo.net/wp-content/uploads/2020/04/idh-the-sustainable-trade-initiative-logo-vector.png"
            alt="IDH Sustainable Trade Initiative"
            width={160}
            height={64}
            className="partnerItem"
          />
          <Image
            src="https://seeklogo.com/images/M/mercy-corps-logo-3436282F9C-seeklogo.com.png"
            alt="Mercy Corps"
            width={160}
            height={64}
            className="partnerItem"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/8b/USAID-Identity.svg"
            alt="USAID"
            width={160}
            height={64}
            className="partnerItem"
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Winrock_International_logo.svg"
            alt="Winrock International"
            width={200}
            height={64}
            className="partnerItem"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
