import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Waves className="h-6 w-6 text-secondary" />
          CleanWave
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/events">
            <Button variant="ghost">Browse Events</Button>
          </Link>
          <Link to="/create">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Host Cleanup
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
