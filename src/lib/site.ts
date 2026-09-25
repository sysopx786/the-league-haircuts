export const site = {
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
  geo: { lat: 40.0336569, lng: -75.6328579 },
  bookUrl: "https://www.vagaro.com/theleaguehaircuts/book-now",
  vagaroUrl: "https://www.vagaro.com/theleaguehaircuts",
  servicesUrl: "https://www.vagaro.com/theleaguehaircuts/services",
  staffUrl: "https://www.vagaro.com/theleaguehaircuts/staff",
  giftUrl: "https://www.vagaro.com/theleaguehaircuts/gift-certificates",
  instagram: "https://www.instagram.com/theleaguehaircuts/",
  reelUrl: "https://www.instagram.com/reel/Db3RBBexfQG/",
  facebook: "https://www.facebook.com/p/The-League-Haircuts-61579248129845/",
  vagaroRating: "4.9",
  vagaroReviewCount: 89,
  googleRating: "4.9",
  googleReviewCount: 58,
  googleUrl:
    "https://www.google.com/maps/search/?api=1&query=The+League+Haircuts+260+N+Pottstown+Pike+Exton+PA+19341",
  founded: "2025",
} as const;

export const addressLine = `${site.street}, ${site.city}, ${site.region} ${site.postal}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`The League Haircuts, ${addressLine}`)}`;

export const hours = [
  { day: "Monday", hours: "10:00 AM – 7:00 PM" },
  { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
  { day: "Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
] as const;

const dayOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

const openWindow: Record<(typeof dayOrder)[number], [number, number] | null> = {
  Sunday: null,
  Monday: [10 * 60, 19 * 60],
  Tuesday: [10 * 60, 19 * 60],
  Wednesday: [10 * 60, 19 * 60],
  Thursday: [10 * 60, 19 * 60],
  Friday: [9 * 60, 17 * 60],
  Saturday: [8 * 60, 15 * 60],
};

function clockLabel(minutes: number) {
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour = hour24 % 12 || 12;
  const mm = minute === 0 ? "00" : String(minute).padStart(2, "0");
  return `${hour}:${mm} ${suffix}`;
}

export function shopStatus(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((part) => [part.type, part.value]),
  );
  const day = parts.weekday as (typeof dayOrder)[number];
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);
  const today = openWindow[day];
  if (today && minutes >= today[0] && minutes < today[1]) {
    return { open: true, sign: "Open", detail: `Closes ${clockLabel(today[1])}` };
  }
  const start = dayOrder.indexOf(day);
  for (let step = 0; step < 7; step += 1) {
    const name = dayOrder[(start + step) % 7];
    const window = openWindow[name];
    if (!window) continue;
    if (step === 0 && minutes >= window[0]) continue;
    const when = step === 0 ? "" : step === 1 ? "tomorrow " : `${name} `;
    return { open: false, sign: "Closed", detail: `Opens ${when}${clockLabel(window[0])}` };
  }
  return { open: false, sign: "Closed", detail: "Opens Monday 10:00 AM" };
}

export const services = [
  {
    name: "Classic Haircut",
    price: "$28.00",
    description:
      "A customized haircut designed by your stylist to fit your individual style and preferences.",
  },
  {
    name: "Skin Fade",
    price: "$32.00",
    description:
      "A skin fade is a popular haircut that features a gradient effect, where the hair gradually shortens from the top down to the skin at the sides and back.",
  },
  {
    name: "Beard Trim",
    price: "$15.00",
    description: "Experience a precise Beard Trim that delivers a clean, polished look.",
  },
  {
    name: "Child's Haircut",
    price: "$25.00",
    description:
      "A customized children's haircut designed by your stylist to fit their individual style and preferences. Must be 12 or under.",
  },
  {
    name: "Child's Skin Fade",
    price: "$30.00",
    description:
      "A skin fade is a popular haircut that features a gradient effect, where the hair gradually shortens from the top down to the skin at the sides and back.",
  },
  {
    name: "Senior/Military Haircut",
    price: "$25.00",
    description: "Classic haircut for seniors 65+ and/or active/veteran military.",
  },
  {
    name: "Senior/Military Skin Fade",
    price: "$30.00",
    description:
      "A skin fade is a popular haircut that features a gradient effect, where the hair gradually shortens from the top down to the skin at the sides and back.",
  },
] as const;

