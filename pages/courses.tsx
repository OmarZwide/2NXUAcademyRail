import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Check, FileCheck, GraduationCap, Calendar, CreditCard, BookOpen, Laptop } from "lucide-react";
import { ZAR } from "../lib/currency";
import { Link } from "wouter";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { StripePaymentProvider } from "../components/ui/stripe-payment-provider";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SiAmazon } from "react-icons/si";
import { Brain, Cloud, Award, Cpu, Database, Shield, Network, Layers, Code, ChartBar, Briefcase, Loader2, AlertCircle } from "lucide-react";

const getIconForCourse = (courseId: string) => {
  switch (courseId) {
    case "AWS_CLOUD_PRACTITIONER":
      return Cloud;
    case "AWS_ML_FOUNDATIONS":
      return Brain;
    case "AWS_ARCHITECT_ASSOCIATE":
      return Award;
    case "AWS_ML_SPECIALTY":
      return Database;
    case "RESEARCH_METHODS":
      return ChartBar;
    case "ADVANCED_ML":
      return Code;
    case "INDUSTRY_PLACEMENT":
      return Briefcase;
    case "CAPSTONE_PROJECT":
      return Layers;
    default:
      return Cpu;
  }
};

const masterProgram = {
  name: "M.Sc in Machine Learning, Artificial Intelligence and Cloud Computing",
  description: "A UK/US-recognized Master's degree combining advanced AI/ML studies with AWS cloud certifications",
  totalFee: {
    gbp: 3600,
    zar: 84600, // Equivalent in ZAR
  },
  structure: [
    {
      name: "Foundation Phase (4 months)",
      description: "Essential cloud computing and AI fundamentals with paid internship opportunity",
      courses: [
        {
          id: "AWS_CLOUD_PRACTITIONER",
          label: "AWS Cloud Foundations",
          description: "Core cloud computing concepts and AWS fundamentals",
          duration: "8 weeks",
          credits: 20,
          certification: "AWS Certified Cloud Practitioner",
          skills: ["Cloud Concepts", "AWS Services", "Security", "Architecture"],
        },
        {
          id: "AWS_ML_FOUNDATIONS",
          label: "Machine Learning Foundations",
          description: "Introduction to ML concepts and AWS AI services",
          duration: "8 weeks",
          credits: 20,
          skills: ["Python", "Data Analysis", "Basic ML", "AWS AI Services"],
        },
      ],
    },
    {
      name: "Core Phase (8 months)",
      description: "Advanced cloud architecture and ML specialization with industry experience",
      courses: [
        {
          id: "AWS_ARCHITECT_ASSOCIATE",
          label: "Cloud Architecture",
          description: "Advanced AWS architecture and solution design",
          duration: "12 weeks",
          credits: 30,
          certification: "AWS Solutions Architect Associate",
          skills: ["Solution Design", "High Availability", "Cost Optimization"],
        },
        {
          id: "AWS_ML_SPECIALTY",
          label: "Advanced Machine Learning",
          description: "Specialized ML solutions on AWS",
          duration: "12 weeks",
          credits: 30,
          certification: "AWS Machine Learning Specialty",
          skills: ["Deep Learning", "MLOps", "Model Deployment"],
        },
        {
          id: "INDUSTRY_PLACEMENT",
          label: "Industry Placement",
          description: "Industry experience with partner companies",
          duration: "8 weeks",
          credits: 20,
          skills: ["Professional Practice", "Industry Experience", "Applied Learning"],
        },
      ],
    },
    {
      name: "Research Phase (6 months)",
      description: "Academic research and dissertation with continued industry work",
      courses: [
        {
          id: "RESEARCH_METHODS",
          label: "Research Methods in AI",
          description: "Academic research methodology and AI ethics",
          duration: "8 weeks",
          credits: 20,
          skills: ["Research Methods", "Ethics", "Scientific Writing"],
        },
        {
          id: "ADVANCED_ML",
          label: "Advanced AI Applications",
          description: "Cutting-edge AI implementations in cloud",
          duration: "8 weeks",
          credits: 20,
          skills: ["Advanced AI", "Neural Networks", "AI Systems Design"],
        },
        {
          id: "CAPSTONE_PROJECT",
          label: "Master's Dissertation",
          description: "Research project and dissertation",
          duration: "8 weeks",
          credits: 40,
          skills: ["Project Management", "Research", "Technical Writing"],
        },
      ],
    },
  ],
};

