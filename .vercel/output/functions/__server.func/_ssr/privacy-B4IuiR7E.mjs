import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-B4IuiR7E.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Policy",
		title: "Privacy",
		lede: "Written for what this website actually does."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl space-y-5 px-5 py-12 text-ink-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"The League Haircuts, ",
				site.street,
				", ",
				site.city,
				", ",
				site.region,
				" ",
				site.postal,
				", publishes this site so you can read services, meet the team, and reach the shop. Questions about your information can go to",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "underline",
					href: `mailto:${site.email}`,
					children: site.email
				}),
				"."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "What this site collects"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This website does not have a contact form, an account system, analytics, or advertising pixels. It does not ask you to create a profile." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"If you email ",
				site.email,
				" or ",
				site.hiringEmail,
				", the shop receives whatever you send, including a résumé. Hiring notes are used to consider an application. The shop’s public hiring page says those conversations are confidential. This site does not store that mail. It lives in the shop’s email account."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Vagaro"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Book Appointment and Buy a Gift Card leave this site and open Vagaro. Appointment details, payment, and gift-card purchases are handled by Vagaro under Vagaro’s own privacy policy, not by this page." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Map"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The contact page embeds a map from OpenStreetMap. Loading that map contacts OpenStreetMap’s servers. Directions links open Google Maps in a new tab only if you choose them." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Cookies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This site does not set analytics or advertising cookies. A cookie banner is not shown because those tools are not installed. Vagaro, Google Maps, Instagram, and Facebook use their own cookies if you open them." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Access or deletion"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"To ask what the shop has about you, or to ask that an email or résumé be deleted, write to ",
				site.email,
				". Booking records held by Vagaro have to be requested from Vagaro or through the shop’s Vagaro account."
			] })
		]
	})] });
}
//#endregion
export { PrivacyPage as component };
