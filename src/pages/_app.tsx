import GlobalStyles from "@/styles/global.styles";
import { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
    const { locale } = useRouter();
    const [messages, setMessages] = useState(null); // Start as null

    useEffect(() => {
        import(`../locales/${locale}.json`).then((m) => {
            setMessages(m.default); // Fix: Use .default to get JSON content
        });
    }, [locale]);

    if (!messages) return <p>Loading...</p>; // Prevent rendering without messages

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <GlobalStyles />
            <Component {...pageProps} />
        </NextIntlClientProvider>
    );
}
