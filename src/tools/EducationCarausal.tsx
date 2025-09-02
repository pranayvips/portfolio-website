import { ArcTimeline, type ArcTimelineItem } from "@/components/magicui/arc-timeline";
import { Card } from "@/components/ui/card";
import {
  RocketIcon,
  CubeIcon,
  LockClosedIcon,
  GlobeIcon,
  GearIcon,
  LightningBoltIcon,
  StarIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";

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
            <h1 className="text-lg">Vivekananda Institute of Professional Studies</h1>
            <p className=" text-sm flex justify-between w-full items-center">• CGPA : 8.45 <span className="bg-black text-white p-2 rounded-sm text-xs">2023-2026</span></p>
        </Card>
      }
    ],
  },
];
