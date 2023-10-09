const headingLines1 = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 1.5,
    },
  },
};
const headingLines2 = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeOut',
        duration: 1.8,
      },
    },
  };
  const headingLines3 = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeOut',
        duration: 2,
      },
    },
  };
  const headingLines4 = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeOut',
        duration: 2.2,
      },
    },
  };

const HappyClickableItemsData = [
    {
        imgWebp: "/image/bania.webp",
        imgAvif: "/avif/bania.avif",
        imgAlt: 'Баня в Икша Кантри Клаб',
        text: "Баня",
        animation: headingLines1
    },
    {
        imgWebp: "/image/ribalka.webp",
        imgAvif: "/avif/ribalka.avif",
        imgAlt: 'Рыбалка в Икша Кантри Клаб',
        text: "Рыбалка",
        animation: headingLines2
    },
    {
        imgWebp: "/image/sport.webp",
        imgAvif: "/avif/sport.avif",
        imgAlt: 'Занятия спортом в Икша Кантри Клаб',
        text: "Спорт",
        animation: headingLines3
    },
    {
        imgWebp: "/image/posidelki.webp",
        imgAvif: "/avif/posidelki.avif",
        imgAlt: 'Посиделки в Икша Кантри Клаб',
        text: "Посиделки",
        animation: headingLines4
    },
];

export default HappyClickableItemsData;
