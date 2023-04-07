import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          login: 'login',
          userName: 'UserName',
          password: 'Password',
          firstName: 'First Name',
          lastName: 'Last Name',
          number: 'Number',
          email: 'Email',
          forgotPass: 'forgot Password?',
          required: 'this is requerd',
          minLength: 'The number of characters is less than the limit.',
          maxLength: 'You exceeded the max length',
          register: 'register',
          have_account: 'Do you have an account?',
          logout_title: 'Click to exit',
          logout: 'Logout',
        },
      },
      fa: {
        translation: {
          login: 'ورود',
          number: 'شماره تلفن',
          userName: 'نام کاربری',
          password: 'رمز عبور',
          firstName: 'نام',
          lastName: 'نام خانوادگی',
          forgotPass: 'فراموشی رمز عبور؟',
          required: 'پر کردن این فیلد ضروری است',
          minLength: 'تعداد کاراکتر کمتر از حد مجاز میباشد',
          maxLength: 'تعداد کاراکتر بیش از حد مجاز میباشد',
          register: 'ثبت نام',
          have_account: 'اکانت دارید؟',
          logout_title: 'برای خروج کلیک کنید',
          logout: 'خروج',
        },
      },
    },
  });

export default i18n;
