import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  return (
    <main className="min-h-screen py-24">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions about our M.Sc in Machine Learning, Artificial Intelligence and Cloud Computing? Our international admissions team is here to help you start your journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (with country code)</label>
                  <Input type="tel" placeholder="+27" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admissions">International Admissions</SelectItem>
                      <SelectItem value="program">Program Structure & Content</SelectItem>
                      <SelectItem value="fees">Tuition & Payment Plans</SelectItem>
                      <SelectItem value="partnerships">Corporate & Industry Partnerships</SelectItem>
                      <SelectItem value="research">Research Opportunities</SelectItem>
                      <SelectItem value="other">Other Inquiries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your background and how we can assist with your application to the MSc program"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full">Submit Inquiry</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Program Office</h2>
              <p className="text-gray-600">
                NXU TECHNOLOGY AND SYSTEMS DEVELOPMENT GROUP LTD
                <br />
                NXU Academy - MSc Program Office
                <br />
                Royal House, 110 Station Parade
                <br />
                Harrogate, HG1 1EP
                <br />
                England, United Kingdom
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">International Admissions</h2>
              <p className="text-gray-600">
                Email: admissions@nxuacademy.co.za
                <br />
                WhatsApp: +27 (0)78 123 4567
                <br />
                SA Office Hours: Mon-Fri, 8:30 - 16:30 SAST
                <br />
                UK Office Hours: Mon-Fri, 9:30 - 17:30 BST
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information Sessions</h2>
              <p className="text-gray-600">
                Virtual Open Days: Every Wednesday at 14:00 BST / 15:00 SAST
                <br />
                1-on-1 Consultations: Book a personalized session with our program advisors
                <br />
                LinkedIn: Follow us for program updates and AI industry insights
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <p className="text-gray-600">
                Download Program Prospectus
                <br />
                View Entry Requirements
                <br />
                Book a Consultation
                <br />
                Apply Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}