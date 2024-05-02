// @ts-check

import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

// As of 2024-5-1, next/core-web-vitals still does not support flat configs.
// We'll use eslint.config.js along the old .eslintrc.js until then.
// Reference: github.com/vercel/next.js/issues/64114

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"no-undef": "off",
		},
		plugins: {
			"@next/next": nextPlugin,
		},
	},
	nextPlugin,
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
);
