
import React from 'react';
import { MapPin, Calendar, Clock, Heart, Cake, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const handleRSVP = () => {
    // You can integrate with actual RSVP system here
    window.open('mailto:parents@email.com?subject=RSVP for Emma\'s First Birthday', '_blank');
  };

  const handleMapClick = () => {
    // Replace with actual venue coordinates
    window.open('https://map.naver.com/v5/search/birthday%20venue', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      {/* Floating decorative elements */}
      <div className="fixed top-10 left-5 animate-bounce">
        <div className="w-8 h-8 bg-pink-200 rounded-full opacity-60"></div>
      </div>
      <div className="fixed top-20 right-8 animate-pulse">
        <div className="w-6 h-6 bg-purple-200 rounded-full opacity-50"></div>
      </div>
      <div className="fixed top-32 left-12 animate-bounce delay-300">
        <div className="w-4 h-4 bg-blue-200 rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header with baby's name */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-4">
            <Baby className="w-16 h-16 mx-auto text-pink-400 mb-2" />
          </div>
          <h1 className="text-4xl font-bold text-purple-800 mb-2 font-serif">
            Emma Rose
          </h1>
          <div className="text-lg text-purple-600 mb-2">
            You're invited to my
          </div>
          <div className="text-2xl font-bold text-pink-600 mb-4">
            First Birthday! 🎂
          </div>
          <div className="text-sm text-purple-500">
            Come celebrate this special milestone with us!
          </div>
        </div>

        {/* Cute illustration section */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="text-4xl animate-bounce">🎈</div>
            <Cake className="w-12 h-12 text-pink-400 animate-pulse" />
            <div className="text-4xl animate-bounce delay-300">🧸</div>
          </div>
          <div className="flex justify-center space-x-2">
            <div className="text-2xl">🎈</div>
            <div className="text-2xl">🎈</div>
            <div className="text-2xl">🎈</div>
          </div>
        </div>

        {/* Event details card */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4 text-center">
              Party Details
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-pink-500" />
                <div>
                  <div className="font-semibold text-purple-800">Date</div>
                  <div className="text-purple-600">Saturday, March 15th, 2025</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-pink-500" />
                <div>
                  <div className="font-semibold text-purple-800">Time</div>
                  <div className="text-purple-600">2:00 PM - 5:00 PM</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-500" />
                <div>
                  <div className="font-semibold text-purple-800">Venue</div>
                  <div className="text-purple-600">
                    Rainbow Community Center<br />
                    123 Happy Street, Seoul
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parents' message */}
        <Card className="mb-6 bg-gradient-to-r from-pink-50 to-purple-50 border-purple-200 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto text-pink-500 mb-3" />
              <h3 className="font-bold text-purple-800 mb-3">A Note from Mom & Dad</h3>
              <p className="text-purple-700 leading-relaxed">
                Our little Emma is turning ONE! 🥳<br/><br/>
                It feels like yesterday she was born, and now she's walking, 
                babbling, and melting our hearts every day. We'd love to 
                celebrate this precious milestone with all our dear friends 
                and family.
              </p>
              <div className="mt-4 text-sm text-purple-600 italic">
                With love,<br/>
                Sarah & Michael ❤️
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="space-y-3 mb-8">
          <Button 
            onClick={handleRSVP}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white py-6 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            RSVP Now 💌
          </Button>
          
          <Button 
            onClick={handleMapClick}
            variant="outline"
            className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            <MapPin className="w-5 h-5 mr-2" />
            View Location
          </Button>
        </div>

        {/* Footer with decorative elements */}
        <div className="text-center">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="text-3xl">🎂</div>
            <div className="text-3xl">🎈</div>
            <div className="text-3xl">🧸</div>
            <div className="text-3xl">🎈</div>
            <div className="text-3xl">🎂</div>
          </div>
          <p className="text-purple-500 text-sm">
            Can't wait to celebrate with you! 🌈
          </p>
        </div>
      </div>

      {/* Floating hearts animation */}
      <div className="fixed bottom-10 right-5 animate-pulse">
        <Heart className="w-6 h-6 text-pink-300" />
      </div>
      <div className="fixed bottom-20 left-8 animate-pulse delay-500">
        <Heart className="w-4 h-4 text-purple-300" />
      </div>
    </div>
  );
};

export default Index;