export const team = [
  {
    name: "Amber",
    role: "Stylist",
    years: "15 years",
    photo: "/media/p1.jpg",
    alt: "Amber, stylist at The League Haircuts in Exton, standing with arms crossed in a black shirt",
    rating: "4.7",
    reviews: 14,
    instagram: "https://www.instagram.com/amber_theleaguehaircuts/",
    card: "/media/cards/amber.jpg",
    bio: "Amber has been behind the chair for 15 years, after graduating from Empire Beauty School in Exton. She loves working with both clippers and scissors, but her favorite cut of all time is a clean, classic high and tight. Hair and motherhood are her passions and both bring her happiness. When she's not at the shop, she enjoys doing crafts, playing outside, and soaking up family time.",
    focus: "Clippers, scissors, and a classic high and tight",
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
    card: "/media/cards/jessica.jpg",
    bio: "With 19 years of experience, Jessica specializes in boys’ and men’s cuts. she has a special love for creative designs and working with children with special needs. As a sister to two autistic brothers, she has spent years honing both my craft and my compassion. She's always excited to welcome new clients to the chair.",
    focus: "Boys' and men's cuts, designs, and children with special needs",
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
    card: "/media/cards/brittany.jpg",
    bio: "With 16 years of experience, Brittany specializes in fades and takes pride in creating a comfortable, positive experience for every client, especially little ones and children with special needs. My background as a teacher assistant helps me connect with all ages in the chair.",
    focus: "Fades, little ones, and children with special needs",
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
    card: "/media/cards/karisa.jpg",
    bio: "With experience spanning almost 2 decades, including a mentorship by 21x award winning barber, Talon “Sharp” Barnett, Karisa specializes in skin fades, tapers and beard trims, along with scissor work. She makes continuing education a priority to keep her skills sharp (no pun intended) and to provide the latest styles and trends to those sitting in her chair. Karisa loves developing long-lasting friendships with her clients, piña coladas, and getting caught in the rain.",
    focus: "Skin fades, tapers, beard trims, and scissor work",
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
    card: "/media/cards/shayla.jpg",
    bio: "With 34 years of experience behind the chair, Shayla brings her skill and passion to every cut. A proud graduate of Schilling and Douglass, she specializes in both scissor and clipper work, creating styles that fit each client perfectly. Outside the shop, she loves spending time with friends and family and making new memories that inspire her every day.",
    focus: "Scissor work and clipper work",
  },
  {
    name: "Jenna",
    role: "Stylist",
    years: "12 years",
    photo: "/media/jenna.jpg",
    alt: "Jenna, stylist at The League Haircuts in Exton, with long highlighted hair and a black top",
    rating: null,
    reviews: 0,
    instagram: null,
    card: null,
    bio: "Jenna is a passionate men’s hairstylist who loves helping her clients look and feel their absolute best. She specializes in skin fades and longer layered scissor cuts. A graduate of Pulse, a Paul Mitchell Partner School, Jenna brings 12 years of industry experience, creativity, and a genuine passion for making every client feel confident.\n\nOutside of the salon, Jenna enjoys spending time with friends and family, playing video games with her fiancé, working out, going to concerts, and being a proud dog mom to her bulldog, Dilbert.",
    focus: "Skin fades and longer layered scissor cuts",
  },
] as const;

export type Review = {
  name: string;
  date: string;
  staff: string;
  quote: string;
  reply?: string;
};

