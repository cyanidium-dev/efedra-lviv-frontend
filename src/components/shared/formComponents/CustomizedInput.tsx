import { Field, ErrorMessage, useFormikContext } from "formik";
import { IMaskInput } from "react-imask";
import { useId } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  label: string;
  labelClassName?: string;
  fieldClassName?: string;
  inputType?: string;
  mask?: string;
}

export default function CustomizedInput({
  fieldName,
  label,
  labelClassName = "",
  fieldClassName = "",
  inputType = "text",
  mask = "+38 (000) 000-00-00",
}: CustomizedInputProps) {
  const { setFieldValue } = useFormikContext<Values>();
  const inputId = useId();

  return (
    <label
      htmlFor={inputId}
      className={`relative flex flex-col w-full ${labelClassName}`}
    >
      <span className="mb-1 lg:mb-3 text-[14px] lg:text-[16px] font-normal leading-[120%]">
        {label}
      </span>
      <div className="relative w-full">
        <Field name={fieldName}>
          {({ field, meta }: any) => {
            const commonProps = {
              id: inputId,
              className: twMerge(
                clsx(
                  `relative w-full h-[50px] lg:h-[60px] px-4 py-2 text-[14px] lg:text-[16px] font-normal leading-[120%] bg-white border-1 rounded-[20px] outline-none resize-none transition duration-300 ease-out ${
                    meta.touched && meta.error
                      ? "border-red-500"
                      : "border-black"
                  }`,
                  fieldClassName
                )
              ),
            };

            if (inputType === "tel") {
              return (
                <IMaskInput
                  {...field}
                  {...commonProps}
                  mask={mask}
                  lazy={false}
                  autoComplete="on"
                  type="tel"
                  onAccept={(value: string) => {
                    setFieldValue(fieldName, value || "");
                  }}
                />
              );
            }

            return (
              <input
                {...field}
                {...commonProps}
                type={inputType}
                autoComplete="on"
              />
            );
          }}
        </Field>
      </div>

      <ErrorMessage
        name={fieldName}
        component="p"
        className="absolute bottom-[-12px] left-2 text-[9px] font-normal leading-none text-red-500"
      />
    </label>
  );
}
