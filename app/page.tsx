// This file will be replaced with the new landing page code.

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Bell, 
  ListChecks, 
  MessageSquare, 
  Share2, 
  Download,
  Apple,
  Star
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Image src="/timetreesvg.webp" alt="TimeTree Logo" width={32} height={32} />
          <h1 className="text-2xl font-bold text-green-600">TimeTree</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-green-600">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-green-600">Testimonials</a>
          <a href="#download" className="text-gray-600 hover:text-green-600">Download</a>
        </nav>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Get Started
        </Button>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="text-center py-20 px-4 bg-green-50">
          <h2 className="text-5xl font-bold mb-4">
            Connect over time. <br /> Grow bonds together.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A single calendar for all your groups. Share and coordinate schedules with family, friends, and colleagues.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              <Apple className="mr-2 h-5 w-5" /> Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600">
              <Download className="mr-2 h-5 w-5" /> Download for Android
            </Button>
          </div>
        </section>

        {/* Visual Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Image 
              src="/timetreeLanding.png" 
              alt="TimeTree App Screenshot" 
              width={1000} 
              height={600} 
              className="mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold mb-2">Everything you need in one place</h3>
            <p className="text-gray-600 mb-12">Manage schedules, share notes, and chat with your groups effortlessly.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-green-100 rounded-full p-3 w-fit">
                    <Share2 className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="pt-4">Shared Calendars</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Create and share calendars for family, work, and social circles. Everyone stays in sync.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-green-100 rounded-full p-3 w-fit">
                    <Bell className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="pt-4">Notifications & Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Get timely reminders for events and updates. Never miss an important date again.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-green-100 rounded-full p-3 w-fit">
                    <ListChecks className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="pt-4">Memos & To-Do Lists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Share notes and to-do lists that are not yet scheduled. Perfect for planning ahead.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4">
            <div className="container mx-auto text-center">
                <h3 className="text-4xl font-bold mb-12">Loved by 65 million users worldwide</h3>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <Card className="bg-green-50 border-green-200">
                        <CardContent className="pt-6">
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="mb-4">"This app is so cute and easy to use and the fact that we get notifications whenever the other person makes an event is awesome!"</p>
                            <p className="font-semibold">- Jaid F.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-green-50 border-green-200">
                        <CardContent className="pt-6">
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="mb-4">"My husband and I have a collaborative calendar on it, and it's sooo helpful for sharing appointments and plans! I love how easy and simple it is."</p>
                            <p className="font-semibold">- Dakota P.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-green-50 border-green-200">
                        <CardContent className="pt-6">
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="mb-4">"My initial experience was great with an intuitive interface and good features. It has made our schedules so much easier to follow."</p>
                            <p className="font-semibold">- Chris J.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 px-4 bg-gray-900 text-white text-center">
            <div className="container mx-auto">
                <h3 className="text-4xl font-bold mb-4">Get Started with TimeTree Today</h3>
                <p className="text-gray-300 mb-8">Join millions of users and start organizing your life, together.</p>
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                        <Apple className="mr-2 h-5 w-5" /> Download for iOS
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                         <Download className="mr-2 h-5 w-5" /> Download for Android
                    </Button>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-8 px-4">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} TimeTree, Inc. All rights reserved.</p>
            <p className="text-sm mt-2">This is a concept landing page developed for portfolio purposes.</p>
        </div>
      </footer>
    </div>
  );
}
