import { Text, clx } from "@modules/common/components/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

export default function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full bg-ui-bg-base">
      <div className="content-container flex flex-col w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 md:py-20 items-start justify-between">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 flex flex-col gap-y-4 pr-0 md:pr-10">
            <LocalizedClientLink
              href="#"
              className="txt-compact-xlarge-plus text-ui-fg-base uppercase hover:text-ui-fg-subtle transition-colors tracking-widest font-bold"
            >
              DCUK Perfumes
            </LocalizedClientLink>
            <p className="txt-small text-ui-fg-subtle leading-relaxed">
              We are committed to providing quality products and services that meet your needs. Our customer service team works hard to ensure your online shopping experience with DCUK Perfumes is entirely satisfying and enjoyable.
            </p>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 w-full">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-y-4">
              <span className="txt-small-plus text-ui-fg-base uppercase tracking-wider font-semibold">
                Quick Links
              </span>
              <ul className="flex flex-col gap-y-3 txt-small text-ui-fg-subtle">
                {["Home", "About", "Contact", "Privacy Policy", "Delivery Policy", "Terms & Conditions"].map((item) => (
                  <li key={item}>
                    <LocalizedClientLink href="#" className="hover:text-ui-fg-base transition-colors">
                      {item}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-y-4">
              <span className="txt-small-plus text-ui-fg-base uppercase tracking-wider font-semibold">
                Useful Links
              </span>
              <ul className="flex flex-col gap-y-3 txt-small text-ui-fg-subtle">
                {["FAQs", "Cart", "Shop", "My Account", "Track Order"].map((item) => (
                  <li key={item}>
                    <LocalizedClientLink href="#" className="hover:text-ui-fg-base transition-colors">
                      {item}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Where We Are */}
            <div className="flex flex-col gap-y-4">
              <span className="txt-small-plus text-ui-fg-base uppercase tracking-wider font-semibold">
                Where We Are
              </span>
              <ul className="flex flex-col gap-y-3 txt-small text-ui-fg-subtle">
                {["UAE", "Oman", "Kuwait", "Bahrain", "Saudi Arabia"].map((item) => (
                  <li key={item}>
                    <LocalizedClientLink href="#" className="hover:text-ui-fg-base transition-colors">
                      {item}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Information */}
            <div className="flex flex-col gap-y-4">
              <span className="txt-small-plus text-ui-fg-base uppercase tracking-wider font-semibold">
                Business Information
              </span>
              <ul className="flex flex-col gap-y-3 txt-small text-ui-fg-subtle">
                <li>
                  <span className="block mb-1">UK VAT Number:</span>
                  <span className="text-ui-fg-base">GB425783182</span>
                </li>
                <li>
                  <span className="block mb-1">German VAT Number:</span>
                  <span className="text-ui-fg-base">DE459632985</span>
                </li>
                <li>
                  <span className="block mb-1">Company number:</span>
                  <span className="text-ui-fg-base">13792469</span>
                </li>
                <li className="pt-2">
                  <a href="mailto:info@dcukperfumes.com" className="hover:text-ui-fg-base transition-colors font-medium">
                    info@dcukperfumes.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row w-full pt-8 pb-16 justify-between items-center text-ui-fg-muted border-t border-ui-border-base gap-4 text-center sm:text-left">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Designers Collection Ltd (Company Number 13792469) T/A DCUK Perfumes.
          </Text>
        </div>
      </div>
    </footer>
  );
}