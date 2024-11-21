const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Sample Data
const dropdownData = 
  [
    {
      "mainTitle": "Dua's Importancs",
      "items": [
        {
          "id": 1,
          "name": "The servant is dependent on his Lord ",
          "subItems": [
            {
              "id": 101,
              "name": "The servant is dependent on his Lord #1",
              "subItemsDetails": [{
                "id": 1011,
                "subItemsTitle": "1. The servant is dependent on his Lord #1",
                "subItemsDetails": "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
                "subItemsReference":"Surah Al-Fatir 35:15"

              }
                
              ]
              
            },
            {
              "id": 102, "name": "The servant is dependent on his Lord #2",
              
              "subItemsDetails": [{
                "id": 1022,
                "subItemsTitle": "2. The servant is dependent on his Lord #2",
                "subItemsDetails": {
                  "text-title":"Say the following statement 10 times -",
                  "text": "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
                  "arabic":"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
                  "transliteration": "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu",
                  "translation": "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune."
                },
                "subItemsReference":"Bukhari: 844"

              }
                
              ]
             },
            {
              "id": 103, "name": "The reward of freeing of a slave",
              
                  "subItemsDetails": [{
                    "id": 1033,
                    "subItemsTitle": "3. The reward of freeing of a slave",
                    "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                    "subItemsReference":"Bukhari: 6404"
    
                  }
                    
                  ]
            },
          ]
        },
        {
          "id": 2,
          "name": " The most important thing to ask Allah for",
          "subItems": [
            {
              "id": 201, "name": " Allah's guidance #1",
              "subItemsDetails": [{
                "id": 2011,
                "subItemsTitle": "3. The reward of freeing of a slave",
                "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                "subItemsReference":"Bukhari: 6404"

              }
                
              ]
             },
            {
              "id": 202, "name": " Allah's guidance #2",
              "subItemsDetails": [{
                "id": 2022,
                "subItemsTitle": "3. The reward of freeing of a slave",
                "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                "subItemsReference":"Bukhari: 6404"

              }
                
              ]
             },
            {
              "id": 203, "name": " Allah's guidance #3",
              "subItemsDetails": [{
                "id": 2033,
                "subItemsTitle": "3. The reward of freeing of a slave",
                "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                "subItemsReference":"Bukhari: 6404"

              }
                
              ]
             },

          ]
        },
        {
          "id": 3,
          "name": "Ask for paradise & protection from fire",
          "subItems": [
            {
              "id": 3011, "name": "Ask for paradise & seek refuge from fire",
              "subItemsDetails": [{
                "id": 3011,
                "subItemsTitle": "3. The reward of freeing of a slave",
                "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                "subItemsReference":"Bukhari: 6404"

              }
                
              ]
             },
            {
              "id": 302, "name": "Seeking good of this world and the hereafter",
              "subItemsDetails": [{
                "id": 3022,
                "subItemsTitle": "3. The reward of freeing of a slave",
                "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                "subItemsReference":"Bukhari: 6404"

              }
                
              ]
             }
          ]
        }
      ]
    },
    {
      "mainTitle": "Dua's Excellence",
      "items": [
        {
          "id": 1,
          "name": "The servant is dependent on his Lord ",
          "subItems": [
            {
              "id": 101,
              "name": "The servant is dependent on his Lord #1",
              "subItemsDetails": [{
                "id": 1011,
                "subItemsTitle": "1. The servant is dependent on his Lord #1",
                "subItemsDetails": "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
                "subItemsReference":"Surah Al-Fatir 35:15"

              }
                
              ]
              
            },
            {
              "id": 102, "name": "The servant is dependent on his Lord #2",
              
              "subItemsDetails": [{
                "id": 1022,
                "subItemsTitle": "2. The servant is dependent on his Lord #2",
                "subItemsDetails": "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
                "subItemsReference":"Bukhari: 844"

              }
                
              ]
             },
            {
              "id": 103, "name": "The reward of freeing of a slave",
              
                  "subItemsDetails": [{
                    "id": 1033,
                    "subItemsTitle": "3. The reward of freeing of a slave",
                    "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                    "subItemsReference":"Bukhari: 6404"
    
                  }
                    
                  ]
            },
          ]
        },
        {
          "id": 2,
          "name": " The most important thing to ask Allah for",
          "subItems": [
            {
              "id": 201, "name": " Allah's guidance #1",
              "subItemsDetails": [{
                "id": 2011,
                "subItemsTitle": "3. The reward of freeing of a slave",
                "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                "subItemsReference":"Bukhari: 6404"

              }
                
              ]
             },
            {
              "id": 202, "name": " Allah's guidance #2",
              "subItemsDetails": [{
                "id": 2022,
                "subItemsTitle": "3. The reward of freeing of a slave",
                "subItemsDetails": "The Prophet (ﷺ) said: The person who says the above statement 10 times It would be as if he had freed four of Ishmael's (As) children from slavery.",
                "subItemsReference":"Bukhari: 6404"

              }
                
              ]
             },
        

          ]
        },
       
      ]
    },
  
  ]
  


// API Route
app.get('/api/dropdown', (req, res) => {
  res.json(dropdownData);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
