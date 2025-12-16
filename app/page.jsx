"use client"

import { useState } from "react"
import CryptoCheckout from "@/components/crypto-checkout"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-6 text-lg rounded-full shadow-lg"
      >
        Open Crypto Checkout
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Modal content */}
          <div className="relative z-10 w-full max-w-md">
            <CryptoCheckout onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}
