import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/now-hiring-BGubZCqB.js
var import_jsx_runtime = require_jsx_runtime();
var offers = [
	"Paid time off",
	"Sign-on bonuses",
	"Performance and quarterly bonus opportunities",
	"Consistent walk-in traffic",
	"Flexible scheduling",
	"A supportive, team-focused environment",
	"An established location with room to grow"
];
function HiringPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Careers",
		title: "Now hiring",
		lede: "The League Haircuts is looking for talented, experienced stylists and barbers."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The shop describes an established Exton location with walk-in traffic and room to grow a clientele without starting from an empty book." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-3xl",
				children: "What the shop lists"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 list-disc space-y-2 pl-5",
				children: offers.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8",
				children: [
					"Send a résumé or a note about yourself to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline decoration-gold underline-offset-4",
						href: `mailto:${site.hiringEmail}`,
						children: site.hiringEmail
					}),
					". The shop says all conversations are confidential. Mail you send is read by the shop. See the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "underline",
						children: "privacy page"
					}),
					" for how to ask that it be deleted."
				]
			})
		]
	})] });
}
//#endregion
export { HiringPage as component };
