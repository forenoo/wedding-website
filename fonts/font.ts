import {
  Cormorant,
  Tangerine,
  Parisienne,
  Inter,
  Saira_Extra_Condensed,
} from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const sairaExtraCondensed = Saira_Extra_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
