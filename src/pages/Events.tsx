import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";

const Events = () => {
  const events = [
    {
      id: "1",
      title: "Santa Monica Beach Cleanup",
      location: "Santa Monica, CA",
      date: "Nov 2, 2025 - 9:00 AM",
      participants: 24,
    },
    {
      id: "2",
      title: "Ocean Beach Community Cleanup",
      location: "San Francisco, CA",
      date: "Nov 5, 2025 - 10:00 AM",
      participants: 18,
    },
    {
      id: "3",
      title: "Malibu Shores Restoration",
      location: "Malibu, CA",
      date: "Nov 8, 2025 - 8:00 AM",
      participants: 32,
    },
    {
      id: "4",
      title: "Venice Beach Volunteer Day",
      location: "Venice, CA",
      date: "Nov 10, 2025 - 9:30 AM",
      participants: 15,
    },
    {
      id: "5",
      title: "Laguna Beach Conservation",
      location: "Laguna Beach, CA",
      date: "Nov 12, 2025 - 10:00 AM",
      participants: 28,
    },
    {
      id: "6",
      title: "Coronado Island Cleanup",
      location: "Coronado, CA",
      date: "Nov 15, 2025 - 9:00 AM",
      participants: 21,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Upcoming Cleanups
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a beach cleanup event near you and make a difference for our oceans
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Events;