export const reviews: Review[] = [
  {
    name: "Christine W",
    date: "Sep 18, 2026",
    staff: "Karisa",
    quote:
      "Karisa is great and really takes her time to give my husband and boys the best hair cuts! She listens and makes your vision or inspiration reality. She explains what she is doing and why and really cares about how their hair is going to look today and in the future. So glad we found her!",
  },
  {
    name: "Mike W",
    date: "Aug 18, 2026",
    staff: "Jessica",
    quote:
      "Jessica gives a great cut every time which is why I've been coming back to The League for over a year now.",
  },
  {
    name: "Suraj I",
    date: "Mar 20, 2026",
    staff: "Jessica",
    quote:
      "Great service and everyone seems happy to be there. It is quick and love that they have a scheduling system, as it is much more comfortable to book with someone who knows what I want for my hair and has experience cutting my hair, rather than just with someone who doesn't. Always takes the time with my haircut whenever I go in. Always asks what I want in case I want something different from the last time.",
  },
  {
    name: "michael f",
    date: "Jul 17, 2026",
    staff: "Karisa",
    quote:
      "Nice clean shop, great people working there. What a great stylish and hair cuter. I really don’t want to share her with anyone.",
  },
  {
    name: "Biff B",
    date: "May 7, 2026",
    staff: "Shayla",
    quote:
      "Shayla always makes me feel at home and I view her as a true friend who also makes me look wonderful after every visit!",
  },
  {
    name: "Thomas O",
    date: "Feb 25, 2026",
    staff: "Brittany",
    quote: "Thanks Brittany for a professional & relaxing experience.",
  },
  {
    name: "Sameer M",
    date: "May 19, 2026",
    staff: "Amber",
    quote: "Amber is the best.",
  },
  {
    name: "Don H",
    date: "Jun 2, 2026",
    staff: "Karisa",
    quote:
      "Another enjoyable visit with Karisa. Pleasant, efficient, and my wife likes the way she cuts my hair.",
  },
  {
    name: "Charles K",
    date: "Feb 11, 2026",
    staff: "Karisa",
    quote:
      "Everyone was so welcoming and friendly!! Fun personalities!! Karisa absolutely killed it!! Great customer service and very easy to talk to!! Highly recommend her to anyone considering coming here!!",
  },
  {
    name: "Mike W",
    date: "Jan 14, 2026",
    staff: "Jessica",
    quote:
      "It's a perfect cut every time with Jessica. She always takes her time and listens to what you want.",
  },
];

