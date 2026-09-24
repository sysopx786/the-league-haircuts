import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro, t as BookLink } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CdoaFBFN.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Woman-owned",
		title: "Made it to the league.",
		lede: "The shop’s published story, not a rewritten one."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5 text-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Founded in 2025, The League Haircuts was created by a former Division 1 athlete and a seasoned stylist who recognized the connection between confidence and appearance." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The shop’s belief, as written on its site: a great haircut can elevate your mindset and presence. Whether a client is heading to a job interview, stepping onto a field, or walking through everyday life, the aim is that they look and feel like they’ve made it to the league." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The work is premium haircuts for men and children. The Vagaro profile lists the business type as Hair and Barber, with walk-ins accepted, free parking, disabled access, WiFi, TV, and a kid-friendly room." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This website states that The League Haircuts is woman-owned because that is how the business asked to be identified. Google’s public attributes for the listing were not available from the link provided, so this page does not claim that Google displays a woman-owned badge." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base text-muted",
					children: [
						"The founders are not named on the public site. The customer-care address is ",
						site.email,
						". Hiring notes go to ",
						site.hiringEmail,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
						className: "bg-ink px-4 py-3 text-sm text-inverse",
						children: "Book Appointment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/team",
						className: "border border-ink px-4 py-3 text-sm",
						children: "Meet the team"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/media/hero.jpg",
			alt: "Haircut in progress at The League Haircuts in Exton",
			className: "h-full max-h-[36rem] w-full object-cover",
			width: 900,
			height: 1100
		})]
	})] });
}
//#endregion
export { AboutPage as component };
