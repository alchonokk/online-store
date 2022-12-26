export function nameRegExp() {
  return {
    required: true,
    pattern: /([a-zA-Z0-9]{3,})+ ([a-zA-Z0-9]{3,})/,
  };
};

export function phoneRegExp() {
  return {
    required: true,
    pattern: /[\+][0-9]{9,}/,
  };
};

export function adressRegExp() {
  return {
    required: true,
    pattern: /([a-zA-Z0-9]{5,})+ ([a-zA-Z0-9]{5,})+ ([a-zA-Z0-9]{5,})/,
  };
};

export function mailRegExp() {
  return {
    required: true,
    pattern: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm ,
  };
};

export function cardNumberRegExp() {
  return {
    required: true,
    pattern: /^[0-9]{16}$/,
  };
};

export function validRegExp() {
  return {
    required: true,
    pattern: /^(0[1-9]|1[0-2])\/?(2[2-9]|3[0-9])$/,
  };
};

export function cvvRegExp() {
  return {
    required: true,
    pattern: /[0-9]{3}$/,
  };
};
