import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import tailwindcss from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const explicitModuleBoundaryTypes = {
  allowedNames: ["Page", "Layout"],
};

const twOptions = {
  callees: ["clsx", "cva", "cn"],
  classRegex: "^class(Name)?$",

  // white list any classname which does NOT start with `bg-` and `text-`
  whitelist: ["((bg|text)\\-).*"],
};

const eslintConfig = [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended"
  ),
  ...tailwindcss.configs["flat/recommended"],
  {
    rules: {
      "react/prop-types": ["off"],
      "react/react-in-jsx-scope": ["off"],
      "@typescript-eslint/explicit-module-boundary-types": [
        "error",
        explicitModuleBoundaryTypes,
      ],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      "tailwindcss/classnames-order": ["error", twOptions],
      "tailwindcss/enforces-negative-arbitrary-values": ["error", twOptions],
      "tailwindcss/enforces-shorthand": ["error", twOptions],
      "tailwindcss/migration-from-tailwind-2": ["error", twOptions],
      "tailwindcss/no-contradicting-classname": ["error", twOptions],
      "tailwindcss/no-custom-classname": ["error", twOptions],
      "tailwindcss/no-unnecessary-arbitrary-value": ["error", twOptions],
    },
  },
];

export default eslintConfig;
