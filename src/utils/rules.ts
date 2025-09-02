import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

export interface FormData {
  email: string
  password: string
  confirm_password: string
}

type Rules = {
  [K in keyof FormData]?: RegisterOptions<FormData, K>
}

export const getRules = (getValues?: UseFormGetValues<FormData>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    },
    maxLength: {
      value: 160,
      message: 'Maximum length is 160 characters'
    },
    minLength: {
      value: 5,
      message: 'Minimum length is 5 characters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Maximum length is 160 characters'
    },
    minLength: {
      value: 6,
      message: 'Minimum length is 6 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Maximum length is 160 characters'
    },
    minLength: {
      value: 6,
      message: 'Minimum length is 6 characters'
    },
    validate: (value) => !getValues || value === getValues('password') || 'Passwords do not match'
  }
})
