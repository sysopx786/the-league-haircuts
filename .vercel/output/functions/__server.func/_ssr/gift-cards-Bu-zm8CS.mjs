import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as giftCategories, p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gift-cards-Bu-zm8CS.js
var import_jsx_runtime = require_jsx_runtime();
function GiftPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Vagaro",
		title: "Gift cards",
		lede: "Purchase happens on Vagaro. This page does not set dollar amounts, delivery speed, or redemption rules that the shop has not published."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Categories on the Vagaro page"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-line border-y border-line",
				children: giftCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-3",
					children: category
				}, category))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.giftUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "mt-8 inline-block bg-ink px-5 py-3 text-sm text-inverse",
				children: "Buy a Gift Card"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-paper-2 p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Before you buy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 list-disc space-y-3 pl-5 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The card is issued by the shop through Vagaro, not by this website." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Choose the amount on Vagaro. No amount is listed on the public category page." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Redemption rules and expiration were not published on the category page." })
				]
			})]
		})]
	})] });
}
//#endregion
export { GiftPage as component };
