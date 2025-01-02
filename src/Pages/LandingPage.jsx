import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { ArrowRightFromLine } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate()

  const handleShorten = (e)=>{
    e.preventDefault()
    if(longUrl) navigate(`/auth?createNew=${longUrl}`)
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-6xl text-white text-center font-medium">
        Make Every Click Count with Shortened URLs. <br /> Shorten. Share.
        Simplify.
      </h2>
      <form
      onSubmit={handleShorten}
        action=""
        className="p-2 sm:h-14 flex flex-col sm:flex-row w-full md:w-2/3 gap-2"
      >
        <Input
          type="url"
          placeholder="Enter your URL"
          className=" border-2"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button 

        type="submit" variant="destructive">
          Short <ArrowRightFromLine />
        </Button>
      </form>

      <div className="w-full m-10 p-5">
        <p className="text-center text-xl font-thin p-2 m-2 sm:p-20 sm:m-20">
          Say goodbye to long, unwieldy URLs! Our URL shortening service makes
          it effortless to condense your links into neat, manageable formats
          that are perfect for sharing across social media, emails, and more.
          With just a few clicks, you can create short, custom links that are
          easy to remember, track, and distribute.
        </p>
        <Accordion type="multiple" collapsible className="p-10 text-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>How It Works ?</AccordionTrigger>
            <AccordionContent>
              Simply paste your long URL into our tool, and with a click, it
              generates a shorter, unique link. You can then share this compact
              URL across various platforms, ensuring it's easy to remember and
              more visually appealing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is It Free?</AccordionTrigger>
            <AccordionContent>
              Yes! Our URL shortening service is completely free to use. No
              hidden costs or fees – just create, share, and track your links
              without spending a penny.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Benefits & Features</AccordionTrigger>
            <AccordionContent>
              Enjoy faster sharing, better link tracking, and customizable URLs.
              Our service provides you with analytics, so you can monitor clicks
              and engagement for each shortened link, giving you valuable
              insights into your audience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
