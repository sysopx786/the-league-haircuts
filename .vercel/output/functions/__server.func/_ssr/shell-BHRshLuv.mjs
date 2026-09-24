import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { i as directionsUrl, l as hours, n as addressLine, p as site, u as nav } from "./router-B_9QdTjw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-BHRshLuv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookLink({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: site.bookUrl,
		target: "_blank",
		rel: "noopener noreferrer",
		className,
		children
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-ink",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "main",
			className: "pb-16 sm:pb-0",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBar, {})
	] });
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-ink bg-ink text-inverse",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					"aria-label": "The League Haircuts, home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/logo.jpg",
						alt: "The League Haircuts",
						className: "h-10 w-auto bg-ink object-contain sm:h-12",
						width: 280,
						height: 72
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-5 lg:flex",
					"aria-label": "Primary",
					children: nav.filter((item) => item.to !== "/").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm tracking-widest text-inverse/80 uppercase hover:text-inverse data-[status=active]:text-gold-2",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
						className: "hidden bg-gold px-4 py-2 text-sm font-medium tracking-wide text-ink hover:bg-gold-2 sm:inline-block",
						children: "Book Appointment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center border border-inverse/30 lg:hidden",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((v) => !v),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": true })]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			id: "mobile-nav",
			className: "border-t border-inverse/15 bg-ink px-5 py-4 lg:hidden",
			"aria-label": "Mobile",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "block border-b border-inverse/10 py-3 text-lg text-inverse",
					children: item.label
				}) }, item.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
				className: "mt-4 block bg-gold px-4 py-3 text-center text-sm font-medium text-ink",
				children: "Book Appointment"
			})]
		}) : null]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-ink pb-16 text-inverse sm:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "The League Haircuts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm tracking-wide text-gold-2",
						children: "Woman-owned barbershop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-inverse/75",
						children: addressLine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-2 block text-sm text-inverse underline decoration-gold/60 underline-offset-4",
						href: `tel:${site.phoneTel}`,
						children: site.phoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-1 block text-sm text-inverse/80",
						href: `mailto:${site.email}`,
						children: site.email
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs tracking-widest text-gold-2 uppercase",
					children: "Hours"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-1 text-sm text-inverse/80",
					children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.hours })]
					}, row.day))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs tracking-widest text-gold-2 uppercase",
					children: "Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-inverse/80 hover:text-inverse",
						children: item.label
					}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/now-hiring",
						className: "text-inverse/80 hover:text-inverse",
						children: "Now Hiring"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs tracking-widest text-gold-2 uppercase",
					children: "Policies"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "text-inverse/80 hover:text-inverse",
							children: "Privacy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "text-inverse/80 hover:text-inverse",
							children: "Terms"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/accessibility",
							className: "text-inverse/80 hover:text-inverse",
							children: "Accessibility"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-inverse/80 hover:text-inverse",
							href: site.instagram,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Instagram"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-inverse/80 hover:text-inverse",
							href: site.facebook,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Facebook"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-inverse/80 hover:text-inverse",
							href: directionsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Directions"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-inverse/10 px-5 py-4 text-center text-xs text-inverse/50",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" The League Haircuts. Exton, Pennsylvania."
			]
		})]
	});
}
function MobileBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-cream sm:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "py-3 text-center text-xs tracking-wide text-ink",
				href: `tel:${site.phoneTel}`,
				children: "Call"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "border-x border-line py-3 text-center text-xs tracking-wide text-ink",
				href: directionsUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				children: "Directions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
				className: "bg-ink py-3 text-center text-xs tracking-wide text-inverse",
				children: "Book"
			})
		]
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-gold uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-6xl",
					children: title
				}),
				lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted",
					children: lede
				}) : null
			]
		})
	});
}
function JsonLd({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
//#endregion
export { SiteShell as i, JsonLd as n, PageIntro as r, BookLink as t };
