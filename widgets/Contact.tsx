"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FilledButton from '@/widgets/FilledButton';

export const Contact = () => {

  const form = useRef(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!form.current) {
      return null;
    }

    emailjs.sendForm("service_ve9i2xp", "template_a0c0epl", form.current, "OBMxHU3kzLlzrqXIB")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} id='contactForm' onSubmit={sendEmail} className="flex flex-col gap-4 md:gap-8 w-full md:self-center lg:w-1/2">
      <div className="flex gap-4">
        <div className="relative">
          <input className="sr-only peer" type="radio" value="informations" name="contact_type" id="contact_infos" />
          <label className="h-full flex flex-col gap-2 p-5 bg-gray dark:bg-light-black rounded-lg cursor-pointer focus:outline-none peer-checked:text-white peer-checked:bg-main" htmlFor="contact_infos">
            <h5 className="text-lg font-semibold">Informations</h5>
            <p>Vous avez une question ou besoin d’informations</p>
          </label>
        </div>
        <div className="relative">
          <input className="sr-only peer" type="radio" value="projet" name="contact_type" id="contact_projet" />
          <label className="h-full flex flex-col gap-2 p-5 bg-gray dark:bg-light-black rounded-lg cursor-pointer focus:outline-none peer-checked:text-white peer-checked:bg-main" htmlFor="contact_projet">
            <h5 className="text-lg font-semibold">Projet</h5>
            <p>Vous avez un projet et vous aimeriez obtenir un devis</p>
          </label>
        </div>
      </div>
      <div className="hidden peer-checked/info:block">Drafts are only visible to administrators.</div>
      <div className="hidden peer-checked/projet:block">Your post will be publicly visible on your site.</div>
      <div className="flex flex-col gap-4 flex-wrap md:gap-8 lg:flex-row">
        <label className='font-semibold flex flex-col grow'>Nom
          <input name="user_name" className='rounded-2xl bg-gray dark:bg-light-black text-second dark:text-gray font-medium px-4 py-3 focus:outline-none' type="text" placeholder="John Doe" />
        </label>
        <label className='font-semibold flex flex-col grow'>Email
          <input name="user_email" className='rounded-2xl bg-gray dark:bg-light-black text-second dark:text-gray font-medium px-4 py-3 focus:outline-none' type="email" placeholder="contact@john-doe.com" />
        </label>
      </div>
      <label className='font-semibold flex flex-col'>Message
        <textarea rows={5} name="message" className='rounded-2xl bg-gray dark:bg-light-black text-second dark:text-gray font-medium px-4 py-3 focus:outline-none' placeholder="Je vous contact..." />
      </label>
      <FilledButton className="md:self-start" type="submit">Envoyer</FilledButton>
    </form>
  );
};