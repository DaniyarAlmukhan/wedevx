import { HomePageContainer, HomePageFormContainer, HomePageHeader, UserProfile } from "@/styles/home-page.styles";
import { useTranslations } from "next-intl";
import { File } from 'lucide-react'
import Form from "@/components/form/form.component";
import { useState } from "react";
import Button from "@/components/button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from 'next/router';
import { renderers, schema, uiSchema } from "@/constants/form.constants";
import { IFormData, ILead, IValidationError } from "@/interfaces/types";
import axios from "axios";
import { logout } from "@/store/slices/authSlice";
import { addLead } from "@/store/slices/leadsSlice";

export default function Home() {
    const t = useTranslations();
    const router = useRouter();
    const dispatch = useDispatch();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [data, setData] = useState<IFormData>();
    const [errors, setErrors] = useState<IValidationError[]>([]);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const user = useSelector((state: RootState) => state.auth.user);

    const handleLogin = () => {
        router.push('/login');
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    const handleSubmitForm = () => {
        if (typeof window === "undefined") return;
        if (errors.length > 0) return;

        axios.post("/api/mockSubmit", data).then((response) => {
            if (response.data.success) {
                setIsFormSubmitted(true);
                const formattedLeadData: ILead = {
                    ...data,
                    status: 'PENDING',
                    submitted: new Date().toISOString(),
                    id: Math.floor(Math.random() * 1000) + +new Date(),
                    name: data?.name as string,
                    surname: data?.surname as string,
                    email: data?.email as string,
                }
                dispatch(addLead(formattedLeadData));
            }
        }).catch(() => {
            setIsFormSubmitted(false);
        })
    };

    return (
        <HomePageContainer>
            <HomePageHeader>
                <div className="title">
                    {t("home.title")}
                </div>
                <div className="profile">
                    {isAuthenticated
                        ? <>
                            <Button variant="clean" maxWidth="min-content" onClick={() => router.push('/leads-management')}>
                                {t("routes.leads")}
                            </Button>
                            <UserProfile>
                                {user?.name.split("")[0]}
                            </UserProfile>
                            <Button maxWidth="min-content" onClick={handleLogout}>
                                {t("action.logout")}
                            </Button>
                        </>
                        : <Button maxWidth="min-content" onClick={handleLogin}>
                            {t("action.login")}
                        </Button>
                    }
                </div>
            </HomePageHeader>
            {
                isFormSubmitted
                    ? <>
                        <HomePageFormContainer>
                            <div className="heading">
                                <File size={60} />
                                <div className="title">
                                    {t("home.after-form-title")}
                                </div>
                                <div className="subtitle">
                                    {t("home.after-form-subtitle")}
                                </div>
                            </div>
                            <Button maxWidth="25rem" onClick={() => setIsFormSubmitted(false)} variant="primary">
                                {t("home.back")}
                            </Button>
                        </HomePageFormContainer>
                    </>
                    : <>
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
                            <Form
                                data={data}
                                errors={errors}
                                schema={schema}
                                uiSchema={uiSchema}
                                renderers={renderers}
                                onChange={(data, errors) => {
                                    setData(data);
                                    setErrors(errors);
                                }}
                                onSubmit={handleSubmitForm}

                            />
                        </HomePageFormContainer>
                    </>
            }
        </HomePageContainer>
    );
}
