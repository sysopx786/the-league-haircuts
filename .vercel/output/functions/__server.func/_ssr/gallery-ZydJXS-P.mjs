import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { s as gallery } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro } from "./shell-BHRshLuv.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-ZydJXS-P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const [active, setActive] = (0, import_react.useState)(null);
	const shot = active === null ? null : gallery[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Portfolio",
			title: "The work",
			lede: "Photos published by the shop. None of them are a confirmed before-and-after of the same person, so this page does not pair them as transformations."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-2",
			children: gallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: index === 0 ? "sm:col-span-2" : "",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "block w-full text-left",
					onClick: () => setActive(index),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt,
						className: index === 0 ? "aspect-video w-full object-cover" : "aspect-4/5 w-full object-cover",
						width: 1200,
						height: 900
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-sm text-muted",
						children: item.caption
					})]
				})
			}, item.src))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: shot !== null,
			onOpenChange: (open) => !open && setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "fixed top-1/2 left-1/2 z-50 w-[min(100%,920px)] -translate-x-1/2 -translate-y-1/2 bg-cream p-3 outline-none",
				children: shot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "sr-only",
						children: shot.caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shot.src,
						alt: shot.alt,
						className: "max-h-[80vh] w-full object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: shot.caption
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							className: "border border-ink px-3 py-2 text-sm",
							children: "Close"
						})]
					})
				] }) : null
			})] })
		})
	] });
}
//#endregion
export { GalleryPage as component };
