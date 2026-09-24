import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B_9QdTjw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-BrrgIyIx.css";
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale-1"
			},
			{ title: "The League Haircuts | Exton, PA" },
			{
				name: "theme-color",
				content: "#12110f"
			},
			{
				name: "referrer",
				content: "strict-origin-when-cross-origin"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	}),
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-start justify-center bg-paper px-6 text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-gold uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: "That page is not on the book."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "The link does not match a page on The League Haircuts."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "bg-ink px-4 py-3 text-sm text-inverse",
					children: "Back home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.vagaro.com/theleaguehaircuts/book-now",
					className: "border border-ink px-4 py-3 text-sm",
					children: "Book Appointment"
				})]
			})
		]
	})
});
var site = {
	name: "The League Haircuts",
	url: "https://www.theleaguehaircuts.com",
	phoneDisplay: "(610) 524-2421",
	phoneTel: "+16105242421",
	email: "customercare@theleaguehaircuts.com",
	hiringEmail: "oneil@theleaguehaircuts.com",
	street: "260 North Pottstown Pike",
	city: "Exton",
	region: "PA",
	postal: "19341",
	geo: {
		lat: 40.0336569,
		lng: -75.6328579
	},
	bookUrl: "https://www.vagaro.com/theleaguehaircuts/book-now",
	vagaroUrl: "https://www.vagaro.com/theleaguehaircuts",
	servicesUrl: "https://www.vagaro.com/theleaguehaircuts/services",
	staffUrl: "https://www.vagaro.com/theleaguehaircuts/staff",
	giftUrl: "https://www.vagaro.com/theleaguehaircuts/gift-certificates",
	instagram: "https://www.instagram.com/theleaguehaircuts/",
	facebook: "https://www.facebook.com/p/The-League-Haircuts-61579248129845/",
	vagaroRating: "4.9",
	vagaroReviewCount: 89,
	founded: "2025"
};
var addressLine = `${site.street}, ${site.city}, ${site.region} ${site.postal}`;
var directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`;
var hours = [
	{
		day: "Monday",
		hours: "10:00 AM – 7:00 PM"
	},
	{
		day: "Tuesday",
		hours: "10:00 AM – 7:00 PM"
	},
	{
		day: "Wednesday",
		hours: "10:00 AM – 7:00 PM"
	},
	{
		day: "Thursday",
		hours: "10:00 AM – 7:00 PM"
	},
	{
		day: "Friday",
		hours: "9:00 AM – 5:00 PM"
	},
	{
		day: "Saturday",
		hours: "8:00 AM – 3:00 PM"
	},
	{
		day: "Sunday",
		hours: "Closed"
	}
];
var services = [
	{
		name: "Classic Haircut",
		price: "$28.00",
		description: "A customized haircut designed by your stylist to fit your individual style and preferences."
	},
	{
		name: "Skin Fade",
		price: "$32.00",
		description: "A skin fade is a popular haircut that features a gradient effect, where the hair gradually shortens from the top down to the skin at the sides and back."
	},
	{
		name: "Beard Trim",
		price: "$15.00",
		description: "Experience a precise Beard Trim that delivers a clean, polished look."
	},
	{
		name: "Child's Haircut",
		price: "$25.00",
		description: "A customized children's haircut designed by your stylist to fit their individual style and preferences. Must be 12 or under."
	},
	{
		name: "Child's Skin Fade",
		price: "$30.00",
		description: "A skin fade is a popular haircut that features a gradient effect, where the hair gradually shortens from the top down to the skin at the sides and back."
	},
	{
		name: "Senior/Military Haircut",
		price: "$25.00",
		description: "Classic haircut for seniors 65+ and/or active/veteran military."
	},
	{
		name: "Senior/Military Skin Fade",
		price: "$30.00",
		description: "A skin fade is a popular haircut that features a gradient effect, where the hair gradually shortens from the top down to the skin at the sides and back."
	}
];
var team = [
	{
		name: "Amber",
		role: "Stylist",
		years: "15 years",
		photo: "/media/p1.jpg",
		alt: "Amber, stylist at The League Haircuts in Exton, standing with arms crossed in a black shirt",
		rating: "4.7",
		reviews: 14,
		instagram: "https://www.instagram.com/amber_theleaguehaircuts/",
		bio: "Amber has been behind the chair for 15 years, after graduating from Empire Beauty School in Exton. She loves working with both clippers and scissors, but her favorite cut of all time is a clean, classic high and tight. Hair and motherhood are her passions and both bring her happiness. When she's not at the shop, she enjoys doing crafts, playing outside, and soaking up family time.",
		focus: "Clippers, scissors, and a classic high and tight"
	},
	{
		name: "Jessica",
		role: "Stylist",
		years: "19 years",
		photo: "/media/p2.jpg",
		alt: "Jessica, stylist at The League Haircuts in Exton, with long dark hair and a black top",
		rating: "5.0",
		reviews: 32,
		instagram: null,
		bio: "With 19 years of experience, Jessica specializes in boys' and men's cuts. She has a special love for creative designs and working with children with special needs. As a sister to two autistic brothers, she has spent years honing both her craft and her compassion. She's always excited to welcome new clients to the chair. Outside the shop, she volunteers weekly at a local rabbit shelter and cares for her four bunnies at home. She's also into kayaking, birding, photography, horror conventions, and all things Halloween. She splits her time between traveling and relaxing at her mountain home in West Virginia.",
		focus: "Boys' and men's cuts, designs, and children with special needs"
	},
	{
		name: "Brittany",
		role: "Stylist",
		years: "16 years",
		photo: "/media/p3.jpg",
		alt: "Brittany, stylist at The League Haircuts in Exton, with her hair pulled back and a black long-sleeve top",
		rating: "5.0",
		reviews: 8,
		instagram: "https://www.instagram.com/brittanyd_theleaguehaircuts/",
		bio: "With 16 years of experience, Brittany specializes in fades and takes pride in creating a comfortable, positive experience for every client, especially little ones and children with special needs. Her background as a teacher's assistant helps her connect with all ages in the chair. Outside the shop, she loves exploring new places around Chester County on her fiancé’s motorcycle and spending quality time with family.",
		focus: "Fades, little ones, and children with special needs"
	},
	{
		name: "Karisa",
		role: "Senior Barber",
		years: "Almost 20 years",
		photo: "/media/p4.jpg",
		alt: "Karisa, senior barber at The League Haircuts in Exton, in a black T-shirt",
		rating: "5.0",
		reviews: 18,
		instagram: "https://www.instagram.com/best_cut_secret/",
		bio: "With experience spanning almost two decades, including a mentorship by 21-time award-winning barber Talon “Sharp” Barnett, Karisa specializes in skin fades, tapers, and beard trims, along with scissor work. She makes continuing education a priority to keep her skills sharp and to provide the latest styles and trends to those sitting in her chair. Karisa loves developing long-lasting friendships with her clients, piña coladas, and getting caught in the rain.",
		focus: "Skin fades, tapers, beard trims, and scissor work"
	},
	{
		name: "Shayla",
		role: "Stylist",
		years: "34 years",
		photo: "/media/p5.jpg",
		alt: "Shayla, stylist at The League Haircuts in Exton, with long highlighted hair and a black blazer",
		rating: "5.0",
		reviews: 7,
		instagram: null,
		bio: "With 34 years of experience behind the chair, Shayla brings her skill and passion to every cut. A proud graduate of Schilling and Douglass, she specializes in both scissor and clipper work, creating styles that fit each client perfectly. Outside the shop, she loves spending time with friends and family and making new memories that inspire her every day.",
		focus: "Scissor work and clipper work"
	},
	{
		name: "Jenna",
		role: "Stylist",
		years: "12 years",
		photo: "/media/p6.jpg",
		alt: "Jenna, stylist at The League Haircuts in Exton, with long highlighted hair and a black top",
		rating: null,
		reviews: 0,
		instagram: null,
		bio: "Jenna is a men's hairstylist who loves helping her clients look and feel their absolute best. She specializes in skin fades and longer layered scissor cuts. A graduate of Pulse, a Paul Mitchell Partner School, Jenna brings 12 years of industry experience, creativity, and a genuine passion for making every client feel confident. Outside of the salon, Jenna enjoys spending time with friends and family, playing video games with her fiancé, working out, going to concerts, and being a proud dog mom to her bulldog, Dilbert.",
		focus: "Skin fades and longer layered scissor cuts"
	}
];
var reviews = [
	{
		name: "Christine W",
		date: "Sep 18, 2026",
		staff: "Karisa",
		quote: "Karisa is great and really takes her time to give my husband and boys the best hair cuts! She listens and makes your vision or inspiration reality. She explains what she is doing and why and really cares about how their hair is going to look today and in the future. So glad we found her!"
	},
	{
		name: "Mike W",
		date: "Aug 18, 2026",
		staff: "Jessica",
		quote: "Jessica gives a great cut every time which is why I've been coming back to The League for over a year now."
	},
	{
		name: "Suraj I",
		date: "Mar 20, 2026",
		staff: "Jessica",
		quote: "Great service and everyone seems happy to be there. It is quick and love that they have a scheduling system, as it is much more comfortable to book with someone who knows what I want for my hair and has experience cutting my hair, rather than just with someone who doesn't. Always takes the time with my haircut whenever I go in. Always asks what I want in case I want something different from the last time."
	},
	{
		name: "michael f",
		date: "Jul 17, 2026",
		staff: "Karisa",
		quote: "Nice clean shop, great people working there. What a great stylish and hair cuter. I really don’t want to share her with anyone."
	},
	{
		name: "Biff B",
		date: "May 7, 2026",
		staff: "Shayla",
		quote: "Shayla always makes me feel at home and I view her as a true friend who also makes me look wonderful after every visit!"
	},
	{
		name: "Thomas O",
		date: "Feb 25, 2026",
		staff: "Brittany",
		quote: "Thanks Brittany for a professional & relaxing experience."
	},
	{
		name: "Sameer M",
		date: "May 19, 2026",
		staff: "Amber",
		quote: "Amber is the best."
	},
	{
		name: "Don H",
		date: "Jun 2, 2026",
		staff: "Karisa",
		quote: "Another enjoyable visit with Karisa. Pleasant, efficient, and my wife likes the way she cuts my hair."
	},
	{
		name: "Charles K",
		date: "Feb 11, 2026",
		staff: "Karisa",
		quote: "Everyone was so welcoming and friendly!! Fun personalities!! Karisa absolutely killed it!! Great customer service and very easy to talk to!! Highly recommend her to anyone considering coming here!!"
	},
	{
		name: "Mike W",
		date: "Jan 14, 2026",
		staff: "Jessica",
		quote: "It's a perfect cut every time with Jessica. She always takes her time and listens to what you want."
	}
];
var gallery = [
	{
		src: "/media/hero.jpg",
		alt: "A stylist at The League Haircuts in Exton using clippers on a client wearing a cape",
		caption: "In the chair"
	},
	{
		src: "/media/work3.jpg",
		alt: "Close view of a skin fade in progress at The League Haircuts in Exton, Pennsylvania",
		caption: "Skin fade"
	},
	{
		src: "/media/work2.jpg",
		alt: "Child with a skin fade and longer hair on top, seated at The League Haircuts in Exton",
		caption: "Child's skin fade"
	},
	{
		src: "/media/banner.jpg",
		alt: "The League Haircuts interior in Exton, with styling chairs, wood floors, and sports photos on the wall",
		caption: "The shop"
	},
	{
		src: "/media/work1.jpg",
		alt: "Young client in a black shirt at The League Haircuts in Exton, Pennsylvania",
		caption: "Kids welcome"
	}
];
var facts = [
	{
		label: "Walk-ins",
		value: "Yes"
	},
	{
		label: "Parking",
		value: "Free parking"
	},
	{
		label: "Payments",
		value: "Cash and major cards"
	},
	{
		label: "Access",
		value: "Disabled access"
	}
];
var amenities = [
	"WiFi",
	"TV",
	"Disabled access",
	"LGBTQIA friendly",
	"Kid friendly"
];
var giftCategories = [
	"Just Because",
	"Birthday",
	"Congratulations",
	"Fall",
	"Halloween",
	"Barber",
	"Hair"
];
var faqs = [
	{
		q: "Do you take walk-ins?",
		a: "Yes. Vagaro lists walk-ins as accepted. You can also book a time online."
	},
	{
		q: "How do I book?",
		a: "Appointments are booked through Vagaro. Choose Book Appointment on this site and you will go straight to The League Haircuts booking page."
	},
	{
		q: "What is the cancellation policy?",
		a: "Customers must provide at least 12 hours' notice for service cancellations. Cancellations within this timeframe may incur a fee or result in forfeited payment. The fee amount is not published."
	},
	{
		q: "Do you cut kids' hair?",
		a: "Yes. A child's haircut is $25.00 and must be 12 or under. A child's skin fade is $30.00. The shop is listed as kid friendly."
	},
	{
		q: "Is there a senior or military price?",
		a: "A senior/military haircut is $25.00 for seniors 65+ and/or active or veteran military. A senior/military skin fade is $30.00."
	},
	{
		q: "Do you trim beards?",
		a: "Yes. A beard trim is $15.00."
	},
	{
		q: "Where do I park?",
		a: "Free parking is listed for the shop."
	},
	{
		q: "How can I pay?",
		a: "Visa, Mastercard, Discover, American Express, debit card, and cash."
	},
	{
		q: "Can I buy a gift card?",
		a: "Gift cards are sold on Vagaro. Categories shown there are Just Because, Birthday, Congratulations, Fall, Halloween, Barber, and Hair. Amounts and delivery terms are confirmed at checkout on Vagaro."
	}
];
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/team",
		label: "Team"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/reviews",
		label: "Reviews"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/gift-cards",
		label: "Gift Cards"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var $$splitComponentImporter$11 = () => import("./routes-Dy0kKXMy.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({
		meta: [{ title: "The League Haircuts | Woman-Owned Barbershop in Exton, PA" }, {
			name: "description",
			content: "The League Haircuts is a woman-owned barbershop at 260 North Pottstown Pike, Exton. Haircuts for men and children, skin fades, and beard trims. Book on Vagaro."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./about-CdoaFBFN.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => ({
		meta: [{ title: "About | The League Haircuts, Woman-Owned in Exton" }, {
			name: "description",
			content: "The League Haircuts was founded in 2025 in Exton, Pennsylvania, by a former Division 1 athlete and a seasoned stylist. Woman-owned barbershop for men and children."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/about`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./accessibility-O8fPRPf9.mjs");
