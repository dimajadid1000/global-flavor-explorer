
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground text-sm">{t("language")}:</span>
      {LANGUAGES.map(l => (
        <Button
          key={l.code}
          variant={language === l.code ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage(l.code as "fr" | "en" | "ar")}
          className={language === "ar" ? "font-arabic" : ""}
        >
          {l.label}
        </Button>
      ))}
    </div>
  );
}
