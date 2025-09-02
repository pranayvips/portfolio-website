"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
 

interface ProjectItemProps{
    image:string,
    name:string
}

export function ProjectItem({image,name}:ProjectItemProps) {
  return (
    <Card className="relative max-w-md shadow-none">
      <CardHeader>
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
          <img
            src={image}
            alt="image placeholder"
            className="h-[150px] mx-auto"
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{name}</CardTitle>
        {/* <CardDescription>
          See our latest and best camp destinations all across the five
          continents of the globe.
        </CardDescription> */}
      </CardContent>
      {/* <CardFooter className="space-x-4">
        <Button>Let&apos;s go</Button>
        <Button variant="secondary">Another time</Button>
      </CardFooter> */}
    </Card>
  );
}