/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  {
    id: "01",
    title: "Air Freight Services",
    img: "https://picsum.photos/seed/air/800/800",
    cta: "View More",
    content: `Our services that are fast and reliable from any point to any destination in the world at very competitive rates.

We diligently choose air carriers to provide you with flexible services to meet your every need.

So, be it charter delivery, express delivery, standard delivery or economy delivery we meet the expectations and needs of each particular customer.

We have more than twenty years of experience. During that time, we’ve become expert in freight transportation by air and all its related services. We work closely with all major airlines around the world.

Ongoing negotiations ensure that we always have the cargo space we need and offer you competitive rates.

Air Freight Services
Time-defined air freight services
- Express
- Direct
- Deferred
- Sea-air and air-sea programs
- Truck-air

Meeting your needs for outsized cargo freight
Outsized cargo requires detailed forward planning and frequent on-site visits.

You can rely on our expertise 24/7 when it comes to aircraft capabilities, costing structures, operational processes, door-todoor transport and global aircraft availability.

We have specialists with backgrounds in load planning, who are experts in securing the most suitable aircraft and airports as well as arranging the necessary special loading equipment for each particular project.

- Nose-loading freighters.
- Ramp-loading aircraft.
- Aircraft with onboard cranes.
- Advising and engineering of required transport frames.
- External crane hire.
- Oversized trucking with permits as part of the project if required.

Dangerous goods transportation by air
Dangerous goods are materials or items with hazardous properties which, if not properly controlled, present a potential hazard to human health and safety, infrastructure and or their means of transport.;

We focus on all 9 classes of dangerous goods and provide a completely dangerous and hazardous goods logistics service.

Classification of dangerous goods is broken down into nine classes according to the type of dangerous materials or items present`,
  },
  {
    id: "02",
    title: "International Parcel Shipping",
    img: "https://picsum.photos/seed/parcel/800/800",
    cta: "View More",
    content: `[We can provide your business with a logistics advantage, shipping your goods internationally with a competitive rate. Our objective is to give the shipper a stress-free shipping experience with reliability, speed, and simple operation, all relying on our global shipping network and automated system. We can help your business grow world-wide.

Our courier service offers a range of direct injection service covering over hundred countries world-wide.

Our Advantages:
•Door to Door
•Fully Tracked
•Multiple Shipping Options
•Shipping Calculator
•Competitive Rate

Our Services - tailor for your budget and speed:
•Express
•Direct Injection
•Postal

Direct Injection Shipping
Direct Injection Shipping is a supply chain model where goods going to the same country are grouped together, flown to the destination country, and then delivered directly to the end-customers by a domestic carrier after clearing customs.

The shipping cost is relatively cheap and the transit time around 5-8 working days.`,
  },
  {
    id: "03",
    title: "Overseas Warehouse",
    img: "https://picsum.photos/seed/warehouse/800/800",
    cta: "View More",
    content: `With our global network in the logistics industry, we strategically placed our fulfilment centers over 4 continents and more than 16 countries. It allows our clients to store their goods in a closer destination to their targeted customers, which will drastically shorten the order fulfillment time. Enabling you to expand the business to international markets, and shipping your orders effortlessly.

Our Overseas logistics includes:

Storage, pick and pack, last mile.
Our locations
North America
Europe
Africa
Asia
Australia`,
  },
  {
    id: "04",
    title: "Ocean Freight Service",
    img: "https://picsum.photos/seed/ocean/800/800",
    cta: "See Case Studies",
    content: `We offer a full range of ocean transportation services – including ocean forwarding, NVOCC consolidation, full container load (FCL) services, less than container load (LCL) services.

Our capabilities include through bills of lading from origin to destination, container load manifest information, expedited transit times, and vendor consolidation programs when dealing with multiple suppliers.

Speed Logistics managers can coordinate special sea-air, air-sea or short-sea shipping programs that represent time-and cost-saving alternatives to traditional transportation services.

With Speed Logistics of ocean services you take advantage of these benefits:
- Experienced personnel
- Flexible schedules
- Fast transit times
- Competitive rates

Ocean Freight Services
- Worldwide export and import
- NVOCC (Non-vessel Operating Common Carriers)
- Less-than-container-load (LCL) services
- Full-container-load (FCL) transportation
- Special project handling
- Breakbulk cargo
- Shipment pre-planning
- Cargo tracking and tracing
- Purchase order management tracking and tracing
- Export customs clearance
- Documentation services
- Marine insurance`,
  },
];

export function Accordion03() {
  // Use an object to track which specific IDs are expanded
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full border mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
      <Accordion type="single" defaultValue="01" collapsible className="w-full">
        {items.map((item) => {
          const isExpanded = expandedItems[item.id] || false;

          return (
            <AccordionItem className="relative border-b last:border-0" value={item.id} key={item.id}>
              <AccordionTrigger className="pl-6 py-6 hover:no-underline hover:bg-slate-50 transition-colors [&>svg]:hidden">
                <h1 className="text-xl md:text-2xl font-bold text-[#0B1F3B] tracking-tight">{item.title}</h1>
              </AccordionTrigger>
              
              <AccordionContent className="p-0 text-muted-foreground w-full grid md:grid-cols-2">
                <div className="px-6 py-8 flex flex-col items-start gap-8">
                  
                  {/* TEXT CONTAINER WITH PREMIUM FADE */}
                  <div className="relative w-full">
                    <div
                      className={cn(
                        "whitespace-pre-wrap text-sm md:text-base leading-relaxed text-slate-700 transition-all duration-500 ease-in-out",
                        !isExpanded ? "max-h-32 overflow-hidden" : "max-h-[2000px]"
                      )}
                    >
                      {item.content}
                    </div>
                    
                    {/* Visual Scent: Fade effect when collapsed */}
                    {!isExpanded && (
                      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    )}
                  </div>

                  {/* REDESIGNED PRIMARY CTA: The Function Toggle */}
                  <Button 
                    onClick={() => toggleExpand(item.id)}
                    className={cn(
                      "bg-[#F47B20] hover:bg-[#d66a1a] text-white px-10 py-6 rounded-lg font-bold uppercase tracking-widest text-xs transition-all duration-300 transform active:scale-95 shadow-md",
                      isExpanded && "bg-[#0B1F3B] hover:bg-[#162e4f]" // Visual change when expanded
                    )}
                  >
                    {isExpanded ? "Close Details" : item.cta}
                  </Button>
                  
                </div>

                <div className="relative min-h-[350px] md:min-h-full overflow-hidden border-t md:border-t-0 md:border-l border-slate-100">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}