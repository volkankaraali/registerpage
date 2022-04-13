import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    name: yup
        .string(),
    surname: yup
        .string(),
    email: yup
        .string()
        .email('Lütfen geçerli bir e-posta giriniz.')
        .required('Lütfen e-posta giriniz.'),
    username: yup
        .string()
        .required('Lütfen kullanıcı adı giriniz.'),
    password: yup
        .string()
        .typeError('Her karakteri kullanamazsın. Sadece @/./+/-/_ kullanabilirsin')
        .min(8, 'Şifreniz en az 8 karakter olmalı.')
        .max(32, 'Şifreniz en fazla 32 karakter olmalı.')
        .required('Lütfen şifre giriniz.'),
    repassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Şifre aynı değil.')
        .required('Lütfen şifre giriniz.'),
    contract: yup
        .boolean()
        .oneOf([true], 'Sözleşmeyi kabul etmelisiniz.')

})