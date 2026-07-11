import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col">
        <div className="grid grid-cols-1  small:grid-cols-[240px_1fr] py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          {/* OUTER CONTAINER: Holds the layout space, background color, and the animated floating gradient orbs */}
          <div className="relative flex-1 z-0 bg-[#f1f1f1] overflow-hidden rounded-2xl md:rounded-[2.5rem] p-4 md:p-8
  before:absolute before:bottom-1/4 before:left-[46%] before:-z-10 before:h-[120px] before:w-[120px] before:-translate-x-full before:rounded-full before:border-2 before:border-white/65 before:bg-gradient-to-r before:from-orange-500 before:to-fuchsia-500 before:shadow-[inset_10px_0px_20px_#fff] before:content-[''] 
  after:absolute after:left-1/2 after:top-1/4 after:-z-10 after:h-[200px] after:w-[200px] after:-translate-x-full after:animate-ani after:rounded-full after:border-2 after:border-white/65 after:bg-gradient-to-b after:from-orange-500 after:to-fuchsia-500 after:shadow-[inset_10px_0px_20px_#fff] after:content-['']">

            {/* INNER CARD: The glassmorphism wrapper that actually holds your {children} and has the shiny wipe animation */}
            <div className="relative z-0 h-full w-full min-h-[600px] overflow-hidden rounded-[16px] border border-[#ffffff56] bg-white/10 p-6 backdrop-blur-[10.5px] shadow-[inset_2px_1px_6px_#ffffff45] 
    after:absolute after:left-0 after:top-0 after:-z-10 after:h-[15px] after:w-[150%] after:rotate-[50deg] after:animate-shine after:bg-white after:blur-[30px] after:content-['']">

              {/* Your page content goes here */}
              <div className="relative z-10 text-[#242424]">
                {children}
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
          <div>
            <h3 className="text-xl-semi mb-4">Got questions?</h3>
            <span className="txt-medium">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
