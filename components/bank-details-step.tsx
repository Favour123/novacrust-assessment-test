"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

const banks = [
  { value: "access", label: "Access Bank" },
  { value: "gtb", label: "GTBank" },
  { value: "firstbank", label: "First Bank" },
  { value: "uba", label: "UBA" },
  { value: "zenith", label: "Zenith Bank" },
]

export default function BankDetailsStep({ data, updateData, onNext, onBack }) {
  const handleNext = () => {
    if (data.bank && data.accountNumber && data.accountName) {
      onNext()
    } else {
      alert("Please fill in all fields")
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">Recipient details</h2>
      </div>

      {/* Bank */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Bank</Label>
        <Select value={data.bank} onValueChange={(value) => updateData({ bank: value })}>
          <SelectTrigger className="h-12 bg-secondary border-0">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {banks.map((bank) => (
              <SelectItem key={bank.value} value={bank.value}>
                {bank.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Account Number */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Account number</Label>
        <Input
          type="text"
          placeholder="Enter your account number"
          value={data.accountNumber}
          onChange={(e) => updateData({ accountNumber: e.target.value })}
          className="h-12 bg-secondary border-0"
        />
      </div>

      {/* Account Name */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Account name</Label>
        <Input
          type="text"
          placeholder="Enter your account name"
          value={data.accountName}
          onChange={(e) => updateData({ accountName: e.target.value })}
          className="h-12 bg-secondary border-0"
        />
      
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[100px]" />

      {/* Next Button */}
      <Button
        onClick={handleNext}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
      >
        Next
      </Button>
    </div>
  )
}
