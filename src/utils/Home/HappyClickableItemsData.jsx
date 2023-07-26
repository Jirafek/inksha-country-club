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
        img: "/image/bania.png",
        text: "Баня",
        animation: headingLines1
    },
    {
        img: "/image/ribalka.png",
        text: "Рыбалка",
        animation: headingLines2
    },
    {
        img: "/image/sport.png",
        text: "Спорт",
        animation: headingLines3
    },
    {
        img: "/image/posidelki.png",
        text: "Посиделки",
        animation: headingLines4
    },
];

export default HappyClickableItemsData;
