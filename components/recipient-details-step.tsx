"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

const countryCodes = [
  { value: "+234", label: "+234 🇳🇬", flag: "🇳🇬" },
  { value: "+1", label: "+1 🇺🇸", flag: "🇺🇸" },
  { value: "+44", label: "+44 🇬🇧", flag: "🇬🇧" },
]

export default function RecipientDetailsStep({ data, updateData, onNext, onBack }) {
  const handleNext = () => {
    if (data.recipientEmail && data.recipientPhone) {
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

      {/* Email */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Recipient email</Label>
        <Input
          type="email"
          placeholder="Enter recipient email"
          value={data.recipientEmail}
          onChange={(e) => updateData({ recipientEmail: e.target.value })}
          className="h-12 bg-secondary border-0"
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Recipient phone number</Label>
        <div className="flex gap-2">
          <Select value={data.countryCode} onValueChange={(value) => updateData({ countryCode: value })}>
            <SelectTrigger className="w-32 h-12 bg-secondary border-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((code) => (
                <SelectItem key={code.value} value={code.value}>
                  {code.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="tel"
            placeholder="000 - 000 - 00000"
            value={data.recipientPhone}
            onChange={(e) => updateData({ recipientPhone: e.target.value })}
            className="flex-1 h-12 bg-secondary border-0"
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[200px]" />

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
