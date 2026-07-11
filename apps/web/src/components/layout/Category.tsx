

import {Headphones, Smartphone, BatteryCharging, Shield, Zap, Radio,} from "lucide-react";
import Container from "../ui/Container";
import { CATEGORY_LINKS } from "@/src/lib/navigation";

export default function Category() {
    
const icons = [ Headphones, Smartphone,BatteryCharging, Zap, Radio, Shield,];

    return(
    <div className="border-t border-cyan-900/30">
        <Container>
            {/* Category Navigation */}
            <div className="flex h-9 items-center justify-center gap-10 overflow-x-auto whitespace-nowrap">
                {CATEGORY_LINKS.map((item, index) => {
                    const Icon = icons[index];
                    return (
                        <button key={item} className="flex items-center gap-2 cursor-pointer text-sm text-gray-400 hover:text-cyan-400"><Icon size={16} /> {item}</button>
                    );
                })}
                  </div>
        </Container>
    </div>
    );
}



