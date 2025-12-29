import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-muted/30 to-background">
      <Helmet>
        <title>Page non trouvée — Horizon Spatial</title>
        <meta name="description" content="Page non trouvée. Retournez à l'accueil pour poursuivre votre navigation." />
        <meta property="og:title" content="Page non trouvée — Horizon Spatial" />
        <meta property="og:description" content="La page demandée n'existe pas ou a été déplacée." />
      </Helmet>
      <Card className="w-full max-w-lg mx-4 shadow-xl border border-border bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/20 rounded-full animate-pulse scale-125" />
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="relative h-10 w-10 text-destructive" />
              </div>
            </div>
          </div>

          <h1 className="font-heading text-6xl font-bold text-primary mb-2">404</h1>

          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
            Page non trouvée
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed max-w-sm mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              onClick={handleGoBack}
              className="rounded-full px-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <Button
              onClick={handleGoHome}
              className="rounded-full px-6 shadow-lg shadow-primary/20"
            >
              <Home className="w-4 h-4 mr-2" />
              Accueil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
