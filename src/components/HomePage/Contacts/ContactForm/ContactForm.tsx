'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';

import { callBackValidation } from '@/schemas/callBackValidation';

import CustomizedInput from '@/components/shared/formComponents/CustomizedInput';
import MainButton from '@/components/shared/buttons/MainButton';

export interface ValuesContactFormType {
  name: string;
  phone: string;
}

interface ContactFormProps {
  //setIsError: Dispatch<SetStateAction<boolean>>;
  //setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export const ContactForm = ({
  // setIsError,
  // setIsNotificationShown,
  className = '',
}: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    phone: '',
  };

  const validationSchema = callBackValidation();

  const submitForm = async (
    values: ValuesContactFormType,
    formikHelpers: FormikHelpers<ValuesContactFormType>
  ) => {
    const { resetForm } = formikHelpers;
    const data =
      `<b>Заявка "Форма зворотнього зв'язку"</b>\n` +
      `<b>Ім'я:</b> ${values.name.trim()}\n` +
      `<b>Телефон:</b> ${values.phone.trim().replace(/(?!^)\D/g, '')}\n`;
    try {
      //etIsError(false);
      setIsLoading(true);

      await axios({
        method: 'post',
        url: '/api/telegram',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      resetForm();

      //    setIsNotificationShown(true);
    } catch (error) {
      //   setIsError(true);
      //   setIsNotificationShown(true);
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
        <>
          <h2 className="sr-only">Форма зворотнього зв'язку</h2>
          <Form className={`${className}`}>
            <div className="flex flex-col w-full gap-y-3 lg:gap-y-3.5 mb-[22px] lg:mb-[26px]">
              <CustomizedInput fieldName="name" label="Ваше м’я" />
              <CustomizedInput
                fieldName="phone"
                label="Номер телефону"
                inputType="tel"
              />
            </div>
            <MainButton
              type="submit"
              disabled={!(dirty && isValid) || isLoading}
              isLoading={isLoading}
              loadingText="Надсилання..."
              className="h-14 px-5 lg:px-5 text-[14px] lg:text-[16px] font-medium"
            >
              Надіслати
            </MainButton>
          </Form>
        </>
      )}
    </Formik>
  );
};
