"use client"

import { ArrowRightOnRectangle } from "@medusajs/icons"
import { clx } from "@modules/common/components/ui"
import { useParams, usePathname } from "next/navigation"

import { signout } from "@lib/data/customer"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MapPin from "@modules/common/icons/map-pin"
import Package from "@modules/common/icons/package"
import User from "@modules/common/icons/user"

const AccountNav = ({
  customer,
}: {
  customer: HttpTypes.StoreCustomer | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }

  const handleLogout = async () => {
    await signout(countryCode)
  }

  // Get user initials for the avatar
  const getInitials = () => {
    if (!customer?.first_name) return "G"
    return customer.first_name.charAt(0).toUpperCase()
  }

  return (
    <div className="w-full">
      {/* --- MOBILE NAVIGATION --- */}
      <div className="small:hidden mb-8 w-full" data-testid="mobile-account-nav">
        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="group flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 hover:bg-gray-100 transition-all duration-200"
            data-testid="account-main-link"
          >
            <span className="font-medium text-sm tracking-wide">Account Menu</span>
            <ChevronDown className="transform group-hover:translate-y-0.5 transition-transform text-gray-400" />
          </LocalizedClientLink>
        ) : (
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden w-full">
            <div className="p-6 border-b border-gray-50 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg shadow-inner">
                {getInitials()}
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
                  Logged in as
                </p>
                <p className="text-base font-semibold text-gray-900 tracking-tight">
                  {customer?.first_name || "Guest User"}
                </p>
              </div>
            </div>
            <nav className="p-3 flex flex-col gap-1 w-full">
              <MobileNavLink href="/account/profile" icon={<User size={20} />} label="Profile" />
              <MobileNavLink href="/account/addresses" icon={<MapPin size={20} />} label="Addresses" />
              <MobileNavLink href="/account/orders" icon={<Package size={20} />} label="Orders" />
              
              <div className="h-px bg-gray-50 my-2 mx-3" />
              
              <button
                type="button"
                className="flex items-center gap-4 px-5 py-4 w-full text-left text-sm font-medium text-red-600 rounded-2xl hover:bg-red-50 transition-colors"
                onClick={handleLogout}
                data-testid="logout-button"
              >
                <ArrowRightOnRectangle size={20} />
                <span>Log out</span>
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* --- DESKTOP NAVIGATION --- */}
      <div className="hidden small:block w-full pr-8" data-testid="account-nav bg-blue-500">
        <div className="w-full">
          {/* User Widget */}
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-100">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white shadow-md">
              <span className="text-xl font-semibold tracking-wide">
                {getInitials()}
              </span>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                My Account
              </span>
              <span className="text-lg font-bold text-gray-900 leading-tight tracking-tight">
                {customer?.first_name || "Guest User"}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 w-full">
            <AccountNavLink href="/account" route={route!} data-testid="overview-link">
              <div className="flex items-center gap-4">
                <User size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>Overview</span>
              </div>
            </AccountNavLink>
            <AccountNavLink href="/account/profile" route={route!} data-testid="profile-link">
              <div className="flex items-center gap-4">
                <User size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>Profile Settings</span>
              </div>
            </AccountNavLink>
            <AccountNavLink href="/account/addresses" route={route!} data-testid="addresses-link">
              <div className="flex items-center gap-4">
                <MapPin size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>Saved Addresses</span>
              </div>
            </AccountNavLink>
            <AccountNavLink href="/account/orders" route={route!} data-testid="orders-link">
              <div className="flex items-center gap-4">
                <Package size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>Order History</span>
              </div>
            </AccountNavLink>

            <div className="h-px bg-gray-100 my-4" /> 

            <button
              type="button"
              className="group flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 w-full"
              onClick={handleLogout}
              data-testid="logout-button"
            >
              <div className="flex items-center gap-4">
                <ArrowRightOnRectangle size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                <span>Log out securely</span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/* --- HELPER COMPONENTS --- */

const MobileNavLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <LocalizedClientLink
      href={href}
      className="flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="text-gray-400">{icon}</span>
        <span>{label}</span>
      </div>
      <ChevronDown className="transform -rotate-90 w-4 h-4 text-gray-300" />
    </LocalizedClientLink>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  "data-testid"?: string
}

const AccountNavLink = ({
  href,
  route,
  children,
  "data-testid": dataTestId,
}: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()
  const active = route.split(countryCode)[1] === href

  return (
    <LocalizedClientLink
      href={href}
      className={clx(
        "group relative flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm transition-all duration-200 ease-out w-full",
        {
          "bg-gray-100 text-gray-900 font-semibold": active,
          "text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-900": !active,
        }
      )}
      data-testid={dataTestId}
    >
      {children}
      {active && (
        <span className="absolute right-4 w-1.5 h-1.5 rounded-full bg-gray-900" />
      )}
    </LocalizedClientLink>
  )
}

export default AccountNav