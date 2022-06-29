export const elements = {
  login: {
    title: '[data-cy="login-title"]',
    textCreateAccount: '[data-cy="login-createAccount"]',
    btnSubmit: '[data-cy="login-button-submit"]',
  },
  input: {
    text: {
      element: '[data-cy="input-text"]',
      errors: {
        required: ':nth-child(1) > [data-cy="input-error-required"]',
      },
    },
    currency: {
      element: '[data-cy="input-currency"]',
    },
    password: {
      element: '[data-cy="input-password"]',
      errors: {
        required: '.col-input-password > [data-cy="input-error-required"]',
      },
    },
  },
  toaster: {
    element: '.p-toast-message-content',
    icon: '.p-toast-message-icon',
    title: '.p-toast-summary',
    description: '.p-toast-detail',
    iconClose: '.p-toast-icon-close-icon',
  },
};
