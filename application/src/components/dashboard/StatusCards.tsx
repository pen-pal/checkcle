
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Pause, AlertTriangle } from "lucide-react";
import { Service } from "@/services/serviceService";
import { useTheme } from "@/contexts/ThemeContext";

interface StatusCardsProps {
  services: Service[];
}

export const StatusCards = ({ services }: StatusCardsProps) => {
  // Count services by status
  const upServices = services.filter(s => s.status === "up").length;
  const downServices = services.filter(s => s.status === "down").length;
  const pausedServices = services.filter(s => s.status === "paused").length;
  const warningServices = services.filter(s => s.responseTime > 1000).length;
  
  // Get current theme to adjust card styles
  const { theme } = useTheme();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
      {/* Up Services Card */}
      <Card 
        className={`border-none rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
          theme === 'dark' ? 'dark-card' : ''
        } relative z-10`}
        style={{
          background: theme === 'dark' 
            ? "linear-gradient(135deg, rgba(65, 59, 55, 0.8) 0%, rgba(102, 187, 106, 0.6) 100%)" 
            : "linear-gradient(135deg, rgba(65, 59, 55, 0.8) 0%, #66bb6a 100%)"
        }}
      >
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full" 
            style={{ 
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), 
                                linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-white">UP SERVICES</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between relative z-10">
          <span className="text-5xl font-bold text-white">{upServices}</span>
          <div className="rounded-full p-3 bg-white/25 backdrop-blur-sm">
            <ArrowUp className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>
      
      {/* Down Services Card */}
      <Card 
        className={`border-none rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
          theme === 'dark' ? 'dark-card' : ''
        } relative z-10`}
        style={{
          background: theme === 'dark'
            ? "linear-gradient(135deg, rgba(65, 59, 55, 0.8) 0%, rgba(239, 83, 80, 0.6) 100%)"
            : "linear-gradient(135deg, rgba(65, 59, 55, 0.8) 0%, #ef5350 100%)"
        }}
      >
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full" 
            style={{ 
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), 
                                linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-white">DOWN SERVICES</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between relative z-10">
          <span className="text-5xl font-bold text-white">{downServices}</span>
          <div className="rounded-full p-3 bg-white/25 backdrop-blur-sm">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>
      
      {/* Paused Services Card */}
      <Card 
        className={`border-none rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
          theme === 'dark' ? 'dark-card' : ''
        } relative z-10`}
        style={{
          background: theme === 'dark'
            ? "linear-gradient(135deg, rgba(65, 59, 55, 0.8) 0%, rgba(66, 165, 245, 0.6) 100%)"
            : "linear-gradient(135deg, rgba(65, 59, 55, 0.8) 0%, #42a5f5 100%)"
        }}
      >
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full" 
            style={{ 
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), 
                                linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-white">PAUSED SERVICES</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between relative z-10">
          <span className="text-5xl font-bold text-white">{pausedServices}</span>
          <div className="rounded-full p-3 bg-white/25 backdrop-blur-sm">
            <Pause className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>
      
      {/* Warning Services Card */}
      <Card 
        className={`border-none rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
          theme === 'dark' ? 'dark-card' : ''
        } relative z-10`}
        style={{
          background: theme === 'dark'
            ? "linear-gradient(135deg, rgba(65, 59, 55, 0.8) 0%, rgba(255, 183, 77, 0.6) 100%)"
            : "linear-gradient(135deg, rgba(65, 59, 55, 0.8) 0%, #ffb74d 100%)"
        }}
      >
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full" 
            style={{ 
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), 
                                linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-white">WARNING SERVICES</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between relative z-10">
          <span className="text-5xl font-bold text-white">{warningServices}</span>
          <div className="rounded-full p-3 bg-white/25 backdrop-blur-sm">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
