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

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  function createInput(
    nameField: string,
    title: string,
    funcValid: {
      required: boolean;
      pattern: RegExp;
    },
    lengthField?: number
  ) {
    return lengthField ? (
      <input
        {...register(nameField, funcValid)}
        placeholder={title}
        className="form__item"
        maxLength={lengthField}
      />
    ) : (
      <input
        {...register(nameField, funcValid)}
        placeholder={title}
        className="form__item"
      />
    );
  }

  const [logoPaymentSystem, setLogoPaymentSystem] = useState(
    DEFAULT_CLASSNAME_PAYSYSTEM
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
    alert(
      "Заказ оформлен. TODO// Затем, спустя 3-5 секунд происходит редирект на главную страницу магазина. Корзина при этом очищается"
    );
    //не получается закрыть модальное окно
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
      {createInput("nameAndSurname", "Name and surname", nameRegExp())}
      {errors.nameAndSurname && (
        <p className="form__error">{Message.nameAndSurname}</p>
      )}
      {createInput("phone", "+ Phone number", phoneRegExp())}
      {errors.phone && <p className="form__error">{Message.phone}</p>}
      {createInput("address", "Delivery address", adressRegExp())}
      {errors.address && <p className="form__error">{Message.address}</p>}
      {createInput("mail", "E-mail", mailRegExp())}
      {errors.mail && <p className="form__error">{Message.mail}</p>}
      <h3 className="form__title">Entering bank card data:</h3>
      <label htmlFor="cardNumber">
        Card Number:
        {createInput("cardNumber", "Enter 16 digits", cardNumberRegExp(), 16)}
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
        {createInput("valid", "MMYY", validRegExp(), 4)}
        {errors.valid && <p className="form__error">{Message.valid}</p>}
      </label>
      <label htmlFor="cvv">
        CVV:
        {createInput("cvv", "Code", cvvRegExp(), 3)}
        {errors.cvv && <p className="form__error">{Message.cvv}</p>}
      </label>
      <input type="submit" className="form__item" value={"Confirm"} />
    </form>
  );
}

export default Form;
