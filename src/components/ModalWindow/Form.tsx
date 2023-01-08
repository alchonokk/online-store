import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import {
  nameRegExp,
  phoneRegExp,
  adressRegExp,
  mailRegExp,
  cardNumberRegExp,
  validRegExp,
  cvvRegExp,
} from "./validation";
import Message from "../../constants/ErrorMessage";

const DEFAULT_CLASSNAME_PAYSYSTEM = "form__card__payment-logo";
const CLASSNAME_VISA_PAYSYSTEM = "form__card__payment-logo visa";
const CLASSNAME_MASTER_CARD_PAYSYSTEM = "form__card__payment-logo master-card";
const CLASSNAME_UNION_PAYSYSTEM = "form__card__payment-logo union-pay";

interface IhiddenForm {
  hide: () => void;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

function Form({ hide, setIsSubmit }: IhiddenForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  function createInput(
    nameField: string,
    title: string,
    funcValid: {
      required: boolean;
      pattern: RegExp;
    },
    dataTest: string,
    lengthField?: number
  ) {
    return lengthField ? (
      <input
        {...register(nameField, funcValid)}
        placeholder={title}
        className="form__item"
        maxLength={lengthField}
        data-testid={dataTest}
      />
    ) : (
      <input
        {...register(nameField, funcValid)}
        placeholder={title}
        className="form__item"
        data-testid={dataTest}
      />
    );
  }

  const [logoPaymentSystem, setLogoPaymentSystem] = useState(
    DEFAULT_CLASSNAME_PAYSYSTEM
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    hide();
    console.log(data);
    setIsSubmit(true);
    // alert(
    //   "Заказ оформлен. TODO// Затем, спустя 3-5 секунд происходит редирект на главную страницу магазина.
    //  Корзина при этом очищается"
    // );
  };

  register("cardNumber", {
    onBlur: (e) => {
      const firstSymbol = Number(e.target.value.charAt(0));
      switch (firstSymbol) {
        case 4:
          setLogoPaymentSystem(CLASSNAME_VISA_PAYSYSTEM);
          break;
        case 5:
          setLogoPaymentSystem(CLASSNAME_MASTER_CARD_PAYSYSTEM);
          break;
        case 6:
          setLogoPaymentSystem(CLASSNAME_UNION_PAYSYSTEM);
          break;
        default:
          setLogoPaymentSystem(DEFAULT_CLASSNAME_PAYSYSTEM);
          break;
      }
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h3 className="form__title">Personal information:</h3>
      {createInput(
        "nameAndSurname",
        "Name and surname",
        nameRegExp(),
        "nameAndSurname"
      )}
      {errors.nameAndSurname && (
        <p data-testid="input-name-error" className="form__error">
          {Message.nameAndSurname}
        </p>
      )}
      {createInput("phone", "+ Phone number", phoneRegExp(), "phone")}
      {errors.phone && (
        <p data-testid="input-phone-error" className="form__error">
          {Message.phone}
        </p>
      )}
      {createInput("address", "Delivery address", adressRegExp(), "address")}
      {errors.address && <p className="form__error">{Message.address}</p>}
      {createInput("mail", "E-mail", mailRegExp(), "mail")}
      {errors.mail && <p className="form__error">{Message.mail}</p>}
      <h3 className="form__title">Entering bank card data:</h3>
      <label htmlFor="cardNumber">
        Card Number:
        {createInput(
          "cardNumber",
          "Enter 16 digits",
          cardNumberRegExp(),
          "cardNumber",
          16
        )}
        {errors.cardNumber && (
          <p className="form__error">{Message.cardNumber}</p>
        )}
      </label>
      <div className="form__card__payment">
        Payment system:
        <span className={logoPaymentSystem}></span>
      </div>
      <label htmlFor="valid">
        VALID:
        {createInput("valid", "MMYY", validRegExp(), "valid", 4)}
        {errors.valid && <p className="form__error">{Message.valid}</p>}
      </label>
      <label htmlFor="cvv">
        CVV:
        {createInput("cvv", "Code", cvvRegExp(), "cvv", 3)}
        {errors.cvv && <p className="form__error">{Message.cvv}</p>}
      </label>
      <input
        data-testid="submit-form"
        type="submit"
        className="form__item"
        value={"Confirm"}
      />
    </form>
  );
}

export default Form;
