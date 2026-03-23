console.clear();
import { initExamTest, chooseExamAnswer, goToExamStage } from "./testsExam.js";

import iconBody from "../images/icons/Q_Icon_Body.svg";
import iconHand from "../images/icons/Q_Icon_Hand.svg";
import iconEar from "../images/icons/Q_Icon_Ear.svg";
import iconRunningMan from "../images/icons/Q_Icon_RunningMan.svg";

import iconTree from "../images/icons/Q_Icon_Tree.svg";
import iconWhiteMushroom from "../images/icons/Q_Icon_WhiteMushroom.svg";
import iconSun from "../images/icons/Q_Icon_Sun.svg";
import iconWind from "../images/icons/Q_Icon_Wind.svg";

import iconWhiteMushroomVar from "../images/icons/Q_Icon_WhiteMushroomVar.svg";
import iconForest from "../images/icons/Q_Icon_Forest.svg";
import iconChampignonVar from "../images/icons/Q_Icon_ChampignonVar.svg";

import iconCompass from "../images/icons/Q_Icon_Compass.svg";
import iconSound from "../images/icons/Q_Icon_Sound.svg";
import iconKnife from "../images/icons/Q_Icon_Knife.svg";
import iconCamera from "../images/icons/Q_Icon_Camera.svg";

import iconDog from "../images/icons/Q_Icon_Dog.svg";
import iconDirt from "../images/icons/Q_Icon_Dirt.svg";
import iconBear from "../images/icons/Q_Icon_Bear.svg";

const stages = [
  {
    question: "Ты увидел в лесу незнакомые яркие ягоды. Что сделать?",
    answers: [
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Попробовать одну ягоду",
        description:
          "Иногда кажется, что небольшой кусочек поможет понять вкус ягоды. Такой способ иногда упоминают в разговорах о лесных находках.",
        count: 0,
      },
      {
        icon: iconHand,
        alt: "Иконка руки",
        title: "Сорвать несколько домой",
        description:
          "Иногда ягоды берут с собой, чтобы позже рассмотреть их внимательнее. Так делают, когда хотят узнать название растения.",
        count: 0,
      },
      {
        icon: iconEar,
        alt: "Иконка уха",
        title: "Не трогать ягоды",
        description:
          "В лесу встречается много ягод разных видов. Некоторые из них могут быть похожи друг на друга.",
        count: 1,
      },
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Сфотографировать и попробовать позже",
        description:
          "Иногда ягоды сначала фотографируют, чтобы позже сравнить их с описанием. Так проще запомнить место и внешний вид растения.",
        count: 0,
      },
    ],
  },

  {
    question: "На тропе лежит большое поваленное дерево. Как лучше пройти?",
    answers: [
      {
        icon: iconTree,
        alt: "Иконка дерева",
        title: "Обойти дерево по тропе",
        description:
          "Иногда поваленные деревья появляются прямо на маршруте. Путешественники стараются продолжать движение по тропе.",
        count: 1,
      },
      {
        icon: iconWhiteMushroom,
        alt: "Иконка гриба",
        title: "Перелезть прямо через ствол",
        description:
          "Иногда люди просто перелезают через препятствие на тропе. Так можно быстро продолжить путь дальше.",
        count: 0,
      },
      {
        icon: iconSun,
        alt: "Иконка солнца",
        title: "Свернуть в лес и искать новую тропу",
        description:
          "Иногда кажется, что рядом может быть другой удобный путь. В лесу нередко встречаются разные направления движения.",
        count: 0,
      },
      {
        icon: iconWind,
        alt: "Иконка ветра",
        title: "Пройти под ветками",
        description:
          "Иногда ветви поваленного дерева лежат достаточно низко. Люди пытаются пройти под ними, не сходя с места.",
        count: 0,
      },
    ],
  },

  {
    question: "Ты заметил муравейник рядом с тропой. Что это может подсказать?",
    answers: [
      {
        icon: iconWhiteMushroomVar,
        alt: "Иконка гриба в траве",
        title: "Где растут грибы",
        description:
          "Иногда люди обращают внимание на разные признаки леса. Некоторые пытаются связать их с местами роста грибов.",
        count: 0,
      },
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Где проходит старая тропа",
        description:
          "Иногда муравейники встречаются рядом с дорожками или тропами. Их можно заметить вдоль лесных маршрутов.",
        count: 0,
      },
      {
        icon: iconForest,
        alt: "Иконка леса",
        title: "Где больше влаги",
        description:
          "Некоторые животные выбирают места с подходящими условиями среды. Это может зависеть от почвы, света и влажности.",
        count: 0,
      },
      {
        icon: iconChampignonVar,
        alt: "Иконка направления",
        title: "Где южная сторона",
        description:
          "Муравейники часто строятся рядом с деревьями или пнями. Они могут располагаться с разных сторон лесных объектов.",
        count: 1,
      },
    ],
  },
  {
    question: "Начало темнеть, а до выхода из леса далеко. Что лучше сделать?",
    answers: [
      {
        icon: iconPath,
        alt: "Иконка тропы",
        title: "Вернуться по знакомой тропе",
        description:
          "Иногда удобнее использовать уже знакомый маршрут. По знакомым местам легче ориентироваться.",
        count: 1,
      },
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Продолжать идти быстрее",
        description:
          "Иногда люди ускоряют шаг, когда начинает темнеть. Так кажется, что можно быстрее выйти из леса.",
        count: 0,
      },
      {
        icon: iconForest,
        alt: "Иконка леса",
        title: "Искать короткий путь через лес",
        description:
          "Иногда кажется, что рядом может быть более короткая дорога. Люди пробуют идти напрямую через лес.",
        count: 0,
      },
      {
        icon: iconSun,
        alt: "Иконка солнца",
        title: "Ждать пока станет светлее",
        description:
          "Иногда люди делают паузу и остаются на месте. Такой вариант тоже иногда рассматривают в лесу.",
        count: 0,
      },
    ],
  },
  {
    question: "Ты нашёл красивую поляну с грибами. Что важно сделать?",
    answers: [
      {
        icon: iconPath,
        alt: "Иконка тропы",
        title: "Собрать все грибы",
        description:
          "Иногда кажется, что лучше собрать всё сразу. Так люди стараются не упустить находку.",
        count: 0,
      },
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Аккуратно срезать грибы",
        description:
          "Грибы часто собирают ножом или аккуратно рукой. Так стараются сохранить место, где они растут.",
        count: 1,
      },
      {
        icon: iconForest,
        alt: "Иконка леса",
        title: "Сломать старые грибы",
        description:
          "Некоторые считают, что старые грибы лучше убрать. Иногда их просто ломают на месте.",
        count: 0,
      },
      {
        icon: iconSun,
        alt: "Иконка солнца",
        title: "Вырывать грибы с корнем",
        description:
          "Иногда грибы просто вытягивают из земли. Такой способ тоже встречается у грибников.",
        count: 0,
      },
    ],
  },
];

const config = {
  storageKey: "forestExamTestResult",
  resultPage: "/pages/interactive/results_test_exam_attention.html",
};

const questionElement = document.querySelector(".A_Question");

if (questionElement) {
  initExamTest(stages);
  chooseExamAnswer(stages, config);
  goToExamStage(stages);
}
