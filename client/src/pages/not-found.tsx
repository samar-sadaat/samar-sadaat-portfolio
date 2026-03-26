import { AlertCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      
      <Card className="w-full max-w-md border border-border/60 shadow-xl rounded-2xl">
        <CardContent className="pt-8 pb-6 px-6 text-center">
          
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-red-500/10">
              <AlertCircle className="h-7 w-7 text-red-500" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            404 - Page Not Found
          </h1>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-6">
            The page you are looking for doesn’t exist or has been moved.
          </p>

          {/* Button */}
          <Button
            onClick={() => setLocation("/")}
            className="w-full rounded-xl transition-all duration-300 hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

        </CardContent>
      </Card>

    </div>
  );
}