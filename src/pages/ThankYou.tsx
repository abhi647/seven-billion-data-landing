import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, Wifi, VolumeX, Clock, Laptop } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: Calendar,
    title: "1. Save the date and time of this call by going to your email and check the details.",
  },
  {
    icon: VolumeX, // Replaced FileText with VolumeX to represent Silence
    title: "2. Make sure to keep proper silence and quiet environment.",
  },
  {
    icon: Clock, // Added Clock to represent availability/time
    title: "3. Make sure you are available at the time and date that you have booked a call with us just now.",
  },
  {
    icon: Wifi,
    title: "4. Make sure your Internet connection is proper and in full range.",
  },
  {
    icon: Laptop, // Replaced MessageSquare with Laptop
    title: "5. We prefer Zoom call to make this strategy session so make sure to install Zoom software in your System.",
  },
];

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <div className="p-4 rounded-full bg-teal-50 border border-teal-100 shadow-sm">
              <CheckCircle2 size={48} className="text-primary" />
            </div>
          </div>

          <p className="font-body text-primary text-sm font-medium uppercase tracking-widest mb-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>You're Confirmed</p>
          <h1 className="font-display text-3xl lg:text-4xl font-light text-navy mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Congrats ! Your personal strategy call with <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 font-light">Uability</em> is now confirmed.
          </h1>
          <p className="font-body text-gray-500 text-lg mb-12 font-light animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Here is what you need to do before jumping on the call -
          </p>

          <div className="space-y-4 text-left mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-100 shrink-0">
                  <step.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-navy text-base">
                    {step.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 shadow-sm animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="font-body text-teal-900 text-base leading-relaxed font-light">
              I am eagerly Looking forward to our meeting that can lead you to <strong>success.</strong>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 font-body text-gray-600 text-sm font-medium hover:text-navy hover:border-gray-300 transition-all bg-white shadow-sm hover:shadow"
            >
              Back to Home
            </Link>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary font-body text-white text-sm font-medium hover:scale-[1.02] shadow-xl shadow-teal-500/20 transition-all duration-300"
            >
              Book Another Session
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
