# Internet Game Database Seacher

That seems like a fitting name for my project. This project is the final submission in the course _"Frontend Frameworks"_ where the focus is to learn React and its ecosystem.

The project uses the IGDB public API to fetch games or characters and lets you see detailed information about them. You can also save and edit information about the objects you fetch.

Since it's a school project, the main focus for this README should be what I learned in this specific project.

## What I Learned

Being fairly familiar with React already, I decided to focus mainly on learning Next.js. I also took this opportunity to learn how to use `searchParams` for storing the search query globally and sharing it throughout my app.

I also focused on using custom hooks for fetching data that had `useEffects` with dependencies that listened to changes in the URL.

And as always with TypeScript, you encounter issues you've never seen before and learn something new every day.

Furthermore, making decisions when it comes to making my code DRY or just creating another file to keep it simple for me and any future reader of the codebase will probably be a struggle for the rest of time.

---

Next comes some bootstrap message from Next.js, enjoy!


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
