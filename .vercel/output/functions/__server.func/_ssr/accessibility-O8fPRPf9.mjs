import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accessibility-O8fPRPf9.js
var import_jsx_runtime = require_jsx_runtime();
function AccessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Access",
		title: "Accessibility",
		lede: "The Vagaro profile lists disabled access at the Exton shop. This website is built to be used with a keyboard, a screen reader, and reduced motion."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl space-y-5 px-5 py-12 text-ink-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pages use one main heading, visible focus, labels on controls, and text descriptions on photographs. The mobile Call, Directions, and Book bar stays at the bottom of the screen and does not cover the page content." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"If a page, photo, or booking link does not work for you, call ",
				site.phoneDisplay,
				" or email ",
				site.email,
				". Say which page and what you were trying to do."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This statement is not a claim that every WCAG 2.2 AA test has been formally certified." })
		]
	})] });
}
//#endregion
export { AccessPage as component };
