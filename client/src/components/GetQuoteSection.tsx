import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function GetQuoteSection() {
  const [tripType, setTripType] = useState<"round-trip" | "one-way">("round-trip");
  const [startDate, setStartDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [acType, setAcType] = useState<"ac" | "non-ac">("ac");
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Get a Quote</h2>
          <p className="text-lg text-muted-foreground">
            You can also give us a call on <a href="tel:8447748320" className="text-primary hover:underline">8447748320</a>
          </p>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm border border-border/50">
          {/* Trip Type Tabs */}
          <div className="flex gap-6 mb-8 border-b border-border/50 pb-1">
            <button
              onClick={() => setTripType("round-trip")}
              className={cn(
                "pb-2 text-lg font-medium transition-colors relative",
                tripType === "round-trip" 
                  ? "text-foreground after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-1 after:bg-[#C5A059]" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Round Trip
            </button>
            <span className="text-muted-foreground/30 text-lg">|</span>
            <button
              onClick={() => setTripType("one-way")}
              className={cn(
                "pb-2 text-lg font-medium transition-colors relative",
                tripType === "one-way" 
                  ? "text-foreground after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-1 after:bg-[#C5A059]" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              One Way
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* From */}
            <div className="space-y-2">
              <Label htmlFor="from" className="font-serif font-bold text-foreground">From</Label>
              <Input id="from" placeholder="" className="h-12 bg-background border-muted focus:border-primary transition-colors" />
            </div>

            {/* Start Date */}
            <div className="space-y-2">
              <Label className="font-serif font-bold text-foreground">Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-12 justify-between text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    {startDate ? format(startDate, "MM/dd/yyyy") : "MM/DD/YYYY"}
                    <CalendarIcon className="mr-2 h-5 w-5 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* To */}
            <div className="space-y-2">
              <Label htmlFor="to" className="font-serif font-bold text-foreground">To</Label>
              <Input id="to" placeholder="" className="h-12 bg-background border-muted focus:border-primary transition-colors" />
            </div>

            {/* Return Date (Only for Round Trip) */}
            <div className="space-y-2">
              <Label className={cn("font-serif font-bold text-foreground", tripType === "one-way" && "text-muted-foreground/50")}>Return Date</Label>
              <Popover>
                <PopoverTrigger asChild disabled={tripType === "one-way"}>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-12 justify-between text-left font-normal",
                      !returnDate && "text-muted-foreground",
                      tripType === "one-way" && "opacity-50 cursor-not-allowed bg-muted"
                    )}
                  >
                    {returnDate ? format(returnDate, "MM/dd/yyyy") : "MM/DD/YYYY"}
                    <CalendarIcon className="mr-2 h-5 w-5 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* AC / Non-AC Radio */}
          <div className="mb-8">
            <RadioGroup defaultValue="ac" onValueChange={(v) => setAcType(v as "ac" | "non-ac")} className="flex gap-8">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ac" id="ac" className="w-5 h-5 border-2 border-primary text-primary" />
                <Label htmlFor="ac" className="font-serif font-bold text-base cursor-pointer">AC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="non-ac" id="non-ac" className="w-5 h-5 border-2 border-primary text-primary" />
                <Label htmlFor="non-ac" className="font-serif font-bold text-base cursor-pointer">Non-AC</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-2 mb-8">
            <Checkbox 
              id="terms" 
              checked={agreed}
              onCheckedChange={(c) => setAgreed(c as boolean)}
              className="mt-1 border-muted-foreground"
            />
            <Label htmlFor="terms" className="text-sm font-medium leading-tight">
              By confirming, you agree to our <a href="/terms" className="text-blue-500 hover:underline">Terms & Conditions</a> & give us consent to contact you via call, WhatsApp & email.
            </Label>
          </div>

          {/* Proceed Button */}
          <div className="flex justify-center">
            <Button 
              className="btn-gold font-serif font-bold text-lg px-12 py-6 rounded-full uppercase tracking-wide w-full md:w-auto min-w-[200px]"
            >
              PROCEED
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
