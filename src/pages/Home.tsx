import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          UriCare Emergency Relief Packets
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Instant relief for urgent urination needs, anytime, anywhere.
        </p>
        <Link to="/products">
          <Button size="lg">Learn More</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Safe & Hygienic</h3>
              <p className="text-muted-foreground">
                Medical-grade materials ensure complete safety and hygiene
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Instant Solution</h3>
              <p className="text-muted-foreground">
                Quick and easy to use in emergency situations
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <ThumbsUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Trusted Quality</h3>
              <p className="text-muted-foreground">
                Proven effectiveness and reliability
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          <img
            src="https://th.bing.com/th/id/OIP.jfiAM7dixxnucy8WGU4vXQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="UriCare Emergency Urinal"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="https://i5.walmartimages.com/asr/4a934eb6-b1f2-4311-b55c-12697f13ad8f.34b3f07496d6eae8c744791b287f21c5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt="UriCare Urinal Device"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't let urinary urgency control your life. Our emergency relief device provides
          immediate solution when you need it most, helping you stay confident and comfortable
          in any situation.
        </p>
      </div>
    </div>
  );
}