var Route$9 = createFileRoute("/accessibility")({
	head: () => ({
		meta: [{ title: "Accessibility | The League Haircuts" }, {
			name: "description",
			content: "Accessibility at The League Haircuts in Exton. The shop lists disabled access. This website aims to meet WCAG 2.2 AA practices."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/accessibility`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-O8icTF1t.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({
		meta: [{ title: "Contact & Hours | The League Haircuts, Exton PA" }, {
			name: "description",
			content: "The League Haircuts is at 260 North Pottstown Pike, Exton, PA 19341. Call (610) 524-2421. Sunday closed. Free parking. Book on Vagaro."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/contact`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./gallery-ZydJXS-P.mjs");
var Route$7 = createFileRoute("/gallery")({
	head: () => ({
		meta: [{ title: "Gallery | The League Haircuts, Exton PA" }, {
			name: "description",
			content: "Photographs from The League Haircuts in Exton: the shop, skin fades, and children’s cuts. No staged before-and-after pairs are published."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/gallery`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./gift-cards-Bu-zm8CS.mjs");
var Route$6 = createFileRoute("/gift-cards")({
	head: () => ({
		meta: [{ title: "Gift Cards | The League Haircuts, Exton PA" }, {
			name: "description",
			content: "Buy a gift card for The League Haircuts in Exton on Vagaro. Categories include Birthday, Barber, and Hair. Amounts are confirmed at checkout."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/gift-cards`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./now-hiring-BGubZCqB.mjs");
var Route$5 = createFileRoute("/now-hiring")({
	head: () => ({
		meta: [{ title: "Now Hiring | The League Haircuts, Exton PA" }, {
			name: "description",
			content: "The League Haircuts in Exton is hiring experienced stylists and barbers. Email oneil@theleaguehaircuts.com. Conversations are confidential."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/now-hiring`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-B4IuiR7E.mjs");
var Route$4 = createFileRoute("/privacy")({
	head: () => ({
		meta: [{ title: "Privacy | The League Haircuts" }, {
			name: "description",
			content: "How The League Haircuts website handles information. Booking and gift cards are completed on Vagaro. This site does not run ads or analytics."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/privacy`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./reviews-K5Gz2xIL.mjs");
var Route$3 = createFileRoute("/reviews")({
	head: () => ({
		meta: [{ title: "Reviews | The League Haircuts, Exton PA" }, {
			name: "description",
			content: "Vagaro lists The League Haircuts in Exton at 4.9 from 89 reviews. Read a selection of those reviews, quoted as written."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/reviews`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-iIwSbczu.mjs");
var Route$2 = createFileRoute("/services")({
	head: () => ({
		meta: [{ title: "Services & Prices | The League Haircuts, Exton PA" }, {
			name: "description",
			content: "Menu at The League Haircuts in Exton: classic haircut $28, skin fade $32, beard trim $15, kids, and senior/military cuts. Book on Vagaro."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/services`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./team-DZ4WolUy.mjs");
var Route$1 = createFileRoute("/team")({
	head: () => ({
		meta: [{ title: "The Team | The League Haircuts, Exton PA" }, {
			name: "description",
			content: "Meet Amber, Jessica, Brittany, Karisa, Shayla, and Jenna at The League Haircuts in Exton, Pennsylvania."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/team`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-DwlSfj7w.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({
		meta: [{ title: "Terms | The League Haircuts" }, {
			name: "description",
			content: "Terms for using The League Haircuts website. Appointments and cancellations are governed by the shop’s Vagaro policy."
		}],
		links: [{
			rel: "canonical",
			href: `${site.url}/terms`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute: Route$10.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$12
	}),
	AccessibilityRoute: Route$9.update({
		id: "/accessibility",
		path: "/accessibility",
		getParentRoute: () => Route$12
	}),
	ContactRoute: Route$8.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$12
	}),
	GalleryRoute: Route$7.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$12
	}),
	GiftCardsRoute: Route$6.update({
		id: "/gift-cards",
		path: "/gift-cards",
		getParentRoute: () => Route$12
	}),
	NowHiringRoute: Route$5.update({
		id: "/now-hiring",
		path: "/now-hiring",
		getParentRoute: () => Route$12
	}),
	PrivacyRoute: Route$4.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$12
	}),
	ReviewsRoute: Route$3.update({
		id: "/reviews",
		path: "/reviews",
		getParentRoute: () => Route$12
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$12
	}),
	TeamRoute: Route$1.update({
		id: "/team",
		path: "/team",
		getParentRoute: () => Route$12
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { facts as a, giftCategories as c, reviews as d, services as f, directionsUrl as i, hours as l, team as m, addressLine as n, faqs as o, site as p, amenities as r, gallery as s, router_exports as t, nav as u };
