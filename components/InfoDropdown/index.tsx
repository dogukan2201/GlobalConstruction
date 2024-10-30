import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

type Props = {};

export default function InfoDropdown({}: Props) {
  const t = useTranslations("infoDropdown");

  return (
    <div className="fixed bottom-9 right-9">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center w-12 h-12 bg-primary-hover text-primary rounded-full shadow-lg dropdown-trigger">
          <HiOutlineInformationCircle size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
          <DropdownMenuLabel>
            <span className="text-primary font-bold">{t("title")}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-green-500 hover:text-white transition duration-200">
            <a
              href="https://wa.me/+905321653661"
              className="text-primary flex justify-center items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-primary font-bold" />
              {t("whatsapp")}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              href="mailto:globalgrupinsaatt@gmail.com
"
              className="flex justify-center items-center gap-2"
            >
              <FaEnvelope className="text-primary " />
              {t("email")}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              href="tel:+905321653661"
              className="flex justify-center items-center gap-2"
            >
              <FaPhone size={5} className="text-primary" />
              {t("call")}
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
