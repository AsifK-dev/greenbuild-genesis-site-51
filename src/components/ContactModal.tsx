
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-800">Book FREE Appointment</DialogTitle>
          <p className="text-sm text-slate-600">For Best Quality Construction At Affordable Rates</p>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <Input 
            placeholder="Full Name*" 
            className="h-12 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-lg" 
          />
          
          <div className="flex gap-3">
            <Select defaultValue="+91">
              <SelectTrigger className="w-20 h-12 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200 shadow-professional rounded-lg">
                <SelectItem value="+91">🇮🇳 +91</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              placeholder="Mobile Number*" 
              className="flex-1 h-12 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-lg" 
            />
          </div>
          
          <Input 
            placeholder="Location of your plot*" 
            className="h-12 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 rounded-lg" 
          />
          
          <Button className="w-full gradient-emerald text-white font-semibold h-12 btn-hover rounded-lg shadow-professional hover:shadow-interactive">
            Start Your Construction
          </Button>
          
          <p className="text-xs text-slate-500 leading-relaxed">
            *By submitting this form, I confirm that I have read and agreed to accept Green Build's{" "}
            <a href="#" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all duration-300">privacy policy</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
