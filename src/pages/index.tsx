import { HomePageContainer, HomePageFormContainer, HomePageHeader } from "@/styles/home-page.styles";
import { useTranslations } from "next-intl";
import { File } from 'lucide-react'
import Form from "@/components/form/form.component";

export default function Home() {
    const t = useTranslations();
    return (
        <HomePageContainer>
            <HomePageHeader>
                <div className="title">
                    {t("home.title")}
                </div>
            </HomePageHeader>
            <HomePageFormContainer>
                <div className="heading">
                    <File size={60} />
                    <div className="title">
                        {t("home.form-title")}
                    </div>
                    <div className="subtitle">
                        {t("home.form-subtitle")}
                    </div>
                </div>
                <Form />
            </HomePageFormContainer>
        </HomePageContainer>
    );
}
