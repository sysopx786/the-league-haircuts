import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-DwlSfj7w.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Policy",
		title: "Terms"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl space-y-5 px-5 py-12 text-ink-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This website describes The League Haircuts in Exton, Pennsylvania. It is information, not a booking system. An appointment exists only after it is confirmed on Vagaro." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Cancellations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vagaro publishes this policy: customers must provide at least 12 hours’ notice for service cancellations. Cancellations within this timeframe may incur a fee or result in forfeited payment. The dollar amount of that fee is not published on the profile." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Prices"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prices on the Services page match the Vagaro menu at the time this site was built. Vagaro is the price you are offered when you book. If the two ever differ, the Vagaro checkout price controls the appointment." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Gift cards"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gift cards are sold by the shop on Vagaro. This website does not take payment and does not set gift-card terms." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Questions: ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "underline",
					href: `mailto:${site.email}`,
					children: site.email
				}),
				" or ",
				site.phoneDisplay,
				"."
			] })
		]
	})] });
}
//#endregion
export { TermsPage as component };
