"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, Info } from "lucide-react"
import { useState } from "react"

export default function PaymentInstructionStep({ data, onNext, onBack }) {
  const [copied, setCopied] = useState("")

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(""), 2000)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">Send ETH to the address below</h2>
      </div>

      {/* Wallet Address */}
      <div className="bg-accent/10 rounded-lg p-4 flex items-center justify-between gap-2">
        <span className="font-mono text-sm font-medium break-all">{data.walletAddress}</span>
        <button
          onClick={() => copyToClipboard(data.walletAddress, "address")}
          className="p-2 hover:bg-secondary rounded transition-colors flex-shrink-0"
        >
          <Copy className="w-4 h-4" />
        </button>
        {copied === "address" && <span className="text-xs text-accent font-medium">Copied!</span>}
      </div>

      {/* Transaction Details */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
          <span className="text-sm text-muted-foreground">Amount to send</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{data.amountToSend} ETH</span>
            <button
              onClick={() => copyToClipboard(data.amountToSend, "amount")}
              className="p-1 hover:bg-muted rounded transition-colors"
            >
              <Copy className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
          <span className="text-sm text-muted-foreground">Network</span>
          <span className="font-semibold">{data.network}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
          <span className="text-sm text-muted-foreground">Wallet</span>
          <span className="font-semibold">{data.wallet}</span>
        </div>
      </div>

      {/* Warning */}
      <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-900 leading-relaxed">
          Only send (USDT) to this address. Ensure the sender is on the (CELO) network otherwise you might lose your
          deposit
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[20px]" />

      {/* Submit Button */}
      <Button
        onClick={onNext}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
      >
        I have sent it
      </Button>
    </div>
  )
}
