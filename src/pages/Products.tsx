import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, ShieldCheck, Droplets } from "lucide-react";

export function Products() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          UriCare Product Details
        </h1>
        <p className="text-xl text-muted-foreground">
          Advanced solution for emergency urination needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
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
          <div className="flex gap-2 mb-4">
            <Badge variant="secondary">Medical Grade</Badge>
            <Badge variant="secondary">Portable</Badge>
            <Badge variant="secondary">Easy to Use</Badge>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Package className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Package Contents</p>
                  <p className="text-muted-foreground">
                    Portable urinal device with secure lid and spill-proof design
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Safety Features</p>
                  <p className="text-muted-foreground">
                    Anti-spill lid, leak-proof seal, and medical-grade plastic
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Capacity</p>
                  <p className="text-muted-foreground">
                    Holds up to 1000ml with secure sealing cap
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Usage Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Remove the cap from the urinal device</li>
            <li>Use as needed in emergency situations</li>
            <li>Secure the cap tightly after use</li>
            <li>Empty in appropriate facilities when possible</li>
            <li>Clean thoroughly before next use or dispose if single-use</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}