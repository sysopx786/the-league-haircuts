import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as services, p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, n as JsonLd, r as PageIntro, t as BookLink } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-iIwSbczu.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Services at The League Haircuts",
		itemListElement: services.map((service, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "Service",
				name: service.name,
				description: service.description,
				provider: {
					"@type": "BarberShop",
					name: site.name
				},
				offers: {
					"@type": "Offer",
					price: service.price.replace("$", ""),
					priceCurrency: "USD",
					url: site.bookUrl
				}
			}
		}))
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: schema }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Exton menu",
			title: "Services and prices",
			lede: "Prices below are the amounts listed on Vagaro. Appointment length is not published on the booking menu, so it is not shown here."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-line border-y border-line",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-4 py-8 lg:grid-cols-[1fr_auto] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: service.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: service.description
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 lg:flex-col lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: service.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
							className: "bg-ink px-4 py-3 text-sm text-inverse",
							children: "Book Appointment"
						})]
					})]
				}, service.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-sm text-muted",
				children: "The shop website previously listed a child’s haircut for ages 15 and under, plus shampoo and beard-trim add-ons. Those details are not on the current Vagaro menu, so they are not sold here. Book from the Vagaro list."
			})]
		})
	] });
}
//#endregion
export { ServicesPage as component };
