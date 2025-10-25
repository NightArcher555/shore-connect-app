import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Users, MapPin, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-beach.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Clean Oceans Start
            <br />
            With Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
            Join a community of ocean lovers making real impact, one beach cleanup at a time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                Find Cleanups Near You
              </Button>
            </Link>
            <Link to="/create">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                Host Your Own
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-4xl font-bold mb-2 text-foreground">1,200+</h3>
                <p className="text-muted-foreground">Active Volunteers</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Waves className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-4xl font-bold mb-2 text-foreground">350+</h3>
                <p className="text-muted-foreground">Cleanups Organized</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-4xl font-bold mb-2 text-foreground">15 Tons</h3>
                <p className="text-muted-foreground">Trash Collected</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Browse Events</h3>
              <p className="text-muted-foreground">
                Find beach cleanup events happening near you or create your own
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Join & Connect</h3>
              <p className="text-muted-foreground">
                Sign up for events and meet like-minded ocean advocates
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Make Impact</h3>
              <p className="text-muted-foreground">
                Show up, clean up, and help protect our precious oceans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Every piece of trash removed is a step toward healthier oceans
          </p>
          <Link to="/events">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
