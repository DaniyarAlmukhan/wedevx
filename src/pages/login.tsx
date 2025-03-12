import Form from "@/components/form/form.component";
import { loginSchema, loginUiSchema } from "@/constants/form.constants";
import { ILoginData, IValidationError } from "@/interfaces/types";
import { LoginFormContainer, LoginPageContainer } from "@/styles/login-page.styles";
import { useState } from "react";
import axios from "axios";
import { login } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";



export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState<ILoginData>();
  const [errors, setErrors] = useState<IValidationError[]>([]);

  const handleSubmitForm = () => {
    if (typeof window === "undefined") return;
    if (errors.length > 0) return;

    if (data) {
      axios.post("/api/mockAuth", data).then((response) => {
        if (response.data.success) {
          dispatch(login({ name: data.username || "username" }));
          router.push("/");
        }
      }).catch(() => {
        console.error("Error submitting form");
      })
    }
  }

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <Form
          data={data}
          errors={errors}
          schema={loginSchema}
          uiSchema={loginUiSchema}
          onSubmit={handleSubmitForm}
          onChange={(newData, errors) => {
            setData(newData);
            setErrors(errors);
          }}
        />
      </LoginFormContainer>

    </LoginPageContainer>
  );
}
