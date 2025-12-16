

// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { ChevronDown, Search } from "lucide-react"
// import ComingSoon from "./ComingSoon" 
// import Image from "next/image"


// // --- DATA ARRAYS ---

// const currencies: Item[] = [
//   { value: "ETH", label: "ETH", icon: "⟠" },
//   { value: "NGN", label: "NGN", icon: "₦" },
//   { value: "USDT-CELO", label: "USDT - CELO", icon: "💲" },
//   { value: "USDT-TON", label: "USDT - TON", icon: "💎" },
//   { value: "USDT-BNB", label: "USDT - BNB", icon: "🔶" },
// ]

// const wallets: Item[] = [
//   { value: "metamask", label: "Metamask", icon: "🦊" },
//   { value: "rainbow", label: "Rainbow", icon: "🌈" },
//   { value: "walletconnect", label: "WalletConnect", icon: "🔵" },
//   { value: "other", label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)", icon: "💼" },
// ]

// const wallet: Item[] = [
//   { value: "metamask", label: "Metamask", icon: "🦊" },
//   { value: "rainbow", label: "Rainbow", icon: "🌈" },
//   { value: "walletconnect", label: "WalletConnect", icon: "🔵" },
//   { value: "other", label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)", icon: "💼" },
// ]

// // --- COMPONENT ---

// export default function PaymentStep({ data, updateData, onNext }: PaymentStepProps) {
//   const [showWallets, setShowWallets] = useState(false)
//     const [showWallet, setShowWallet] = useState(false)
//   const [showCurrencySearch, setShowCurrencySearch] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")

//   const filteredCurrencies = currencies.filter((c) => c.label.toLowerCase().includes(searchTerm.toLowerCase()))

//   const handleWalletSelect = (wallet: string) => {
//     updateData({ payFrom: wallet })
//     setShowWallets(false)
//   }

//    const handleWalletSelects = (walletes: string) => {
//     updateData({ payFrom: walletes })
//     setShowWallet(false)
//   }

//   const handleConvert = () => {
//     if (data.mode === "crypto-to-cash" && data.payFrom) {
//       onNext()
//     } else {
//       alert("Please select a payment method") 
//     }
//   }

//   // Conditional Rendering for Coming Soon
//   if (data.mode === "cash-to-crypto") {
//     return <ComingSoon mode={data.mode} updateData={updateData} />
//   }

//   return (
//     <div className="p-5 space-y-3 relative"> {/* Add relative here for global overlay positioning */}
      
    
//       {/* Tabs */}
//       <div className="flex gap-2 bg-secondary rounded-2xl p-1">
//         <button
//           onClick={() => updateData({ mode: "crypto-to-cash" })}
//           className={`flex-1 px-4 py-2 text-sm font-medium rounded-2xl transition-all ${
//             data.mode === "crypto-to-cash"
//               ? "bg-primary text-primary-foreground shadow-sm"
//               : "text-muted-foreground hover:text-foreground"
//           }`}
//         >
//           Crypto to cash
//         </button>
//         <button
//           onClick={() => updateData({ mode: "cash-to-crypto" })}
//           className={`flex-1 px-3 py-2 text-sm font-medium rounded-2xl transition-all ${
//             data.mode === "cash-to-crypto"
//               ? "bg-primary text-primary-foreground shadow-sm"
//               : "text-muted-foreground hover:text-foreground"
//           }`}
//         >
//           Cash to crypto
//         </button>
//         <button
//           onClick={() => updateData({ mode: "crypto-to-fiat" })}
//           className={`flex-1 px-3 py-2 text-sm font-medium rounded-2xl transition-all ${
//             data.mode === "crypto-to-fiat"
//               ? "bg-primary text-primary-foreground shadow-sm"
//               : "text-muted-foreground hover:text-foreground"
//           }`}
//         >
//           Crypto to fiat loan
//         </button>
//       </div>

