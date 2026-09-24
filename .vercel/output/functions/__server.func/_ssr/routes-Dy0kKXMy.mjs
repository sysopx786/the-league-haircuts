import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as facts, d as reviews, f as services, i as directionsUrl, l as hours, m as team, n as addressLine, p as site, s as gallery } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, n as JsonLd, t as BookLink } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dy0kKXMy.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "BarberShop",
		name: site.name,
		url: site.url,
		image: `${site.url}/media/hero.jpg`,
		telephone: site.phoneTel,
		email: site.email,
		foundingDate: site.founded,
		address: {
			"@type": "PostalAddress",
			streetAddress: site.street,
			addressLocality: site.city,
			addressRegion: site.region,
			postalCode: site.postal,
			addressCountry: "US"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: site.geo.lat,
			longitude: site.geo.lng
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday"
				],
				opens: "10:00",
				closes: "19:00"
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Friday",
				opens: "09:00",
				closes: "17:00"
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: "08:00",
				closes: "15:00"
			}
		],
		paymentAccepted: "Cash, Visa, Mastercard, Discover, American Express, Debit",
		currenciesAccepted: "USD",
		sameAs: [
			site.vagaroUrl,
			site.instagram,
			site.facebook
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: schema }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid bg-cream lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 flex flex-col justify-center px-5 py-12 sm:px-10 lg:order-1 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: "Woman-owned · Exton, Pennsylvania"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-5xl leading-none text-ink sm:text-7xl",
						children: "The League Haircuts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lg text-ink-soft",
						children: "Premium haircut services for men and children, with sharp cuts, precision, and care."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-md text-muted",
						children: [addressLine, ". Walk-ins are welcome. Appointments are booked on Vagaro."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
							className: "bg-ink px-5 py-3 text-sm font-medium text-inverse",
							children: "Book Appointment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "border border-ink px-5 py-3 text-sm font-medium text-ink",
							children: "View Services"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 lg:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/hero.jpg",
					alt: "A stylist at The League Haircuts in Exton cutting a client's hair with clippers",
					className: "h-80 w-full object-cover sm:h-[32rem] lg:h-full",
					width: 1200,
					height: 900
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-ink text-inverse",
			"aria-label": "Shop facts",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-line px-5 py-6 lg:border-r",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-widest text-gold-2 uppercase",
							children: "Vagaro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-display text-3xl",
							children: site.vagaroRating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "text-sm text-inverse/70",
							children: [site.vagaroReviewCount, " reviews"]
						})
					]
				}), facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line px-5 py-6 odd:border-r lg:border-t-0 lg:border-r lg:last:border-r-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs tracking-widest text-gold-2 uppercase",
						children: fact.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-lg",
						children: fact.value
					})]
				}, fact.label))]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "What we cut"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "hidden text-sm underline decoration-gold underline-offset-4 sm:inline",
						children: "Full menu"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-line border-y border-line",
					children: services.slice(0, 4).map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: service.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-2xl text-sm text-muted",
							children: service.description
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-ink",
							children: service.price
						})]
					}, service.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
					className: "mt-6 inline-block text-sm underline decoration-gold underline-offset-4",
					children: "Book Appointment"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-inverse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/banner.jpg",
					alt: "Interior of The League Haircuts in Exton, with chairs and sports photos",
					className: "h-80 w-full object-cover",
					width: 1200,
					height: 600
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold-2 uppercase",
						children: "The shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl sm:text-5xl",
						children: "Woman-owned. Built in Exton."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-inverse/80",
						children: "Founded in 2025 by a former Division 1 athlete and a seasoned stylist. The League Haircuts was built on the connection between confidence and appearance, for clients heading to a job interview, stepping onto a field, or walking through everyday life."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-inverse/80",
						children: "The mission, in the shop’s own words: to make every client feel like they’ve made it to the league."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "mt-6 inline-block text-sm text-gold-2 underline underline-offset-4",
						children: "About the shop"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-gold uppercase",
					children: "Team"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "Six chairs"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/team",
					className: "text-sm underline decoration-gold underline-offset-4",
					children: "Meet the team"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: team.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: person.photo,
						alt: person.alt,
						className: "aspect-[4/5] w-full object-cover",
						width: 720,
						height: 900
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							person.role,
							" · ",
							person.years,
							person.reviews > 0 ? ` · ${person.rating} on Vagaro (${person.reviews})` : ""
						]
					})
				] }, person.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: "From the floor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Recent work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-3",
						children: gallery.slice(0, 3).map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: shot.src,
							alt: shot.alt,
							className: "aspect-[3/4] w-full object-cover",
							width: 800,
							height: 1e3
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: shot.caption
						})] }, shot.src))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "mt-6 inline-block text-sm underline decoration-gold underline-offset-4",
						children: "View the gallery"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: "Vagaro reviews"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 font-display text-4xl",
						children: [
							site.vagaroRating,
							" from ",
							site.vagaroReviewCount,
							" reviews"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-sm underline decoration-gold underline-offset-4",
						href: site.vagaroUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Read more on Vagaro"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-10 lg:grid-cols-2",
					children: reviews.slice(0, 4).map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-2xl leading-snug",
							children: [
								"“",
								review.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
							children: [
								review.name,
								" · ",
								review.date,
								" · ",
								review.staff,
								" · Vagaro"
							]
						})]
					}, `${review.name}-${review.date}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/reviews",
					className: "mt-8 inline-block text-sm underline decoration-gold underline-offset-4",
					children: "All featured reviews"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid border-t border-line lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-paper-2 px-5 py-14 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: "Gift cards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Give a cut"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-muted",
						children: "Gift cards are sold on Vagaro in categories including Just Because, Birthday, Congratulations, Barber, and Hair."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: site.giftUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-6 inline-block bg-ink px-5 py-3 text-sm text-inverse",
						children: "Buy a Gift Card"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-14 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: "Visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: site.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4",
						children: addressLine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-2 block underline decoration-gold underline-offset-4",
						href: `tel:${site.phoneTel}`,
						children: site.phoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-1 text-sm text-muted",
						children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex max-w-sm justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.hours })]
						}, row.day))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-6 inline-block text-sm underline decoration-gold underline-offset-4",
						href: directionsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Get Directions"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bg-ink px-5 py-20 text-center text-inverse",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl sm:text-6xl",
					children: "Book the chair."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-lg text-inverse/75",
					children: "The League Haircuts, Exton. Men, children, fades, and beard trims."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
					className: "mt-8 inline-block bg-gold px-6 py-3 text-sm font-medium text-ink",
					children: "Book Appointment"
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
