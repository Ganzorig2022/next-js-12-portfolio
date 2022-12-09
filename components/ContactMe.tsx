import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {};
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // formData {input object irne.}
    window.location.href = `mailto:ganzo.galaxy@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10 mt-12'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got what you need.{' '}
          <span className='decoration-[#F7AB0a]/50 underline'>Let's talk</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>976-99022052</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>
              Bayangol district, Tsoglog apartment #202
            </p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>ganzo.galaxy@gmail.com</p>
          </div>
        </div>

        {/* FORM HANDLER */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              type='text'
              className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/40 hover:border-[#f7ab0a]'
              placeholder='Name'
            />
            <input
              {...register('email')}
              type='email'
              className='contactInput'
              placeholder='Email'
            />
          </div>
          <input
            {...register('subject')}
            type='text'
            className='contactInput'
            placeholder='Subject'
          />
          <textarea
            placeholder='Message'
            {...register('message')}
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