//       {/* You Pay */}
//       <div className="space-y-2">
//         <Label className="text-sm text-muted-foreground">You pay</Label>
//         {/* Relative container for currency dropdown position */}
//         <div className="flex items-center  gap-2 bg-secondary rounded-lg p-4 relative z-10"> 
//           <Input
//             type="number"
//             value={data.youPay}
//             onChange={(e) => updateData({ youPay: e.target.value })}
//             className="border-0 bg-transparent text-2xl font-semibold focus-visible:ring-0 px-0"
//           />
//           {/* Currency Dropdown Toggle Button */}
//           <button
//             onClick={() => {
//                 setShowCurrencySearch(!showCurrencySearch)
//                 setShowWallets(false) // Close wallet selector
//             }}
//             className="flex items-center text-sm gap-2 px-3 py-2 bg-card rounded-lg hover:bg-muted transition-colors shrink-0"
//           >
//             <span>{currencies.find((c) => c.value === data.youPayCurrency)?.icon}</span>
//             <span className="font-medium">{data.youPayCurrency}</span>
//             <ChevronDown className="w-4 h-4" />
//           </button>
          
//           {/* Currency Search/Selection Overlay (Absolute position) */}
//           {showCurrencySearch && (
//             <div className="absolute right-0 top-full mt-2 w-full max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg p-3 z-20">
//               <div className="space-y-2">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                   <Input
//                     placeholder="Search"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="pl-9"
//                   />
//                 </div>
//                 <div className="space-y-1 max-h-48 overflow-y-auto">
//                   {filteredCurrencies.map((currency) => (
//                     <button
//                       key={currency.value}
//                       onClick={() => {
//                         updateData({ youPayCurrency: currency.value })
//                         setShowCurrencySearch(false)
//                         setSearchTerm("")
//                       }}
//                       className="w-full flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-colors text-left"
//                     >
//                       <span className="text-xl">{currency.icon}</span>
//                       <span className="font-medium">{currency.label}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* You Receive */}
//       <div className="space-y-2">
//         <Label className="text-sm text-muted-foreground">You receive</Label>
//         <div className="flex items-center gap-2 bg-secondary rounded-lg p-4">
//           <Input
//             type="number"
//             value={data.youReceive}
//             onChange={(e) => updateData({ youReceive: e.target.value })}
//             className="border-0 bg-transparent text-2xl font-semibold focus-visible:ring-0 px-0"
//           />
//           <button className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg">
//             <span className="text-sm">₦</span>
//             <span className="font-medium text-sm">{data.youReceiveCurrency}</span>
//           </button>
//         </div>
//       </div>

//       {/* Pay From (Wallet Trigger) */}
//       <div className="space-y-2">
//         <Label className="text-sm text-muted-foreground">Pay from</Label>
//         <button
//           onClick={() => {
//             setShowWallets(!showWallets)
//             setShowCurrencySearch(false) // Close currency selector
//           }}
//           className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-colors"
//         >
//           <span className="text-muted-foreground">
//             {data.payFrom ? wallets.find((w) => w.value === data.payFrom)?.label : "Select an option"}
//           </span>
//           <ChevronDown className="w-4 h-4" />
//         </button>
//       </div>

//       {/* Wallet Options Overlay (Absolute position) */}
//       {showWallets && (
//         <div className="absolute left-1/2 -translate-x-1/2 top-[50%] w-[calc(100%-3rem)] max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg p-3 z-30">
//           <div className="space-y-2">
//             <div className="space-y-2">
//               {wallets.map((wallet) => (
//                 <button
//                   key={wallet.value}
//                   onClick={() => handleWalletSelect(wallet.value)}
//                   className="w-full flex items-center text-sm gap-3 p-3 bg-secondary hover:bg-muted rounded-lg transition-colors text-left"
//                 >
//                   <span className="text-sm">{wallet.icon}</span>
//                   <span className="font-sm">{wallet.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}



// {/* Pay From (Wallet Trigger) */}
//       <div className="space-y-2">
//         <Label className="text-sm text-muted-foreground">Pay to</Label>
//         <button
//           onClick={() => {
//             setShowWallets(!showWallet)
//             setShowCurrencySearch(false) // Close currency selector
//           }}
//           className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-colors"
//         >
//           <span className="text-muted-foreground">
//             {data.payFrom ? wallet.find((w) => w.value === data.payFrom)?.label : "Select an option"}
//           </span>
//           <ChevronDown className="w-4 h-4" />
//         </button>
//       </div>

