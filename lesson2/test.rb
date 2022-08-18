competitors = [["Gracie-Leigh Cruz",      "5ft 2in",    129],
              ["Suhail Stott",            "5ft 7in",    169],
              ["Ava-May Hall",            "5ft 7in",    177],
              ["Katie-Louise Milne",      "5ft 11in",   122],
              ["Akbar Bolton",            "5ft 4in",    135],
              ["Joy Thompson",            "5ft 10in",   177],
              ["Rickie Nunez",            "5th 5in",    142],
              ["Yaqub Combs",             "6ft 0in",    193],
              ["Tulisa Guzman",           "5ft 3in",    111],
              ["Haydn Farrell",           "5ft 7in",    155]]

blah_variable = competitors.each do |name, height, weight|
  puts "Up next competitor is #{name}."
  puts "They are #{height} and weigh #{weight}lbs."
  puts "Lets show them a big round of aplause."
  puts ""
end
