import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { nameRegExp, phoneRegExp, adressRegExp, mailRegExp, cardNumberRegExp, validRegExp, cvvRegExp  } from "./validation";

const DEFAULT_CLASSNAME_PAYSYSTEM = "form__card__payment-logo";
const CLASSNAME_VISA_PAYSYSTEM = "form__card__payment-logo visa";
const CLASSNAME_MASTER_CARD_PAYSYSTEM = "form__card__payment-logo master-card";
const CLASSNAME_UNION_PAYSYSTEM = "form__card__payment-logo union-pay";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:"onBlur"});

  const [logoPaymentSystem, setLogoPaymentSystem] = useState(DEFAULT_CLASSNAME_PAYSYSTEM);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  };
  
  register("cardNumber", {
    onBlur: (e) => {
      let firstSymbol = Number(e.target.value.charAt(0));
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
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input {...register("nameAndSurname", nameRegExp())} placeholder ={"Name surname"} className="form__item" />
      {errors.nameAndSurname && <p className="form__error">Name and surname must be longer than 3 symbols</p>}
      <input {...register("phone", phoneRegExp())} placeholder ={"+ phone number"} className="form__item" />
      {errors.phone && <p className="form__error">Phone must be longer than 9 numbers</p>}
      <input {...register("address", adressRegExp())} placeholder ={"Delivery address"} className="form__item" />
      {errors.address && <p className="form__error">Аddress must be longer than 3 words, every word is more than 5 symbols</p>}
      <input type="email" {...register("mail", mailRegExp())} placeholder ={"E-mail"} className="form__item" />
      {errors.mail && <p className="form__error">Please enter e-mail</p>}
      <h3 className="form__card_title">Entering bank card data:</h3>
      <label htmlFor="cardNumber"> Card Number:
        <input {...register("cardNumber", cardNumberRegExp())} placeholder ={"Enter 16 digits"} maxLength={16} className="form__item" />
        {errors.cardNumber && <p className="form__error">Card number includes 16 numbers</p>}
      </label>
      <div className="form__card__payment"> Payment system:
        <span className={logoPaymentSystem} ></span>
      </div>
      <label htmlFor="valid"> VALID: 
        <input {...register("valid", validRegExp())} placeholder ={"MMYY"} maxLength={4} className="form__item" />
        {errors.valid && <p className="form__error">Valid includes 4 numbers</p>}
      </label>
      <label htmlFor="cvv"> CVV: 
        <input {...register("cvv", cvvRegExp())} placeholder ={"Code"} maxLength={3} className="form__item" />
        {errors.cvv && <p className="form__error">CVV includes 3 numbers</p>}
      </label>
      <input type="submit" className="form__item" />
    </form>
  );
}

export default Form;