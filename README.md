# 1 Install next app with typescript

npx create-next-app@latest --ts

# 2 - Install tailwind css

npm i -D tailwindcss (with devDependecies)
npx tailwindcss init
https://tailwindcss.com/docs/guides/nextjs

npm install react-social-icons
npm i autoprefixer

# 3 - Framer motion animation

npm i framer-motion
//https://www.framer.com/docs/introduction/

# 4 - Typewriter effect

npm i react-simple-typewriter

# 5 - Hero Icons

npm install @heroicons/react

# 6 - React Hook Form

https://react-hook-form.com/get-started
npm install react-hook-form

# 7 - Tailwind scrollbar

https://www.npmjs.com/package/tailwind-scrollbar
npm install --save-dev tailwind-scrollbar

# 8 - Content Management System - CMS - SANITY.io

buh data-gaa garaaraa 1 burchlen HTML deeere oruulah shaardlagagvigeer
sanity.io site-aas dynamic-aar update hiih.

https://www.sanity.io/manage

1. https://www.sanity.io/sonny
2. npm create sanity@latest -- --coupon sonny2022
   ...give project name
   ...Use the default dataset configuration? YES
   ...output name dr sanity gej ner ogno.
   ...Select project template? Blog(schema) songono.
   ...Do you want to use TypeScript? Yes no
   ...Package manager to use for installing dependencies? npm

3. "sanity" nertei folder uusne. Local baidlaar schema-gaa uusgene.
   https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio

   /sanity/schemas/ folder dotor "pageInfo.js, social.js, skill.js geh met" gesen schema uusgeed, "index.js" dr ni importlow.

4. terminal dr "cd sanity
5. terminal dr npx sanity start
6. http://localhost:3333 dr server luu orno.
7. /sanity/schemas/ dotor uusgesen zagwar shig window ter 3333 url dr garch irne.
8. data-gaa boglono. PUBLISH hiine.
9. terminal dr /sanity folder dotroo "npx sanity deploy" hiine.
10. https://nextjs-12-portfolio.sanity.studio/ url ogno.
11. ene url-ruugaa orood menu dr "VISION" dr daraad
12. \*[_type=='social'] {
    ...
    } gej biched FETCH dr darhad 'SOCIAL" heseg dr hsen data ni array baidlaar irne.
13. .gitignore dr "sanity/node_modules" oruulna.
14. npm install next-sanity @portabletext/react @sanity/image-url
    https://github.com/sanity-io/next-sanity
15. "sanity.ts "file uusgene.
16. getSocials.ts file uusgene.
17. "typings.d.ts" file uusgeed bvh torlvvdee zaana.
18. localhost:3000/api/getSocials gehed response irne.
19. api/-aas front end taldaa "page/index.ts dr getStaticProps-oor awna.

# 9 - Hydration ERROR fix

https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render

# 10 - Deploy to VERCEL

.env file-aa vercel dr oruulj ogno.

https://vercel.com/docs/cli/deploying-from-cli

1. npm i -g vercel

2. vercel build

tegd heden songoltuudiig default-aar ni songono.
ERROR-uudiig yanzlana.

3. vercel deploy --prebuilt
