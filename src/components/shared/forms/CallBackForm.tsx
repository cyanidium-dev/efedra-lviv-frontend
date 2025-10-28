"use client";
import { Form, Formik, FormikHelpers } from "formik";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

import { callBackValidation } from "@/schemas/callBackValidation";

import CustomizedInput from "../formComponents/CustomizedInput";
import MainButton from "../buttons/MainButton";

export interface ValuesCallBackFormType {
  name: string;
  phone: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsModalShown?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  buttonVariant?: "blue" | "beige";
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  setIsModalShown,
  className = "",
  buttonVariant = "blue",
}: CallBackFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    phone: "",
  };

  const validationSchema = callBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
  ) => {
    const { resetForm } = formikHelpers;
    const data =
      `<b>Заявка "Форма зворотнього зв'язку"</b>\n` +
      `<b>Ім'я:</b> ${values.name.trim()}\n` +
      `<b>Телефон:</b> ${values.phone.trim().replace(/(?!^)\D/g, "")}\n`;
    try {
      setIsError(false);
      setIsLoading(true);

      await axios({
        method: "post",
        url: "/api/telegram",
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      resetForm();
      if (setIsModalShown) {
        setIsModalShown(false);
      }
      setIsNotificationShown(true);
    } catch (error) {
      setIsError(true);
      if (setIsModalShown) {
        setIsModalShown(false);
      }
      setIsNotificationShown(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ dirty, isValid }) => (
        <Form className={`${className}`}>
          <div className="flex flex-col w-full gap-y-3 lg:gap-y-3.5 mb-[22px] lg:mb-[26px]">
            <CustomizedInput fieldName="name" label="Імʼя" />
            <CustomizedInput
              fieldName="phone"
              label="Телефон"
              inputType="tel"
            />
          </div>
          <MainButton
            type="submit"
            variant={buttonVariant}
            disabled={!(dirty && isValid) || isLoading}
            isLoading={isLoading}
            loadingText="Надсилання..."
            className="h-14 px-5 lg:px-5 text-[14px] lg:text-[16px] font-medium"
          >
            Записатися на консультацію
          </MainButton>
        </Form>
      )}
    </Formik>
  );
}
