// ComingSoon.tsx

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Define the necessary types (copied or imported from PaymentStep.tsx)
type Mode = "crypto-to-cash" | "cash-to-crypto" | "crypto-to-fiat";
interface TransactionData {
    mode: Mode;
    // ... other properties not strictly needed here but good for completeness
}

interface ComingSoonProps {
    mode: Mode;
    updateData: (updates: Partial<TransactionData>) => void;
}

export default function ComingSoon({ mode, updateData }: ComingSoonProps) {
  return (
    <div className="p-4 space-y-4">
      {/* Tabs */}
      <div className="flex gap-2 bg-secondary rounded-full p-1">
        <button
          onClick={() => updateData({ mode: "crypto-to-cash" })}
          className={`flex-1 py-1 px-2 md:px-4 md:py-2 px-3 py-2 text-[10px] md:text-sm font-medium rounded-xl md:rounded-2xl transition-all ${
            mode === "crypto-to-cash"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Crypto to cash
        </button>
        <button
          onClick={() => updateData({ mode: "cash-to-crypto" })}
          className={`flex-1 py-1 px-2 md:px-4 md:py-2 px-3 py-2 text-[10px] md:text-sm font-medium rounded-xl md:rounded-2xl transition-all ${
            mode === "cash-to-crypto"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Cash to crypto
        </button>
        <button
          onClick={() => updateData({ mode: "crypto-to-fiat" })}
          className={`flex-1 py-1 px-2 md:px-4 md:py-2 px-3 py-2 text-[10px] md:text-sm font-medium rounded-xl md:rounded-2xl transition-all ${
            mode === "crypto-to-fiat"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Crypto to fiat loan
        </button>
      </div>

      {/* Coming Soon Content */}
      <div className="text-center space-y-6 pt-12">
        <h2 className="text-3xl font-semibold text-[#1F515C]">Coming Soon!</h2>
        <p className="text-muted-foreground">
          Cash to Crypto is almost here.
          <br />
          Enter your email and we'll let you know the moment it's live.
        </p>
        
        <div className="space-y-2 text-left">
          <Label htmlFor="email-update" className="text-sm font-medium">Email</Label>
          <Input
            id="email-update"
            type="email"
            placeholder="Enter your email"
            className="h-12 border-gray-300 focus-visible:ring-2 focus-visible:ring-[#1F515C]"
          />
        </div>
        
        <Button
          className="w-full h-12 bg-[#1F515C] hover:bg-[#1F515C]/90 text-white font-semibold rounded-lg"
        >
          Update me
        </Button>
      </div>
    </div>
  )
}