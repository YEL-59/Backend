const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Sample Data
const dropdownData = [
  {
    mainTitle: "Dua's Importancs",
    items: [
      {
        id: 1,
        name: "The servant is dependent on his Lord ",
        subItems: [
          {
            id: 101,
            name: "The servant is dependent on his Lord #1",
            subItemsDetails: [
              {
                id: 1011,
                subItemsTitle: "1. The servant is dependent on his Lord #1",
                subItemsDetails: {
                  textheader: "",
                  text: "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
                  arabic: " ",
                  transliteration: "",
                  translation: "",
                },
                subItemsReference: "Surah Al-Fatir 35:15",
              },
            ],
          },
          {
            id: 102,
            name: "The servant is dependent on his Lord #2",

            subItemsDetails: [
              {
                id: 1022,
                subItemsTitle: "2. The servant is dependent on his Lord #2",
                subItemsDetails: {
                  textheader: "Say the following statement 10 times -",
                  text: "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
                  arabic:
                    "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
                  transliteration:
                    "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu",
                  translation:
                    "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.",
                },
                subItemsReference: "Bukhari: 844",
              },
            ],
          },
          {
            id: 103,
            name: "The reward of freeing of a slave",

            subItemsDetails: [
              {
                id: 1033,
                subItemsTitle: "3. The reward of freeing of a slave",
                subItemsDetails: {
                  textheader: "Say the following statement 10 times -",
                  text: "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                  arabic:
                    "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                  transliteration:
                    "Laa ilahaa illAllahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir",
                  translation:
                    "None has the right to be worshipped but Allah alone, Who has no partner. His is the dominion and His is the praise, and He is Able to do all things.",
                },
                subItemsReference: "Bukhari: 6404",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: " The most important thing to ask Allah for",
        subItems: [
          {
            id: 201,
            name: " Allah's guidance #1",
            subItemsDetails: [
              {
                id: 2011,
                subItemsTitle: "3. The reward of freeing of a slave",
                subItemsDetails: {
                  textheader: "",
                  text: "He whom Allah guides is the [rightly] guided, but he whom He leaves astray - never will you find for him a protecting guide. (Surah Al-Kahf 18:17)",
                  arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ",
                  transliteration: "Iyyaaka na'budu wa lyyaaka nasta'een",
                  translation:
                    "It is You we worship and It is You we ask for help.",
                },
                subItemsReference: "Surah Al-Fatihah 1:5",
              },
            ],
          },
          {
            id: 202,
            name: " Allah's guidance #2",
            subItemsDetails: [
              {
                id: 2022,
                subItemsTitle: "3. The reward of freeing of a slave",
                subItemsDetails: {
                  textheader:
                    "The Messenger of Allah (ﷺ) commenced the prayer when he got up at night. Then he said:",
                  text: "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
                  arabic:
                    "اِهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُّسْتَقِيْمٍ  ",
                  transliteration:
                    "Ihdini limakhtulifa fihi minal-haqqi bi'idhnika innaka tahdi man tasha'u ila siratim mustaqim",
                  translation:
                    "Guide me through that which there has been difference concerning the truth, verily, You are upon a straight path.",
                },
                subItemsReference: "Muslim: 770",
              },
            ],
          },
          {
            id: 203,
            name: " Allah's guidance #3",
            subItemsDetails: [
              {
                id: 2033,
                subItemsTitle: "3. The reward of freeing of a slave",
                subItemsDetails: {
                  textheader:
                    "Messenger of Allah (ﷺ) commanded Mu'adh bin Jabal (RA) to recite this supplication after every (prescribed) prayer -",
                  text: "",
                  arabic:
                    " اَللَّهُمَّ أَعِنِّيْ عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
                  transliteration:
                    "Allaahumma 'a'innee 'alaa thikrika, wa shukrika, wahusni 'ibaadatik",
                  translation:
                    "O Allah, help me to remember You, to give You thanks, and to perform Your worship in the best manner.",
                },
                subItemsReference: "Sahih (Albani). Abu Dawud: 1522",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Ask for paradise & protection from fire",
        subItems: [
          {
            id: 3011,
            name: "Ask for paradise & seek refuge from fire",
            subItemsDetails: [
              {
                id: 3011,
                subItemsTitle: "3. The reward of freeing of a slave",
                subItemsDetails: {
                  textheader: "",
                  text: 'Narrated by Abu Huraira (RA): The Messenger of Allah (ﷺ), asked a man, "What do you supplicate in your prayer?" The man says, I recite Tashahhud and say- (The dua is mentioned above) I can’t recite dua as beautifully as you, nor can I recite dua like Mu\'adh!" Then Prophet (ﷺ) said, “We also supplicate like you!”',
                  arabic:
                    "اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ ",
                  transliteration:
                    "Allaahumma 'innee 'as'alukal-jannata wa 'a'oodhu bika minan-naar",
                  translation:
                    "O Allah, I ask You for Paradise and seek Your protection from the Fire.",
                },
                subItemsReference: "Sahih (Albani). Ibn Majah: 910",
              },
            ],
          },
          {
            id: 302,
            name: "Seeking good of this world and the hereafter",
            subItemsDetails: [
              {
                id: 3022,
                subItemsTitle: "3. The reward of freeing of a slave",
                subItemsDetails: {
                  textheader: "",
                  text:
                    'Al-`Abbas bin `Abdul-Muttalib (RA) said: “I said: ‘O Messenger of Allah (ﷺ), teach me something that I may ask Allah, [Mighty and Sublime] for.’ He (ﷺ) said: ‘Ask Allah for Al-`Āfiyah.’ Then I remained for a day, then I came and said: ‘O Messenger of Allah (ﷺ), teach me something that I may ask Allah for.’ So he (ﷺ) said to me: “O Abbas, O uncle of the Messenger of Allah! Ask Allah for Al-`Āfiyah in the world and in the Hereafter.” [1] Narrated by Abu Bakr Siddiq (RA): The Prophet (ﷺ) said (sitting) on the pulpit, "Seek forgiveness and healing from Allah, for no one has been given anything better than healing after Yaqeen.'[2] /
                    "",
                  arabic: " ",
                  transliteration: "",
                  translation: "",
                },
                subItemsReference:
                  "[1] Sahih (Albani). Tirmidhi: 3514 [2] Bukhari, Al-Adabul Mufrad, 724",
              },
            ],
          },
        ],
      },
    ],
  },
];

// API Route
app.get("/api/dropdown", (req, res) => {
  res.json(dropdownData);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
