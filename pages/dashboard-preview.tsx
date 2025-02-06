import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Gradient } from "@/components/ui/gradient";
import { Book, Award, Clock, User } from "lucide-react";

export default function DashboardPreview() {
  const certifications = [
    { name: "AWS Cloud Practitioner", progress: 65 },
    { name: "AWS Solutions Architect Associate", progress: 30 },
    { name: "AWS Machine Learning Specialty", progress: 15 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Gradient variant="subtle" className="fixed" />

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Student Dashboard Preview</h1>
          <p className="text-gray-600 mt-2">
            Experience our intuitive learning platform designed for South Africa's diverse tech community
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Course Progress</CardTitle>
              <Book className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42.3%</div>
              <p className="text-xs text-gray-500">Overall completion</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">164</div>
              <p className="text-xs text-gray-500">Hours completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certifications</CardTitle>
              <Award className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2/4</div>
              <p className="text-xs text-gray-500">Certifications in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Community</CardTitle>
              <User className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">126</div>
              <p className="text-xs text-gray-500">Fellow students</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">AWS Certification Progress</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{cert.name}</h3>
                    <Badge variant="outline">{cert.progress}%</Badge>
                  </div>
                  <Progress value={cert.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}