//       {/* Wallet Options Overlay (Absolute position) */}
//       {showWallet && (
//         <div className="absolute left-1/2 -translate-x-1/2 top-[50%] w-[calc(100%-3rem)] max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg p-3 z-30">
//           <div className="space-y-2">
//             <div className="space-y-2">
//               {wallet.map((walletes) => (
//                 <button
//                   key={walletes.value}
//                   onClick={() => handleWalletSelect(walletes.value)}
//                   className="w-full flex items-center gap-3 p-3 bg-secondary text-sm hover:bg-muted rounded-lg transition-colors text-left"
//                 >
//                   <span className="text-sm">{walletes.icon}</span>
//                   <span className="font-sm">{walletes.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Convert Button */}
//       <Button
//         onClick={handleConvert}
//         className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl"
//       >
//         Convert now
//       </Button>
//     </div>
//   )
// }


// PaymentStep.tsx

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, Search } from "lucide-react"
import ComingSoon from "./ComingSoon" 
import Image from "next/image"

// --- TYPESCRIPT INTERFACES AND TYPES ---
// NOTE: These interfaces are required for the component to be valid TSX.
type Mode = "crypto-to-cash" | "cash-to-crypto" | "crypto-to-fiat"

interface TransactionData {
  mode: Mode
  youPay: string
  youReceive: string
  youPayCurrency: string
  youReceiveCurrency: string
  payFrom: string | null // Original wallet source
  payTo: string | null    // New wallet destination
}

interface Item {
  value: string
  label: string
  icon: string
}

interface PaymentStepProps {
  data: TransactionData
  updateData: (updates: Partial<TransactionData>) => void
  onNext: () => void
}
// --- END TYPESCRIPT INTERFACES ---


// --- DATA ARRAYS (Simplified/Consolidated) ---

const currencies: Item[] = [
  { value: "ETH", label: "ETH", icon: "⟠" },
  { value: "NGN", label: "NGN", icon: "₦" },
  { value: "USDT-CELO", label: "USDT - CELO", icon: "💲" },
  { value: "USDT-TON", label: "USDT - TON", icon: "💎" },
  { value: "USDT-BNB", label: "USDT - BNB", icon: "🔶" },
]

const wallets: Item[] = [
  { value: "metamask", label: "Metamask", icon: "🦊" },
  { value: "rainbow", label: "Rainbow", icon: "🌈" },
  { value: "walletconnect", label: "WalletConnect", icon: "🔵" },
  { value: "other", label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)", icon: "💼" },
]

// --- COMPONENT ---

