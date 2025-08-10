"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import phoneIcon from "@/images/phone-icon-for-modal.png";
import userIcon from "@/images/user-icon-for-modal.png";
import carIcon from "@/images/car-icon-for-modal.png";
import emailjs from "@emailjs/browser";

import PhoneInput from "./PhoneInput";
import TimePicker from "./TimerPicker";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: null | string;
};

export default function Modal({ isOpen, onClose, serviceType }: ModalProps) {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [carBudgetInfoInput, setCarBudgetInfoInput] = useState<string>("");
  const [isUserInputFocused, setIsUserInputFocused] = useState<boolean>(false);
  const [isCarBudgetInfoInputFocused, setIsCarBudgetInfoInputFocused] =
    useState<boolean>(false);

  const [selectedHour, setSelectedHour] = useState<string>("09");
  const [selectedMinute, setSelectedMinute] = useState<string>("00");

  const unlockBodyRef = useRef<(() => void) | null>(null);

  const SERVICE_ID = "service_test";
  const TEMPLATE_ID = "template_b5nrlfs";
  const PUBLIC_KEY = "CEDA8vJPZZOw4ykOJ";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.trim()) {
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name:
            userInput.charAt(0).toUpperCase() + userInput.slice(1) ||
            "Не вказано",
          user_phone: phoneNumber || "Не вказано",
          user_carBudgetInfo:
            carBudgetInfoInput.charAt(0).toUpperCase() +
              carBudgetInfoInput.slice(1) || "Не вказано",
          user_carBody: "Не вказано",
          user_fuelType: "Не вказано",
          user_budget: "Не вказано",
          user_gift: "Не вказано",
          user_service: serviceType || "Не вказано",
          user_callTime:
            selectedHour && selectedMinute
              ? `${selectedHour}:${selectedMinute}`
              : "Не вказано",
        },
        PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      setUserInput("");
    } catch (error) {
      console.log("FAILED...", error);
    }
  };

  const lockBody = useCallback(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = "hidden";

    const header = document.querySelector("header");
    if (header) {
      header.style.transitionProperty = "none";
      header.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      if (header) {
        header.style.paddingRight = "";
        header.style.transitionProperty = "all";
        header.style.transitionDuration = "0ms";
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);

      unlockBodyRef.current = lockBody();

      const timer = setTimeout(() => {
        setShowContent(true);
      }, 50);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsClosing(true);
      setShowContent(false);

      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
        if (unlockBodyRef.current) {
          unlockBodyRef.current();
          unlockBodyRef.current = null;
          const header = document.querySelector("header");
          if (header) {
            setTimeout(() => {
              header.style.transitionDuration = "700ms";
            }, 10);
          }
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen, lockBody]);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      setUserInput("")
      setPhoneNumber("")
      setSelectedHour("09")
      setSelectedMinute("00")
      setCarBudgetInfoInput("")
      onClose()
    },
    [userInput, phoneNumber, selectedHour, selectedMinute, carBudgetInfoInput , onClose]
  );

  const requestClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        requestClose();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, requestClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        requestClose();
      }
    },
    [requestClose]
  );

  if (!isVisible) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className={`px-3 text-project-white backdrop-blur-md fixed inset-0 z-modal flex items-center justify-center bg-black/55 transition-opacity duration-300
        ${showContent ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className={`relative transform rounded-2xl bg-project-blue p-6 transition-all ease-out
          ${
            showContent && !isClosing
              ? "opacity-100 translate-y-0 duration-500"
              : isClosing
              ? "opacity-0 translate-y-[20vh] duration-1000"
              : "opacity-0 translate-y-[-20vh] duration-1000"
          }
        `}
      >
        <button
          className="absolute right-4 top-4 text-white transition-all duration-300 opacity-50
            hover-supported:hover:scale-110 no-hover:active:scale-110
            hover-supported:hover:opacity-100 no-hover:active:opacity-100"
          onClick={requestClose}
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5L4.99998 19M5.00001 5L19 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <h2 className="mb-5 text-xl font-bold">Залишити заявку</h2>
        <p className="mb-5 max-w-80">
          <strong
            style={{ display: serviceType ? "block" : "none" }}
            className="mb-2"
          >
            Ви обрали {serviceType}!
          </strong>
          Будь ласка, введіть Ваше ім&apos;я та Ваш номер телефону
        </p>
        <form
          className="relative"
          onSubmit={(e) => {
            handleFormSubmit(e);
            handleSubmit(e); //EMAILJS
          }}
        >
          <div className="mb-6 relative">
            <span className="absolute -left-14 top-14 -translate-y-1/2 scale-17">
              <Image src={userIcon} alt="user icon" priority />
            </span>
            <label
              htmlFor="name-input"
              className={`block text-project-white font-bold mb-1
                  transition-all duration-500
                ${isUserInputFocused ? "text-xl" : "text-lg"}
                `}
            >
              Ваше ім&apos;я
            </label>
            <input
              id="name-input"
              type="text"
              className={`w-full px-4 py-2 text-project-blue bg-project-white rounded-lg pl-8
                border-2 border-transparent focus:outline-none
                text-[16px] min-h-[44px]
                transition-all duration-300 ease-in-out
                ${isUserInputFocused ? "ring-2 ring-project-white" : ""}
              `}
              onFocus={() => setIsUserInputFocused(true)}
              onBlur={() => setIsUserInputFocused(false)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const filteredValue = event.target.value.replace(
                  /[^a-zA-Zа-яА-ЯҐґІіЇїЄє\s-]/g,
                  ""
                );
                setUserInput(filteredValue);
              }}
              value={userInput}
            />
          </div>

          <div className="mb-6 relative">
            <span className="absolute -left-9 top-14 -translate-y-1/2 scale-25">
              <Image src={phoneIcon} alt="phone icon" priority />
            </span>
            <PhoneInput
              label="Ваш номер телефону"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="text-project-blue"
            />
          </div>

          <div className="mb-6">
            <p className="mb-1 font-bold">
              Виберіть час, за яким Вам зателефонувати
            </p>
            <TimePicker
              selectedHour={selectedHour}
              selectedMinute={selectedMinute}
              setSelectedHour={setSelectedHour}
              setSelectedMinute={setSelectedMinute}
            />
          </div>

          <div className="relative">
            <span className="absolute -left-[187px] top-14 -translate-y-1/2 scale-9">
              <Image src={carIcon} alt="car icon" priority />
            </span>
            <label
              htmlFor="car-budget-info-input"
              className={`block text-project-white font-bold mb-1
                  transition-all duration-300
                ${isCarBudgetInfoInputFocused ? "text-xl" : "text-lg"}
                `}
            >
              Вкажіть авто та бюджет
            </label>
            <input
              id="car-budget-info-input"
              type="text"
              className={`w-full px-4 py-2 text-project-blue bg-project-white rounded-lg pl-14
                border-2 border-transparent focus:outline-none
                text-[16px] min-h-[44px]
                transition-all duration-300 ease-in-out
                ${
                  isCarBudgetInfoInputFocused ? "ring-2 ring-project-white" : ""
                }
              `}
              onFocus={(e) => {
                setIsCarBudgetInfoInputFocused(true);
                setTimeout(() => {
                  e.target.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }, 300);
              }}
              onBlur={() => {
                setIsCarBudgetInfoInputFocused(false);
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCarBudgetInfoInput(event.target.value);
              }}
              value={carBudgetInfoInput}
            />
          </div>

          <div
            className={`h-[1px] mt-5 mb-3 bg-project-white opacity-10`}
          ></div>

          <button
            type="submit"
            className={`
              mt-3 w-full rounded-full bg-project-white px-6 py-3 font-bold text-project-blue transition-all duration-300
              hover:bg-gray-300
              ${
                phoneNumber.replace(/\D/g, "").length < 12 ||
                userInput.length < 2
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }
            `}
            disabled={
              phoneNumber.replace(/\D/g, "").length < 12 || userInput.length < 2
            }
          >
            Зателефонуйте мені
          </button>
        </form>
      </div>
    </div>
  );
}
