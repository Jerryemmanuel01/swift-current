import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SponsorImg1 from "../../assets/Images/sponsorImg1.webp";
import SponsorImg2 from "../../assets/Images/sponsorImg2.webp";
import SponsorImg3 from "../../assets/Images/sponsorImg3.webp";
import SponsorImg4 from "../../assets/Images/sponsorImg4.webp";
import SponsorImg5 from "../../assets/Images/sponsorImg5.webp";
const Sponsors = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2000 })] // Auto-slide every 3 seconds
  );
  const sponsors = [
    { sponsor: SponsorImg1 },
    { sponsor: SponsorImg2 },
    { sponsor: SponsorImg3 },
    { sponsor: SponsorImg4 },
    { sponsor: SponsorImg5 },
    { sponsor: SponsorImg3 },
  ];
  return (
    <section className="bg-[#f5f5f5] overflow-hidden">
      <div className="p-10 px-6 w-full lg:max-w-[960px] xl:max-w-[1200px] mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {sponsors.map((sponsor, i) => (
              <div className="flex-[0_0_30%] sm:flex-[0_0_25%] md:flex-[0_0_20%] pl-6" key={i}>
                <img
                  src={sponsor.sponsor}
                  alt=""
                  className="w-[100px] md:w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
