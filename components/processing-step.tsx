"use client"

import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"
import Image from 'next/image';

export default function ProcessingStep({ data, onGoHome }) {
  const [copied, setCopied] = useState(false)
  const transactionId = "NC123456789"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transactionId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-6 space-y-8 text-center">
      {/* Logo */}
     <div className="flex items-center justify-center">
  <div className="relative "> {/* Use relative and w/h for the image container */}
    <Image
      src="/BlackTrans.png" // Replace with the actual path to your logo image in the public folder
      alt="NOVACRUST Logo"
    width={250} // 6 * 4 (default Tailwind spacing unit)
    height={250} 
      objectFit="cover" // Ensures the entire image is visible within the bounds
    />
  </div>
</div>

      {/* Success Icon */}
      <div className="flex justify-center py-4">
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
          <Check className="w-10 h-10 text-white stroke-[3]" />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Your transaction is processing.</h2>
        <p className="text-muted-foreground">The recipient will receive it shortly.</p>
      </div>

      {/* Transaction ID */}
      <div className="bg-secondary rounded-lg p-3 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Transaction ID</span>
        <div className="flex items-center gap-2">
          <span className="font-mono font-medium">{transactionId}</span>
          <button onClick={copyToClipboard} className="p-1 hover:bg-muted rounded transition-colors">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>
      {copied && <span className="text-xs text-accent font-medium">Copied!</span>}

      {/* Spacer */}
      <div className="flex-1 min-h-[40px]" />

      {/* Go Home Link */}
      <Button onClick={onGoHome} variant="link" className="text-primary font-semibold">
        Go back to home
      </Button>
    </div>
  )
}
