import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { schema, type Schema } from '../../utils/rules'
import Input from '../../components/Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password'])

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Dang ky</div>

              <Input<FormData>
                type='email'
                placeholder='Email'
                className='mt-8'
                name='email'
                register={register}
                errorMessage={errors.email?.message}
              />

              <Input<FormData>
                type='password'
                placeholder='Password'
                className='mt-2'
                name='password'
                register={register}
                // rules={rules.password}
                errorMessage={errors.password?.message}
                autoComplete='on'
              />

              <Input<FormData>
                type='password'
                placeholder='Confirm Password'
                className='mt-2'
                name='confirm_password'
                register={register}
                // rules={rules.confirm_password}
                errorMessage={errors.confirm_password?.message}
                autoComplete='on'
              />
              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sv hover:bg:-red-600'
                >
                  Dang Ky
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-slate-400'>Bạn đã có tài khoản? </span>
                  <Link to='/login' className='text-red-500 ml-2'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
