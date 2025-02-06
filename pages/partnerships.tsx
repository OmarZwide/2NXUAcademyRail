import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Partnerships() {
  return (
    <main className="min-h-screen py-24">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Corporate Partnerships</h1>
          <p className="text-xl text-gray-600">
            Join forces with NXU Academy to empower South African talent in cloud computing and AI/ML technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Talent Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Access a pool of certified AWS professionals trained in the latest cloud and AI technologies.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Tailored AWS certification programs for your organization's specific needs.
              </p>
              <Button variant="outline" className="w-full">
                Explore Programs
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Partner in AI/ML research projects and innovation initiatives.
              </p>
              <Button variant="outline" className="w-full">
                Partner With Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
