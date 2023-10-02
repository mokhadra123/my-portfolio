import Admin from "./projectsImgs/Admin.png";
import WordPress from "./projectsImgs/wordPress.png";
import FeedMe from "./projectsImgs/feedme.png";
import Crown from "./projectsImgs/crown.png";
export const projects = [
  {
    id: "1",
    image: Admin,
    title: "Admin Dashboard 👨‍💼",
    desc: "An admin dashboard is a simple, user-friendly web tool for managing systems, applications, or organizations efficiently. It offers data, user management, and customization.",
    components: {
      js: "React",
      lib: "Syncfusion",
    },
    code: "https://github.com/mokhadra123/admin_dashboard",
    demo: "https://admin-dashboard-one-orpin.vercel.app/",
  },
  {
    id: "2",
    image: WordPress,
    title: "WordPress E-commerce 🎧 ",
    desc: "A WordPress eCommerce website specializing in headphones and small watches. Shop high-quality audio gear and stylish timepieces effortlessly.",
    components: {
      js: "WordPress",
      lib: "WooCommerce",
    },

    demo: "http://whoknow.byethost7.com/",
  },
  {
    id: "3",
    image: FeedMe,
    title: "Feed ME 😋",
    desc: "Enjoy the convenience of a nutritious meal delivered right to your doorstep every day. Our service ensures that you can savor a healthy and delicious dining experience without the hassle of cooking or leaving home. Nourish your body and simplify your daily routine with our fresh and wholesome meal delivery.",
    components: {
      js: "JS ",
      lib: "Bootstrap",
    },
    code: "https://github.com/mokhadra123/restaurant",
    demo: "https://feedme-two.vercel.app/",
  },
  {
    id: "4",
    image: Crown,
    title: "Crown Clothes 👑",
    desc: "Shop the latest fashion trends at our online clothing store. We use Firebase for secure authentication and Firestore to store your shopping preferences seamlessly.",
    components: {
      js: "React - Firebase",
      lib: "Scss  ",
    },
    code: "https://github.com/mokhadra123/CRWN-clothing",
    demo: "https://iridescent-zuccutto-6a441f.netlify.app/",
  },
];
