"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import phoneIcon from "@/images/phone-icon-for-modal.png"
import PhoneInput from "./PhoneInput"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [showContent, setShowContent] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState<string>("")

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 50)
      return () => clearTimeout(timer);
    } else {
      setShowContent(false)

      const timer = setTimeout(() => {
        setIsVisible(false)
        document.body.style.overflow = ""
      }, 350)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const cleanPhoneNumber = phoneNumber.replace(/\D/g, "")
      console.log("Номер телефону (відформатований):", phoneNumber)
      console.log("Номер телефону (чистий):", cleanPhoneNumber)

      onClose()
      setPhoneNumber("")
    },
    [phoneNumber, onClose]
  );

  const requestClose = useCallback(() => {
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        requestClose()
      }
    }

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isVisible, requestClose])

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        requestClose()
      }
    },
    [requestClose]
  )

  if (!isVisible) return null

  return (
    <div
      onClick={handleOverlayClick}
      className={`px-3 text-project-white fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300
        ${showContent ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className={`relative transform rounded-2xl bg-project-blue p-6 transition-all duration-300 ease-in-out
          ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        <button
          className="absolute right-4 top-4 text-white transition-all duration-500 opacity-50 hover:scale-125 hover:opacity-100"
          onClick={requestClose}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
        <h2 className="mb-4 text-lg font-bold">Залишити заявку</h2>
        <p className="mb-5">Будь ласка, введіть Ваш номер телефону</p>
        <form className="relative" onSubmit={handleFormSubmit}>
          <span className="absolute -left-9 top-14 -translate-y-1/2 scale-25">
            <Image src={phoneIcon} alt="phone icon" />
          </span>
          <PhoneInput
            label="Ваш номер телефону"
            value={phoneNumber}
            onChange={setPhoneNumber}
            className="text-project-blue"
          />

          <div className={`h-[1px] mt-5 mb-3 bg-project-white opacity-10`}></div>

          <button
            type="submit"
            className={`
              mt-3 w-full rounded-full bg-project-white px-6 py-3 font-bold text-project-blue transition-all duration-300
              hover:bg-gray-300
              ${
                phoneNumber.replace(/\D/g, "").length < 12
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }
            `}
            disabled={phoneNumber.replace(/\D/g, "").length < 12}
          >
            Зателефонуйте мені
          </button>
        </form>
      </div>
    </div>
  );
}