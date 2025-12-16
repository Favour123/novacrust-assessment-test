💰 NOVACRUST Crypto Checkout Experience

## Overview
A modern, responsive multi-step checkout user interface built with Next.js 16, TypeScript, and Tailwind CSS. This project streamlines the process of converting cryptocurrency to cash, guiding users through payment, recipient, and bank details, with placeholders for future features like cash-to-crypto and crypto-to-fiat loans. It leverages Shadcn UI for a polished and accessible user experience. 🚀

## Features
- **Multi-Step Checkout Flow**: A guided progression through payment details, recipient information, bank details, payment instructions, and transaction processing.
- **Crypto-to-Cash Conversion**: Core functionality allowing users to seamlessly convert supported cryptocurrencies to fiat currency.
- **Dynamic Wallet & Currency Selection**: Interactive dropdowns for selecting various cryptocurrencies (ETH, USDT on different networks) and integration with popular wallets like Metamask, Rainbow, WalletConnect, and others.
- **Recipient & Bank Details Capture**: Secure input fields for gathering necessary recipient email, phone number, bank, account number, and account name.
- **Payment Instructions Display**: Clear instructions for sending cryptocurrency, including wallet address, amount, and network.
- **Transaction Processing & Confirmation**: A dedicated screen to indicate transaction processing status with a unique transaction ID.
- **Responsive Design**: Adapts beautifully across various screen sizes, ensuring a consistent user experience on desktop and mobile devices.
- **Theme Provider**: Supports theme switching (light/dark mode) for enhanced user comfort.
- **Modular UI Components**: Built using reusable Shadcn UI components for consistency and ease of maintenance.
- **"Coming Soon" Modules**: Clearly demarcated sections for planned features like "Cash to Crypto" and "Crypto to Fiat Loan," with email subscription functionality.

## Getting Started
### Installation
To get this project up and running locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/crypto-checkout-experience.git
    cd crypto-checkout-experience
    ```

2.  **Install dependencies**:
    This project uses `npm`.
    ```bash
    npm install
    ```
    Alternatively, if you prefer `yarn` or `pnpm`:
    ```bash
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Environment Variables
No environment variables are strictly required by the client-side application for basic functionality as configured in the provided codebase.

## Usage
The NOVACRUST Crypto Checkout Experience provides an intuitive, step-by-step process for converting crypto to cash. Follow the instructions below to navigate the application:

1.  **Launch the Application**: Once the application is running (e.g., at `http://localhost:3000`), you will see a button labeled "Open Crypto Checkout" centered on the page.
2.  **Initiate Checkout**: Click the "Open Crypto Checkout" button. A modal window will appear, presenting the first step of the checkout process.
3.  **Select Transaction Mode**: On the initial screen, ensure "Crypto to cash" is selected from the tabs. You will also see "Cash to crypto" and "Crypto to fiat loan" which are marked as "Coming Soon" functionalities.
4.  **Enter Payment Details (You Pay)**:
    *   In the "You pay" section, input the amount of cryptocurrency you wish to send.
    *   Click on the currency button (e.g., "ETH") to open the currency selector. You can search for and select other supported cryptocurrencies like "USDT - CELO", "USDT - TON", or "USDT - BNB".
5.  **Review Receiving Details (You Receive)**: The "You receive" section will automatically display the equivalent amount in NGN (Nigerian Naira) you will receive. This field is read-only for now.
6.  **Select Wallets**:
    *   **"Pay from"**: Click the "Select an option" button under "Pay from" to choose the wallet you will use to send the cryptocurrency (e.g., Metamask, Rainbow, WalletConnect, or Other Crypto Wallets).
    *   **"Pay to"**: Click the "Select an option" button under "Pay to" to specify the destination wallet.
7.  **Proceed to Conversion**: After filling in the required fields and selecting the wallets, click the "Convert now" button.
8.  **Enter Recipient Details**:
    *   You will be prompted to enter the "Recipient email" and "Recipient phone number".
    *   Use the dropdown to select the appropriate country code for the phone number.
9.  **Advance to Bank Details**: Click "Next".
10. **Provide Bank Details**:
    *   Enter the "Bank" (select from the dropdown list of supported banks).
    *   Input the "Account number".
    *   Enter the "Account name".
11. **Finalize Bank Details**: Click "Next".
12. **Review Payment Instructions**: A screen will appear providing the wallet address, amount to send, network, and recommended wallet. Carefully copy the wallet address and amount using the provided copy buttons.
    *   **Important**: Pay attention to the warning message regarding the correct cryptocurrency and network to avoid loss of funds.
13. **Confirm Payment Sent**: Once you have sent the cryptocurrency from your wallet, click the "I have sent it" button.
14. **Transaction Processing**: The application will display a "Your transaction is processing" message along with a transaction ID. The recipient will receive the cash shortly.
15. **Return Home**: Click "Go back to home" to close the checkout modal and return to the main application page.

## Technologies Used

| Technology         | Description                                                          |
| :----------------- | :------------------------------------------------------------------- |
| **Next.js 16**     | React framework for building server-rendered and static web applications. |
| **TypeScript**     | Superset of JavaScript that adds static typing.                      |
| **React 19**       | Frontend JavaScript library for building user interfaces.            |
| **Tailwind CSS**   | Utility-first CSS framework for rapidly styling components.          |
| **Shadcn UI**      | Collection of reusable UI components built with Radix UI and Tailwind CSS. |
| **Radix UI**       | Headless UI component library for building accessible components.    |
| **Zod**            | TypeScript-first schema declaration and validation library.          |
| **React Hook Form**| Performant, flexible, and extensible forms with easy validation.    |
| **Lucide React**   | Beautiful & consistent icon toolkit.                                           |


[![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)


