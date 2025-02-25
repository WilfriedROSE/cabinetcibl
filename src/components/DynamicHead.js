import Head from "next/head";

export const DynamicHead = ({ title, description }) => {
    return (
        <Head>
            <title>{title ? `${title} | Mon Site` : "Mon Site - Bienvenue"}</title>
            <meta name="description" content={description || "Site web construit avec Next.js"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

