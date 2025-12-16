"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import PaymentStep from "./payment-step"
import RecipientDetailsStep from "./recipient-details-step"
import BankDetailsStep from "./bank-details-step"
import PaymentInstructionStep from "./payment-instruction-step"
import ProcessingStep from "./processing-step"

export default function CryptoCheckout({ onClose }) {
  const [step, setStep] = useState(1)
  const [paymentData, setPaymentData] = useState({
    mode: "crypto-to-cash",
    youPay: "1.00",
    youPayCurrency: "ETH",
    youReceive: "1.00",
    youReceiveCurrency: "NGN",
    payFrom: "",
    payTo: "",
    recipientEmail: "",
    recipientPhone: "",
    countryCode: "+234",
    bank: "",
    accountNumber: "",
    accountName: "",
    walletAddress: "4LjV4YjbvsL6739MKghUd",
    amountToSend: "100",
    network: "ETH",
    wallet: "Other",
  })

  const updatePaymentData = (newData) => {
    setPaymentData({ ...paymentData, ...newData })
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)
  const goToStart = () => {
    setStep(1)
    if (onClose) onClose()
  }

  return (
    <Card className="w-full overflow-hidden shadow-2xl border-0 rounded-3xl bg-white">
      {step === 1 && <PaymentStep data={paymentData} updateData={updatePaymentData} onNext={nextStep} />}
      {step === 2 && (
        <RecipientDetailsStep data={paymentData} updateData={updatePaymentData} onNext={nextStep} onBack={prevStep} />
      )}
      {step === 3 && (
        <BankDetailsStep data={paymentData} updateData={updatePaymentData} onNext={nextStep} onBack={prevStep} />
      )}
      {step === 4 && <PaymentInstructionStep data={paymentData} onNext={nextStep} onBack={prevStep} />}
      {step === 5 && <ProcessingStep data={paymentData} onGoHome={goToStart} />}
    </Card>
  )
}