export const googleReviews: Review[] = [
  {
    name: "Seanice Kan",
    date: "8 months ago",
    staff: "Karisa",
    quote:
      "As a woman with an undercut, I’ve always felt weird going into barber shops! Explained to her that I always wanted a design in my undercut but didn’t trust other barbers and just wanted to get in and get out of the shop. I put my faith in Karisa and not only does she do amazing work, she made the experience enjoyable! Immediately felt like we’ve know each other forever 🥰",
  },
  {
    name: "MK",
    date: "5 months ago",
    staff: "Shayla",
    quote:
      "I’m always more comfortable with the scissors than the machine, and the team here gets that perfectly. No rushing and clean work. Shayla is absolutely fantastic. She’s always welcoming the moment I walk in, really listens to exactly what I need, and executes it flawlessly every single time. She’s a true professional who pays attention to the details and makes the whole experience comfortable and enjoyable.",
  },
  {
    name: "Dan Gallagher",
    date: "2 months ago",
    staff: "Karisa, Amber, and Shayla",
    quote:
      "I've been here twice this year for Men's and Child's Cuts and have left very happy each time. I've booked with Karisa, Amber and Shayla; all great.",
  },
  {
    name: "Nicholas Misero",
    date: "10 months ago",
    staff: "Jessica",
    quote:
      "Jessica has been my go to barber for YEARS! She is absolutely amazing at her job and goes above and beyond for her clients.",
  },
  {
    name: "Samule Green",
    date: "a year ago",
    staff: "Jessica and Amber",
    quote:
      "For the longest time I've hopped around barber shop to barber shop looking for a place I could go to consistently. This wasn't until I booked an appointment with Jessica at what was Big League Hair Cuts (now The League Haircuts). I've been going to her for two years now and the work she does is amazing every time. In times I wasn't able to work with her I got my hair done by Amber who also did an amazing job. Long story short, the staff there are extremely nice and always do an amazing job!",
  },
  {
    name: "Russell Koetz",
    date: "10 months ago",
    staff: "Jessica",
    quote:
      "Excellent Service! I have been going to The League to have my hair cut for over Ten Years! Jessica provides a friendly & relaxing hair cut. Always cuts it the way I want it. Wouldn’t go anywhere else.",
  },
  {
    name: "Babbu Bandesha",
    date: "5 months ago",
    staff: "Shayla",
    quote:
      "Beard cut by Shayla and she did her job very well and served me calmly .Great job . She deserves 5 stars . Keep it up.",
  },
  {
    name: "Gary Wolf",
    date: "11 months ago",
    staff: "Jessica",
    quote:
      "Great haircuts for both us seniors and my high school aged grandson, spanning the range of hair styles. Jessica cuts/styles for both of us, and does an equally great job! I actually drive 45 minutes to this location to get my haircut.",
  },
  {
    name: "Jennafer McKeon",
    date: "4 months ago",
    staff: "Karisa",
    quote:
      "Got an amazing hair cut today and they were very polite and funny will definitely come back.",
  },
  {
    name: "David Donovan",
    date: "11 months ago",
    staff: "Amber",
    quote:
      "Started going to The League before they dropped the “Big” but this place is great. Amber is awesome. The staff is extremely friendly.",
  },
  {
    name: "Gary Simmers",
    date: "11 months ago",
    staff: "Amber",
    quote:
      "One of the best haircuts I have ever had. Amber and mackenzie are an absolute pleasure to be around. They’re engaging and entertaining at the same time. Highly recommend going here they’re a league above the competition.",
  },
  {
    name: "Val Bulger",
    date: "6 months ago",
    staff: "Jessica",
    quote: "Jessica has literally never given me a bad haircut, and I love chatting with her!",
  },
  {
    name: "Manjit Jagtap",
    date: "11 months ago",
    staff: "Amber",
    quote:
      "Amber took the time to listen to my concerns and understand exactly what I wanted. She offered expert advice that made the result even better. Consistently excellent service. My cut is always perfect, and I leave feeling like a million bucks.",
  },
  {
    name: "Richard Conroy",
    date: "11 months ago",
    staff: "Jessica",
    quote:
      "I find everyone there customer friendly. The shop is always clean and well kept. Stylist Jessica does a great cutting job and is always ontime. Consistency is the key to their success.",
  },
  {
    name: "David Faunce",
    date: "11 months ago",
    staff: "Amber",
    quote:
      "I’ve been going there for years and never had a bad haircut or one of their other services. There are several stylists there that are more than capable with young children through adults of all ages. Genuinely worthy of your hard earned $$. Last few times have had Amber do the cutting. She does a fine job, one where it always grows in nicely. She has loads and loads of experience to boot.",
  },
  {
    name: "William Bone",
    date: "11 months ago",
    staff: "Jessica",
    quote:
      "I’ve been going to Jess for years. She’s great at what she does, and I’m always getting compliments on my cut. Highly recommend her and The League.",
  },
  {
    name: "Gavin Dipietro",
    date: "10 months ago",
    staff: "Jessica",
    quote:
      "I have some of the most difficult hair to cut and Jessica does a fantastic job making sure it comes out perfect! Truly a great barber!",
  },
  {
    name: "Sasidharan Udayakumar",
    date: "10 months ago",
    staff: "Jessica",
    quote:
      "The League Haircuts in Exton always delivers a top-notch experience. Jessica is truly exceptional—skilled, friendly, and detail-oriented.",
  },
  {
    name: "mike bkjones",
    date: "11 months ago",
    staff: "Jessica",
    quote:
      "This is a great place, they have excellent staff and great prices, jessiCA is a fantastic stylist, i never know what style i want and told her as much, she hooked me up with a fantastic new look. Definitely worth checking out, ask for Jessica.",
  },
  {
    name: "Maria Alcaro",
    date: "11 months ago",
    staff: "Brittany",
    quote:
      "Great experience, great staff, very clean. Brittany did a wonderful job on my nephews hair, who is very picky with his hair. Brittany was his stylist and listened to what he wanted and did exactly that.",
  },
  {
    name: "Jason Harvey",
    date: "11 months ago",
    staff: "Jessica",
    quote: "Jess does a great job with cutting our hairs. My boys love going there.",
  },
  {
    name: "Joseph Kamor",
    date: "a year ago",
    staff: "Amber",
    quote:
      "Amber is wonderful - she is always polite and easy to talk to - and she does a great job with my hair! Thanks Amber!",
  },
  {
    name: "Josh David",
    date: "11 months ago",
    staff: "Jessica",
    quote: "Jessica is the best!!!! Been going to her for years and I've never had a bad experience.",
  },
  {
    name: "Rachaelyn Hogan",
    date: "6 months ago",
    staff: "Jessica",
    quote: "Love this place!! Jessica is amazing!!",
  },
  {
    name: "Dennis Ryan",
    date: "7 months ago",
    staff: "Karisa",
    quote:
      "Karisa is the absolute best! Personable, hilarious and an exceptional stylist. Wish there were 10 stars to give because she’s that good. Highly recommend going to The League!",
  },
  {
    name: "Michelle Alexander",
    date: "11 months ago",
    staff: "Mackenzie",
    quote:
      "Mackenzie is great!! Does great with all my kids!! Gave them confidence in their cuts. She does great with kids on the spectrum! My kiss all have different hair types. One has thick curly hair the other has wavy hair and the other pin straight thick hair.",
  },
  {
    name: "Miike",
    date: "11 months ago",
    staff: "Nico",
    quote:
      "Just had an awesome experience at the League in Exton. As a guy, it's sometimes tough to find a barber who really gets what you're going for. Thankfully I was so lucky to have found Nico. He knew exactly how to style my hair to fit my face shape and gave me some great tips on how to maintain the look. He was very clean and super fun to talk to. This place was really cool too! Im very happy with the results and would highly recommend Nico.",
  },
  {
    name: "Don Swanick",
    date: "11 months ago",
    staff: "Amber",
    quote: "Amber from The League Haircuts gives the best haircuts. I highly recommend them for haircuts.",
  },
  {
    name: "Tim Bell",
    date: "11 months ago",
    staff: "Jessica",
    quote: "Jessica always gives me a great haircut and beard trim.",
  },
  {
    name: "Amber Williams",
    date: "a year ago",
    staff: "Kids' cuts",
    quote: "Brought my son in. Great with kids and the cut was perfect!",
  },
  {
    name: "Kyle Hanlan",
    date: "7 months ago",
    staff: "Haircut",
    quote:
      "While the cut itself was okay for price range. The atmosphere was hostile to say the least. The woman was watching a documentary on rape on the TV in front of the cutting station. It was truly graphic. When I asked to turn it off, she got irritated at me as if I was interrupting her day because I didn't want to be exposed to such graphic imagery. It became such an uncomfortable situation. I asked to leave. She refused because she didn't want to leave my haircut unfinished, and I felt trapped for the rest of the haircut. If a person wants to watch whatever they want to watch in the privacy of their home, that's fine. But imagine if the genders were reversed and a male was watching a rape documentary and forcing a female to watch that. And not letting her leave. That was be an outrage. How is that acceptable here?",
  },
  {
    name: "Sateesh Yelishetty",
    date: "a year ago",
    staff: "Booking",
    quote:
      "They cancel your online-booked appointment without your consent and reschedule it according to their own convenience. When you show up, they simply claim you missed your appointment. On top of that, the front office staff is extremely rude and unprofessional in the way they deal with customers. Very disappointing experience.",
    reply:
      "We’re very sorry for your experience. The team is learning a new system and accidentally double booked you in the system. Rescheduling without consent and unprofessional service is not acceptable and does not reflect our standards. We have addressed this with our team and would appreciate the chance to make things right.",
  },
];