export default function Courses() {
  const { t } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [paymentSecret, setPaymentSecret] = useState<string | null>(null);
  const [enrollmentError, setEnrollmentError] = useState<string | null>(null);

  const { mutate: createEnrollment, isPending } = useMutation({
    mutationFn: async (courseId: string) => {
      try {
        // Server endpoint handles Stripe payment intent creation
        const response = await fetch("/api/enrollments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseId,
            fullName: "Test User",
            email: "test@example.com",
            phone: "+27123456789"
          })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || "Failed to create enrollment");
        }

        return response.json();
      } catch (error) {
        console.error("Enrollment error:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      // Only receive the client secret from the server, never the full Stripe key
      setPaymentSecret(data.clientSecret);
      setEnrollmentError(null);
    },
    onError: (error: Error) => {
      console.error("Enrollment failed:", error);
      setEnrollmentError(error.message || "Failed to process enrollment. Please try again.");
    }
  });

  const handleEnrollment = (courseId: string) => {
    setSelectedCourse(courseId);
    setEnrollmentError(null);
    createEnrollment(courseId);
  };

  return (
    <main className="min-h-screen py-24">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <SiAmazon className="w-12 h-12 text-[#FF9900] mr-4" />
            <h1 className="text-4xl font-bold">{masterProgram.name}</h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            {masterProgram.description}
          </p>
          <div className="flex justify-center gap-4 flex-wrap mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              200 Credits (UK/US Standard)
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              18 Months
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              3 AWS Certifications
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Industry Placement
            </span>
          </div>
          <div className="inline-block bg-primary/5 rounded-lg px-6 py-4">
            <p className="text-lg font-semibold mb-2">Program Investment</p>
            <p className="text-3xl font-bold text-primary">£3,600</p>
            <p className="text-lg text-gray-600 mt-2">{ZAR.format(masterProgram.totalFee.zar)}</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-900">Payment Structure:</p>
              <p className="text-sm text-gray-600">
                30% enrollment fee: {ZAR.format(masterProgram.totalFee.zar * 0.3)}
              </p>
              <p className="text-sm text-gray-600">
                Balance in 12 monthly installments
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {masterProgram.structure.map((phase, phaseIndex) => (
            <section key={phaseIndex}>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{phase.name}</h2>
                <p className="text-gray-600">{phase.description}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {phase.courses.map((course) => {
                  const Icon = getIconForCourse(course.id);
                  return (
                    <Card key={course.id} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Icon className="w-8 h-8 text-primary" />
                          <CardTitle>{course.label}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-gray-600 mb-6">{course.description}</p>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Duration</span>
                            <span className="font-medium">{course.duration}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Credits</span>
                            <span className="font-medium">{course.credits}</span>
                          </div>
                          {course.certification && (
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500">Certification</span>
                              <span className="font-medium">{course.certification}</span>
                            </div>
                          )}
                          
                          <div>
                            <span className="text-sm text-gray-500 block mb-2">Key Skills</span>
                            <div className="flex flex-wrap gap-2">
                              {course.skills.map((skill, index) => (
                                <span 
                                  key={index}
                                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
                        <Button 
                          className="w-full" 
                          onClick={() => handleEnrollment(course.id)}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedCourse} onOpenChange={() => {
        setSelectedCourse(null);
        setPaymentSecret(null);
        setEnrollmentError(null);
      }}>
        <DialogContent className="sm:max-w-[500px]">
          {isPending ? (
            <div className="py-12">
              <div className="flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
              <p className="text-center mt-4 text-gray-600">
                Processing your enrollment...
              </p>
            </div>
          ) : enrollmentError ? (
            <Card>
              <CardHeader>
                <CardTitle>Enrollment Error</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <p>{enrollmentError}</p>
                </div>
              </CardContent>
            </Card>
          ) : paymentSecret ? (
            <StripePaymentProvider 
              clientSecret={paymentSecret}
              amount={84600}
              onSuccess={() => {
                setSelectedCourse(null);
                setPaymentSecret(null);
              }}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </main>
  );
}