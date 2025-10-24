"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { MenuItem, SocialItem, PhoneItem } from "../app/types";
interface StaggeredMenuProps {
  position?: "left" | "right";
  items: MenuItem[];
  socialItems?: SocialItem[];
  phoneItems?: PhoneItem[];
  displaySocials?: boolean;
  displayPhones?: boolean;
  displayItemNumbering?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  colors?: string[];
  logoUrl?: string;
  accentColor?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export default function StaggeredMenu({
  position = "right",
  items,
  socialItems = [],
  phoneItems = [],
  displaySocials = true,
  displayPhones = true,
  displayItemNumbering = false,
  menuButtonColor = "#000",
  openMenuButtonColor = "#000",
  changeMenuColorOnOpen = false,
  colors = ["#B19EEF", "#5227FF"],
  logoUrl,
  accentColor = "#ff6b6b",
  onMenuOpen,
  onMenuClose,
}: StaggeredMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) onMenuOpen?.();
      else onMenuClose?.();
      return next;
    });
  };

  // Parent container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // slower reveal
      },
    },
  };

  // Child items animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative">
      {/* Logo outside the menu */}
      {logoUrl && (
        <div className="absolute top-4 left-4 z-50">
          <Image src={logoUrl} alt="Logo" width={120} height={40} />
        </div>
      )}

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="fixed top-4 right-4 z-50 p-2"
        style={{
          color: isOpen
            ? changeMenuColorOnOpen
              ? openMenuButtonColor
              : menuButtonColor
            : menuButtonColor,
        }}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sliding Menu */}
      <motion.nav
        initial={{ x: position === "right" ? "100%" : "-100%" }}
        animate={{ x: isOpen ? 0 : position === "right" ? "100%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 w-72 bg-[#1a1a1a] text-white p-8 z-40 flex flex-col space-y-8"
        style={{
          [position]: 0,
          background: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`,
        }}
      >
        {/* Nav Items */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="space-y-6"
        >
          {items.map((item, idx) => (
            <motion.li key={item.label} variants={itemVariants}>
              <Link
                href={item.link}
                aria-label={item.ariaLabel}
                className="text-lg font-medium hover:text-white/80 transition-colors flex items-center"
              >
                {displayItemNumbering && (
                  <span
                    style={{ color: accentColor }}
                    className="mr-2 text-sm font-bold"
                  >
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                )}
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Phone Items */}
        {displayPhones && phoneItems.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
            className="mt-8 space-y-3"
          >
            {phoneItems.map((phone) => (
              <motion.a
                key={phone.label}
                href={phone.link}
                variants={itemVariants}
                className="block text-base hover:text-white/80 transition-colors"
              >
                {phone.label}
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Social Items */}
        {displaySocials && socialItems.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
            className="mt-auto flex space-x-6"
          >
            {socialItems.map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="hover:opacity-80 transition-opacity"
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}
