import GlobalStyles from "@/styles/global.styles";
import { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Messages = {
    [key: string]: string;
}

export default function MyApp({ Component, pageProps }: AppProps) {
    const { locale } = useRouter();
    const [messages, setMessages] = useState<Messages | null>(null);

    useEffect(() => {
        async function loadMessages() {
            try {
                const messages = await import(`@/locales/${locale}.json`);
                setMessages(messages.default);
            } catch (error) {
                console.error("Error loading translations:", error);
                setMessages({});
            }
        }
        loadMessages();
    }, [locale]);

    if (!messages) return <p>Loading...</p>;

    return (
        <Provider store={store}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <GlobalStyles />
                <Component {...pageProps} />
            </NextIntlClientProvider>
        </Provider>
    );
}
