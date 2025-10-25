import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, Package } from "lucide-react";
import { toast } from "sonner";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock event data
  const event = {
    id: id,
    title: "Santa Monica Beach Cleanup",
    location: "Santa Monica State Beach, CA",
    date: "November 2, 2025",
    time: "9:00 AM - 12:00 PM",
    participants: 24,
    description:
      "Join us for a morning of making a difference! We'll be cleaning up Santa Monica Beach and collecting data on the types of trash we find. This helps us understand pollution patterns and advocate for better ocean protection policies.",
    whatToBring: [
      "Reusable gloves",
      "Water bottle",
      "Sunscreen",
      "Hat",
      "Comfortable shoes",
    ],
    meetingPoint: "North Beach parking lot, near lifeguard tower 26",
    organizer: "Sarah Johnson",
  };

  const handleJoin = () => {
    toast.success("You've joined the cleanup event!");
    navigate("/events");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="h-64 md:h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Beach Cleanup Event</p>
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {event.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              Organized by {event.organizer}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <p className="font-semibold">{event.date}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <p className="font-semibold">{event.time}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <p className="font-semibold">{event.participants} joined</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">{event.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Meeting point: {event.meetingPoint}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold mb-2">About this cleanup</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold mb-3">What to bring</h3>
                  <ul className="space-y-2">
                    {event.whatToBring.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={handleJoin}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
          >
            Join This Cleanup
          </Button>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
