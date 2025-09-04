import { ArcTimeline, type ArcTimelineItem } from "@/components/magicui/arc-timeline";
import { Card } from "@/components/ui/card";
import {
  RocketIcon,
  CubeIcon,
  GlobeIcon,
  LightningBoltIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import {  MapPinIcon, School2Icon } from "lucide-react";

export default function EducationCarausal() {
  return (
    <ArcTimeline
      data={TIMELINE}
      defaultActiveStep={{ time: "BCA", stepIndex: 0 }}
      className="select-none"
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 8,
        boundaryPlaceholderLinesCount: 50,
      }}
    />
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "Class 1-5",
    steps: [
      {
        icon: <CubeIcon width={20} height={20} />,
        content:
          "Kendriya Vidyalaya No. 1, Delhi Cantt",
      }
    ],
  },
  {
    time: "Class 6-8",
    steps: [
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Rashtriya Military School, Bangalore",
      }
    ],
  },
  {
    time: "Class 9",
    steps: [
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content:
          "Kendriya Vidyalaya, Prayagraj",
      }
    ],
  },
  {
    time: "Class 10 - 12",
    steps: [
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content: <Card className="p-2 gap-0">
            <h1 className="text-lg">Kendriya Vidyalaya, Thane</h1>
            <ul className="text-xs list-disc text-left ml-5">
                <li>Scored 78% in 10th</li>
                <li>Scored 75% in 12th <br /> (PCM with CS)</li>
            </ul>
        </Card>
      }
    ],
  },
  {
    time: "BCA",
    steps: [
      {
        icon: <RocketIcon width={20} height={20} />,
        content: <Card className="p-2 gap-0">
            {/* <AuroraText className="text-lg text- font-semibold">Vivekananda Institute of Professional Studies</AuroraText> */}
            <h1 className="text-lg font-semibold">Vivekananda Institute of Professional Studies</h1>
            <div className=" text-sm grid grid-cols-[1fr_auto] gap-y-1 w-full">
              <span className="text-sm col-1 row-1 flex items-center gap-2"><School2Icon size={17} /> CGPA : 8.45 </span>
              <span className="bg-black text-white p-2 rounded-sm text-xs col-start-2 row-span-2 text-center my-auto">2023-2026</span>
              <span className="text-xs flex items-center font-normal gap-1"><MapPinIcon size={15} />Pitampura, New Delhi</span>
            </div>
        </Card>
      }
    ],
  },
];
