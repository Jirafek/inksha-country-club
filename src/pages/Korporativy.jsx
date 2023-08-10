import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { m } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Navigate } from "react-router-dom";
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import FixedFuter from '../components/Home/FixedFuter';
import { Helmet } from "react-helmet";

const images = [
    {
        img: '/image/korp_bania.webp',
        text: 'Растопка бани и купели'
    },
    {
        img: '/image/korp_chill.webp',
        text: 'Активный отдых'
    },
    {
        img: '/image/korp_riba.webp',
        text: 'Рыбалка на пруду'
    },
];

const inputs = [
    'имя',
    'телефон',
    'e-mail',
];

const Korporativy = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = () => {
        setSelectedImage('/image/gram_korp.webp');
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const [isLoading, setIsLoading] = useState(false);
    const [navigateState, setNavigateState] = useState(false);
    const [currentWindow, setCurrentWindow] = useState(1);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setCurrentWindow(2);
        // console.log(data)
    };
    const onSend = (dataFromForm) => {
        const data = {
            active: dataFromForm['Активный отдых'] ? 'Да' : 'Нет',
            bania: dataFromForm['Растопка бани и купели'] ? 'Да' : 'Нет',
            riba: dataFromForm['Рыбалка на пруду'] ? 'Да' : 'Нет',
            dogovor: dataFromForm['оформление и оплата договора +10%'] ? 'Да' : 'Нет',
            name: dataFromForm['имя'],
            phone: dataFromForm['телефон'],
            email: dataFromForm['e-mail'],
        }

        setCurrentWindow(4);
        setIsLoading(true);

        emailjs.send("service_a1dan7b", "template_rmhn4mc", data, "V_IkuqWqNwJlUw72K")
            .then((result) => {
                setCurrentWindow(3);
                setTimeout(() => {
                    setIsLoading(false);
                    setNavigateState(true);
                }, 2000)
            }, (error) => {
                alert('Ошибка при отправке формы')
            }); // sending to email
    }

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

    return (
          <>
      <Helmet>
        <title>Корпоративы в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
        <meta
          name="description"
          content="Корпоративы в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть со своей командой и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
        />
            <meta
          name="title"
          content="Корпоративы в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
        />
            <meta
          name="keywords"
          content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
        />
      </Helmet>
        <div>
            {selectedImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[100]"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                    onClick={closeImage}
                >
                    <img className="w-[90%] rounded-[25px]" src={selectedImage} alt="Opened Image" />
                </div>
            )}
            {
                currentWindow === 1 ?
                    <form onSubmit={handleSubmit(onSubmit)} style={{ backgroundImage: 'url(/image/korp_bg.webp)' }} className="relative back_settings h-[851px]">
                        <div className="m-0 flex flex-col items-center">
                            <img src="/image/korp_title.webp" alt="" />
                        </div>
                        <div className="flex justify-center relative">
                            <img src="/image/korp_layer_photo.webp" alt="" />
                            <img className="absolute bottom-1" src="/image/korp_people.webp" alt="" />
                        </div>
                        <div>
                            <div className="flex justify-center flex-col px-[30px]">
                                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.33)' }} className="border-[2px] border-[#B76569] rounded-[25px] w-[330px] py-[9px] px-3 gap-4 flex overflow-x-auto">
                                    {
                                        images.map((el, i) => (
                                            <label className="w-[103px]" key={uuidv4()}>
                                                <div className="flex flex-col items-center gap-[3px]">
                                                    <img className="w-[103px]" src={el.img} alt="" />
                                                    <input name="dops" {...register(el.text)} type="checkbox" />
                                                    <p className="max-w-[110px] monterey text-[11px] text-center">
                                                        {el.text}
                                                    </p>
                                                </div>
                                            </label>
                                        ))
                                    }
                                </div>
                                <div className="bg-[#EDDEDF] border border-[#B76569] rounded-[30px] w-[330px] py-[6px] mt-[2px]">
                                    <label className="flex justify-around items-center">
                                        <input {...register("оформление и оплата договора +10%")} name="dogovor" type="checkbox" />
                                        <p className="monterey text-[13px]">оплата юр.переводом по договору +10%</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[427px] right-0">
                            <button type="button" onClick={openImage} className="relative">
                                <img style={{ transform: 'translate(-50%)' }} className="absolute top-6 left-1/2 w-[60px]" src="/image/gram_korp.webp" alt="" />
                                <img className="z-30 relative" src="/image/ramp_korp.webp" alt="" />
                            </button>
                        </div>
                        <img className="absolute w-full bottom-1" src="/image/korp_men.webp" alt="" />
                        <button type="submit" style={{ transform: 'translateX(-50%)' }} className="absolute left-1/2 bottom-20 w-[260px]">
                            <img src="/image/korp_btn.webp" alt="" />
                        </button>
                    </form>
                    : currentWindow === 2 ?
                        <form onSubmit={handleSubmit(onSend)} style={{ backgroundImage: 'url(/image/korp_bg2.webp)' }} className="relative back_settings h-[750px]">
                            <div className="m-0 flex flex-col items-center">
                                <img src="/image/korp_title.webp" alt="" />
                            </div>
                            <div className="flex justify-center">
                                <div style={{ backgroundImage: 'url(/image/korp2_tabl.webp)' }} className="relative back_settings w-[265px] h-[204px] pt-[55px] font-medium pb-[25px] px-[21px] monterey text-[22px] text-center">
                                    Оставьте ваши контакты и наш менеджер свяжется с вами
                                </div>
                            </div>
                            <div className="flex justify-center px-4">
                                <div style={{ backgroundColor: 'rgb(255, 233, 233)' }} className="relative rounded-[20px] back_settings w-full py-[35px] px-[9px] flex flex-col items-center gap-3">
                                    {
                                        inputs.map((el, i) => (
                                            <input key={uuidv4()} placeholder={el} {...register(el, { required: el === 'e-mail' ? false : true })} className="w-full outline-none pl-[17px] py-[6px] leading-normal rounded-[10px] border border-black bg-white" type="text" />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className="w-[338px]">
                                    <img src="/image/korp2_btn.webp" alt="" />
                                </button>
                            </div>
                        </form>
                        : currentWindow === 3 ?
                            <>
                                {navigateState && <Navigate to="/" />}
                                <img className="h-[851px]" src="/image/bron_good.webp" alt="" />
                            </>
                            :
                            <div className="flex justify-center items-center h-screen">
                                <RingLoader color={'#123abc'} loading={isLoading} css={override} size={150} />
                            </div>
            }

            <FixedFuter link="/" needRotate={true} />
        </div>
                </>
    );
}

export default Korporativy;