export const gallery = [
  {
    src: "/media/shop-floor.jpg",
    alt: "The League Haircuts floor, with Amber’s and Jessica’s stations named on the mirrors",
    caption: "The floor",
    wide: true,
  },
  {
    src: "/media/jessica-cut.jpg",
    alt: "Jessica cutting a client’s hair with scissors and a comb",
    caption: "Jessica",
    wide: false,
  },
  {
    src: "/media/jessica-scissors.jpg",
    alt: "Jessica’s hands, red nails, comb, and scissors over a client’s hair",
    caption: "Scissors",
    wide: false,
  },
  {
    src: "/media/jessica-comb.jpg",
    alt: "Close view of a comb and scissors during a cut at The League",
    caption: "Comb and scissors",
    wide: false,
  },
  {
    src: "/media/storefront.webp",
    alt: "The League Haircuts storefront, with the sign above the front door",
    caption: "Front door",
    wide: false,
  },
  {
    src: "/media/station.webp",
    alt: "Combs, clippers, scissors, and a neck brush on a station",
    caption: "The station",
    wide: false,
  },
  {
    src: "/media/barber-fade.jpg",
    alt: "Stylist with dark red hair shaping a fade",
    caption: "Fade",
    wide: false,
  },
  {
    src: "/media/barber-brick.jpg",
    alt: "Stylist cutting a client's hair in front of a brick wall",
    caption: "In the chair",
    wide: false,
  },
  {
    src: "/media/barber-chair.jpg",
    alt: "Stylist talking with a client seated in the chair",
    caption: "At the chair",
    wide: true,
  },
  {
    src: "/media/barber-shampoo.jpg",
    alt: "Stylist in pink gloves working at the shampoo bowl",
    caption: "Shampoo",
    wide: false,
  },
  {
    src: "/media/barber-neckline.jpg",
    alt: "Stylist using clippers along a client's neckline",
    caption: "Neckline",
    wide: false,
  },
  {
    src: "/media/barber-shave.jpg",
    alt: "Stylist shaving a client with a straight razor",
    caption: "Shave",
    wide: true,
  },
  {
    src: "/media/barber-scissors.jpg",
    alt: "Stylist trimming the top of a client's hair with scissors",
    caption: "Scissor cut",
    wide: true,
  },
  {
    src: "/media/barber-iron.jpg",
    alt: "Stylist holding a pink flat iron",
    caption: "Flat iron",
    wide: false,
  },
  {
    src: "/media/barber-illustration.jpg",
    alt: "Illustration of a barber holding scissors and a barber pole",
    caption: "Illustration",
    wide: false,
  },
  {
    src: "/media/cut-beard.jpg",
    alt: "Stylist with a blonde bob lining up a full beard with clippers",
    caption: "Beard lineup",
    wide: true,
  },
  {
    src: "/media/cut-detail.jpg",
    alt: "Stylist with short platinum hair detailing a hairline with scissors",
    caption: "Hairline detail",
    wide: true,
  },
  {
    src: "/media/cut-fade-hat.jpg",
    alt: "Stylist in a black hat cutting a fade with clippers",
    caption: "Fade",
    wide: true,
  },
  {
    src: "/media/cut-dry.jpg",
    alt: "Stylist in an orange jacket blow-drying a short cut and beard",
    caption: "Finish",
    wide: true,
  },
  {
    src: "/media/cut-comb.png",
    alt: "Stylist with long brown hair holding a comb over a client's haircut",
    caption: "Scissor cut",
    wide: true,
  },
  {
    src: "/media/cut-mirror.png",
    alt: "Stylist in a white shirt and green apron cutting hair in front of a round mirror",
    caption: "In the mirror",
    wide: true,
  },
  {
    src: "/media/cut-boy.jpg",
    alt: "Stylist with long blonde hair using clippers on a boy's fade",
    caption: "Boy's fade",
    wide: false,
  },
  {
    src: "/media/cut-child.jpg",
    alt: "Stylist with long blonde hair shaping a child's skin fade",
    caption: "Child's fade",
    wide: false,
  },
  {
    src: "/media/cut-apron.jpg",
    alt: "Stylist with dark red hair in a denim apron checking a fade",
    caption: "Fade check",
    wide: false,
  },
  {
    src: "/media/cut-finish.jpg",
    alt: "Stylist with long wavy hair finishing a short cut with scissors",
    caption: "Short cut",
    wide: false,
  },
] as const;

