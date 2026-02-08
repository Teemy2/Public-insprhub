"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, Loader2 } from "lucide-react";
import { UserFocusIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { useToast } from "@/hooks/use-toast";

export default function WaitlistSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userType: "student",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://insprhub-backend.onrender.com/waitlist/api/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.status === 201) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "You have successfully joined the waitlist.",
        });

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            userType: "student",
          });
        }, 3000);
      } else if (response.status === 409) {

        toast({
          variant: "destructive",
          title: "Email already registered",
          description: "This email address is already on our waitlist.",
        });
      } else {

        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      console.error("Waitlist error:", error);
      toast({
        variant: "destructive",
        title: "Connection Error",
        description:
          "Failed to connect to the server. Please check your internet connection.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-20 px-6 bg-gradient-to-b from-light-green/30 to-white"
    >
      <div className="max-w-2xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-green">
            <div className="w-2 h-2 rounded-full bg-dark-green" />
            <span className="text-dark-green text-sm font-medium">
              THE WAIT IS PART OF THE JOURNEY
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Early Access to the
            <br />
            Future of Jobs in Africa
          </h2>

          <p className="text-lg text-gray-600">
            Join the waitlist today and be part of the first to know when we
            launch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="firstName" className="text-black font-medium">
                First Name
              </Label>
              <div className="relative">
                <UserFocusIcon
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  weight="fill"
                />
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  disabled={isLoading || isSubmitted}
                  className="bg-white border-gray-200 focus:border-dark-green pl-10"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <Label htmlFor="lastName" className="text-black font-medium">
                Last Name
              </Label>
              <div className="relative">
                <UserFocusIcon
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  weight="fill"
                />
                <Input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  disabled={isLoading || isSubmitted}
                  className="bg-white border-gray-200 focus:border-dark-green pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 text-left">
            <Label htmlFor="email" className="text-black font-medium">
              Email Address
            </Label>
            <div className="relative">
              <EnvelopeSimpleIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                weight="fill"
              />
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                disabled={isLoading || isSubmitted}
                className="bg-white border-gray-200 focus:border-dark-green pl-10"
              />
            </div>
          </div>

          <RadioGroup
            value={formData.userType}
            onValueChange={(value) =>
              setFormData({ ...formData, userType: value })
            }
            disabled={isLoading || isSubmitted}
            className="flex items-center justify-center gap-8 pt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="student"
                id="student"
                className="border-gray-300"
              />
              <Label
                htmlFor="student"
                className="text-black font-normal cursor-pointer"
              >
                I'm a student
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="business"
                id="business"
                className="border-gray-300"
              />
              <Label
                htmlFor="business"
                className="text-black font-normal cursor-pointer"
              >
                I'm a business
              </Label>
            </div>
          </RadioGroup>

          <Button
            type="submit"
            disabled={isLoading || isSubmitted}
            className="w-full bg-black hover:bg-black/90 text-white py-6 text-base group"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : isSubmitted ? (
              "Thanks for joining!"
            ) : (
              <>
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
