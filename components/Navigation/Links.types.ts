import { NavigationLink } from "./Navigation";

// export const navigationLinks = [
//     {
//       name: "About",
//       link: "https://kegthat.com/about/",
//       subLink: {
//         name: "Beer",
//         link: "https://kegthat.com"
//       }
//     },
//     {
//       name: "Kits",
//       link: "https://kegthat.com/about/",
//     },
//     {
//       name: "Equipment",
//       link: "https://kegthat.com/about/",
//     },
//     {
//       name: "Ingredients & Chemicals",
//       link: "https://kegthat.com/about/",
//     },
//     {
//       name: "Spirits",
//       link: "https://kegthat.com/about/",
//     },
//     {
//       name: "Blog",
//       link: "https://kegthat.com/about/",
//     },
//     {
//       name: "Forum",
//       link: "https://kegthat.com/about/",
//     }
//   ] as NavigationLink[]

  export const navigationLinks = [
    {
      name: "Calculators",
      link: "/",
      subLink: {
        name: "Abv",
        link: "/abv"
      }
    },
    {
      name: "Recipes",
      link: "/recipes/create",
      subLink: {
        name: "Abv",
        link: "/abv"
      }
    },
    
  ] as NavigationLink[]