export default function PaymentStep({ data, updateData, onNext }: PaymentStepProps) {
  const [showPayFromWallet, setShowPayFromWallet] = useState(false) // Renamed from showWallets
  const [showPayToWallet, setShowPayToWallet] = useState(false)     // NEW State for "Pay to"
  const [showCurrencySearch, setShowCurrencySearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCurrencies = currencies.filter((c) => c.label.toLowerCase().includes(searchTerm.toLowerCase()))

  const handlePayFromSelect = (walletValue: string) => {
    updateData({ payFrom: walletValue })
    setShowPayFromWallet(false)
  }

  const handlePayToSelect = (walletValue: string) => {
    updateData({ payTo: walletValue }) // Assuming data has a 'payTo' field
    setShowPayToWallet(false)
  }

  const handleConvert = () => {
    if (data.mode === "crypto-to-cash" && data.payFrom && data.payTo) {
      onNext()
    } else {
      alert("Please select both payment and destination methods") 
    }
  }

  // Conditional Rendering for Coming Soon
  if (data.mode === "cash-to-crypto") {
    return <ComingSoon mode={data.mode} updateData={updateData} />
  }

  // Helper function for closing all overlays
  const closeAll = () => {
    setShowPayFromWallet(false);
    setShowPayToWallet(false);
    setShowCurrencySearch(false);
  }

  return (
    <div className="p-5 space-y-3 relative">
      
      {/* Tabs */}
      <div className="flex gap-2 bg-secondary rounded-2xl p-1">
        <button
          onClick={() => updateData({ mode: "crypto-to-cash" })}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-2xl transition-all ${
            data.mode === "crypto-to-cash"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Crypto to cash
        </button>
        <button
          onClick={() => updateData({ mode: "cash-to-crypto" })}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-2xl transition-all ${
            data.mode === "cash-to-crypto"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Cash to crypto
        </button>
        <button
          onClick={() => updateData({ mode: "crypto-to-fiat" })}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-2xl transition-all ${
            data.mode === "crypto-to-fiat"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Crypto to fiat loan
        </button>
      </div>

      {/* You Pay */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">You pay</Label>
        <div className="flex items-center  gap-2 bg-secondary rounded-lg p-4 relative z-10"> 
          <Input
            type="number"
            value={data.youPay}
            onChange={(e) => updateData({ youPay: e.target.value })}
            className="border-0 bg-transparent text-2xl font-semibold focus-visible:ring-0 px-0"
          />
          {/* Currency Dropdown Toggle Button */}
          <button
            onClick={() => {
                closeAll();
                setShowCurrencySearch(true);
            }}
            className="flex items-center text-sm gap-2 px-3 py-2 bg-card rounded-lg hover:bg-muted transition-colors shrink-0"
          >
            <span>{currencies.find((c) => c.value === data.youPayCurrency)?.icon}</span>
            <span className="font-medium">{data.youPayCurrency}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {/* Currency Search/Selection Overlay (Absolute position) */}
          {showCurrencySearch && (
            <div className="absolute right-0 top-full mt-2 w-full max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg p-3 z-20">
              <div className="space-y-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {filteredCurrencies.map((currency) => (
                    <button
                      key={currency.value}
                      onClick={() => {
                        updateData({ youPayCurrency: currency.value })
                        setShowCurrencySearch(false)
                        setSearchTerm("")
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-colors text-left"
                    >
                      <span className="text-xl">{currency.icon}</span>
                      <span className="font-medium">{currency.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* You Receive */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">You receive</Label>
        <div className="flex items-center gap-2 bg-secondary rounded-lg p-4">
          <Input
            type="number"
            value={data.youReceive}
            onChange={(e) => updateData({ youReceive: e.target.value })}
            className="border-0 bg-transparent text-2xl font-semibold focus-visible:ring-0 px-0"
          />
          <button className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg">
            <span className="text-sm">₦</span>
            <span className="font-medium text-sm">{data.youReceiveCurrency}</span>
          </button>
        </div>
      </div>

      {/* Pay From (Wallet Trigger) */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Pay from</Label>
        <button
          onClick={() => {
            closeAll();
            setShowPayFromWallet(true);
          }}
          className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-colors"
        >
          <span className="text-muted-foreground">
            {data.payFrom ? wallets.find((w) => w.value === data.payFrom)?.label : "Select an option"}
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Pay From Wallet Options Overlay (Absolute position) */}
      {showPayFromWallet && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[50%] w-[calc(100%-3rem)] max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg p-3 z-30">
          <div className="space-y-2">
            <div className="space-y-2">
              {wallets.map((wallet) => (
                <button
                  key={wallet.value}
                  onClick={() => handlePayFromSelect(wallet.value)}
                  className="w-full flex items-center text-sm gap-3 p-3 bg-secondary hover:bg-muted rounded-lg transition-colors text-left"
                >
                  <span className="text-sm">{wallet.icon}</span>
                  <span className="font-sm">{wallet.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* Pay To (Wallet Trigger) - NEW SECTION */}
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Pay to</Label>
        <button
          onClick={() => {
            closeAll();
            setShowPayToWallet(true); // Open "Pay to" wallet selector
          }}
          className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-muted transition-colors"
        >
          <span className="text-muted-foreground">
            {data.payTo ? wallets.find((w) => w.value === data.payTo)?.label : "Select an option"}
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Pay To Wallet Options Overlay (Absolute position) - NEW OVERLAY */}
      {showPayToWallet && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[50%] w-[calc(100%-3rem)] max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg p-3 z-30">
          <div className="space-y-2">
            <div className="space-y-2">
              {wallets.map((walletItem) => (
                <button
                  key={walletItem.value}
                  onClick={() => handlePayToSelect(walletItem.value)}
                  className="w-full flex items-center gap-3 p-3 bg-secondary text-sm hover:bg-muted rounded-lg transition-colors text-left"
                >
                  <span className="text-sm">{walletItem.icon}</span>
                  <span className="font-sm">{walletItem.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Convert Button */}
      <Button
        onClick={handleConvert}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl"
      >
        Convert now
      </Button>
    </div>
  )
}