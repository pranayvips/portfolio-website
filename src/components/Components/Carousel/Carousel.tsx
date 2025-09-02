/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import { useEffect, useState, useRef } from "react";
import { motion, type PanInfo, useMotionValue, useTransform } from "motion/react";
import React, { type JSX } from "react";
import { faPython, faAngular, faNodeJs, faHtml5, faCss3, faJs, faReact, } from "@fortawesome/free-brands-svg-icons";


// replace icons with your own if needed
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
export interface CarouselItem {
  img: string;
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
  lang: Array<any>;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

interface CourseSkillProps{
    skills: string[],
}
const CourseSkill = ({skills}:CourseSkillProps) => {
    return <div className='flex gap-5'>
        {skills.map((val , index) => (
        <div key={index} className="text-2xl">
          {courseSkillIcon[val.toLowerCase() as keyof typeof courseSkillIcon] ?? <span>{val}</span>}
        </div>
      ))}
    </div>
}
const courseSkillIcon = {
    python: <FontAwesomeIcon icon={faPython} />,
    node: <FontAwesomeIcon icon={faPython} />,
    angular: <FontAwesomeIcon icon={faAngular} />,
    html: <FontAwesomeIcon icon={faHtml5} />,
    css: <FontAwesomeIcon icon={faCss3} />,
    js: <FontAwesomeIcon icon={faJs} />,
    react: <FontAwesomeIcon icon={faReact} />,
    mongo: <svg viewBox="0 0 32 32" height={25} width={25} xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <defs>
                    <linearGradient id="a" x1="-645.732" y1="839.188" x2="-654.59" y2="839.25" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.231" stop-color="#999875"></stop>
                        <stop offset="0.563" stop-color="#9b9977"></stop>
                        <stop offset="0.683" stop-color="#a09f7e"></stop>
                        <stop offset="0.768" stop-color="#a9a889"></stop>
                        <stop offset="0.837" stop-color="#b7b69a"></stop>
                        <stop offset="0.896" stop-color="#c9c7b0"></stop>
                        <stop offset="0.948" stop-color="#deddcb"></stop>
                        <stop offset="0.994" stop-color="#f8f6eb"></stop>
                        <stop offset="1" stop-color="#fbf9ef"></stop>
                    </linearGradient>
                    <linearGradient id="b" x1="-644.287" y1="823.405" x2="-657.028" y2="845.476" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#48a547"></stop>
                        <stop offset="1" stop-color="#3f9143"></stop>
                    </linearGradient>
                    <linearGradient id="c" x1="-643.386" y1="839.485" x2="-652.418" y2="833.417" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#41a247"></stop>
                        <stop offset="0.352" stop-color="#4ba74b"></stop>
                        <stop offset="0.956" stop-color="#67b554"></stop>
                        <stop offset="1" stop-color="#69b655"></stop>
                    </linearGradient>
                </defs>
            <title>file_type_mongo</title>
            <path d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z" style={{"fill":"url(#a)"}}></path>
            <path d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z" style={{"fill":"url(#b)"}}></path>
            <path d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z" style={{"fill":"url(#c)"}}></path>
        </g>
    </svg>
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    img: "/courses/dsa.webp",
    title: "The Complete Data Structures and Algorithms Course in Python",
    description: "Cool text animations for your projects.",
    lang:["html","css","js"],
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
  },
  {
    img: "/courses/frontend.jpg",
    title: "The Complete Data Structures and Algorithms Course in Python",
    description: "Smooth animations for your projects.",
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
    lang:["html","css","js"],
  },
  {
    img: "/courses/mern.webp",
    title: "The Complete Data Structures and Algorithms Course in Python",
    description: "Reusable components for your projects.",
    lang:["html","css","js"],
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round
          ? "rounded-full "
          : "rounded-[24px]"
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? "items-center justify-center text-center bg-[#060010] border-0"
                  : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={`${round ? "p-0 m-0" : "mb-4 p-5"}`}>
                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
                  {item.icon}
                </span>
              </div>
              <div><img src={item.img} alt="" /></div>
              <div className="p-5">
                <div className="mb-1 font-black text-lg text-white">
                  {item.title}
                </div>
                {/* <p className="text-sm text-white">{item.description}</p> */}
                <p className="text-sm text-white">{<CourseSkill skills={item.lang} />}</p>
                <InteractiveHoverButton className='w-30 h-10 rounded-sm'>Link</InteractiveHoverButton>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