export const facts = [
  { label: "Walk-ins", value: "Yes" },
  { label: "Parking", value: "Free parking" },
  { label: "Payments", value: "Cash and major cards" },
  { label: "Access", value: "Disabled access" },
] as const;

export const amenities = [
  "WiFi",
  "TV",
  "Disabled access",
  "LGBTQIA friendly",
  "Kid friendly",
] as const;

export const giftCategories = [
  "Just Because",
  "Birthday",
  "Congratulations",
  "Fall",
  "Halloween",
  "Barber",
  "Hair",
] as const;

export const faqs = [
  {
    q: "Do you take walk-ins?",
    a: "Yes. Vagaro lists walk-ins as accepted. You can also book a time online.",
  },
  {
    q: "How do I book?",
    a: "Appointments are booked through Vagaro. Choose Book Appointment on this site and you will go straight to The League Haircuts booking page.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Customers must provide at least 12 hours' notice for service cancellations. Cancellations within this timeframe may incur a fee or result in forfeited payment. The fee amount is not published.",
  },
  {
    q: "Do you cut kids' hair?",
    a: "Yes. A child's haircut is $25.00 and must be 12 or under. A child's skin fade is $30.00. The shop is listed as kid friendly.",
  },
  {
    q: "Is there a senior or military price?",
    a: "A senior/military haircut is $25.00 for seniors 65+ and/or active or veteran military. A senior/military skin fade is $30.00.",
  },
  {
    q: "Do you trim beards?",
    a: "Yes. A beard trim is $15.00.",
  },
  {
    q: "Where do I park?",
    a: "Free parking is listed for the shop.",
  },
  {
    q: "How can I pay?",
    a: "Visa, Mastercard, Discover, American Express, debit card, and cash.",
  },
  {
    q: "Can I buy a gift card?",
    a: "Gift cards are sold on Vagaro. Categories shown there are Just Because, Birthday, Congratulations, Fall, Halloween, Barber, and Hair. Amounts and delivery terms are confirmed at checkout on Vagaro.",
  },
] as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Videos" },
  { to: "/google-reviews", label: "Google reviews" },
  { to: "/vagaro-reviews", label: "Vagaro reviews" },
  { to: "/about", label: "About" },
  { to: "/gift-cards", label: "Gift Cards" },
  { to: "/contact", label: "Contact" },
] as const;
