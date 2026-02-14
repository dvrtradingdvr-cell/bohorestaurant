// Menu Data extracted from official Boho Negombo menu images (Complete Menu)
const menuData = {
    brunch: [
        { name: "Turkish Eggs", description: "Poached eggs, garlicky yogurt, warm spicy butter, olive oil, red pepper flakes. Served with sourdough.", price: "Rs. 1,700" },
        { name: "Eggs on Avo Toast", description: "Fried, scrambled or poached eggs, avocado with a thick slice of sourdough bread.", price: "Rs. 2,000" },
        { name: "Boho Toast", description: "Sautéed mushrooms, hummus, homemade pesto, served with a thick slice of sourdough bread.", price: "Rs. 2,000" },
        { name: "Sunshine Bowl", description: "Frozen bananas, fresh papaya, pineapple, mango and passionfruit with granola.", price: "Rs. 1,700" },
        { name: "Boho Breakkie", description: "Fried, poached or scrambled eggs, chicken sausages, smoky bacon, hashbrown, baked beans, tomatoes, mushrooms.", price: "Rs. 2,700" },
        { name: "Smoked Salmon & Avocado Bagel", description: "Cream cheese, avocado, capers & poached eggs.", price: "Rs. 3,100" },
        { name: "Chicken & Waffles", description: "Thin waffle served with fried chicken. Try some syrup with that!", price: "Rs. 2,000" }
    ],
    starters: [
        { name: "Boho Dynamite Shrimps", description: "Crispy fried shrimps tossed in our signature spicy dynamite sauce.", price: "Rs. 1,800" },
        { name: "Hot Buttered Cuttlefish", description: "A Sri Lankan favorite! Crispy cuttlefish tossed in spicy butter and spring onions.", price: "Rs. 2,200" },
        { name: "Vietnamese Crispy Spring Rolls", description: "Hand-rolled crispy rolls served with a sweet chili dipping sauce.", price: "Rs. 1,500" },
        { name: "Hummus & Beef", description: "Creamy homemade hummus topped with spiced beef, served with warm Arabic bread.", price: "Rs. 2,200" },
        { name: "Falafel & Hummus", description: "Served with warm Arabic bread.", price: "Rs. 1,800" },
        { name: "Roasted Tomato Soup", description: "With basil & croutons.", price: "Rs. 1,400" },
        { name: "Creamy Mushroom Soup", description: "With thyme & croutons.", price: "Rs. 1,400" },
        { name: "Hawaiian Chicken Salad", description: "Shredded chicken slices on a bed of mixed salad, paired with pineapple.", price: "Rs. 1,600" },
        { name: "Crispy Chicken Cesar Salad", description: "Romaine lettuce, topped with crunchy croutons, grated parmesan and crispy chicken.", price: "Rs. 1,800" }
    ],
    mains: [
        { name: "Negombo Crab Curry", description: "Local crab cooked in authentic spices. Served with roast paan, pol sambol, dhal and chutney.", price: "Rs. 2,500" },
        { name: "Creamy Prawn Curry", description: "Served with steamed rice, pol sambol, dhal curry, papadums & chutney.", price: "Rs. 2,200" },
        { name: "Egg Kottu", description: "Served with a fried egg & gravy.", price: "Rs. 1,600" },
        { name: "Chicken Kottu", description: "Traditional chopped roti with chicken.", price: "Rs. 2,000" },
        { name: "Beef Kottu", description: "Traditional chopped roti with beef.", price: "Rs. 2,400" },
        { name: "Seafood Kottu", description: "Traditional chopped roti with seafood.", price: "Rs. 2,400" },
        { name: "Srilankan Devilled", description: "Devilled chicken, prawns, fish, beef, pork or crispy tofu served with steamed rice.", price: "Rs. 2,000" },
        { name: "Brinjal Curry", description: "Served with steamed rice, pol sambol, dhal papadums & chutney.", price: "Rs. 2,500" },
        { name: "Kung Pao Chicken", description: "Stir-fried chicken, peanuts and fresh vegetables in sweet sour salty kung pao sauce served with jasmine rice.", price: "Rs. 2,200" },
        { name: "Pad Thai", description: "Classic Thai stir-fried rice noodles with shrimps in a tangy tamarind sauce.", price: "Rs. 3,000" },
        { name: "Bali Nasi Goreng", description: "Indonesian fried rice served with chicken satay, fried egg, prawn crackers & salad.", price: "Rs. 2,400" },
        { name: "Mongolian Beef", description: "Served with steamed rice.", price: "Rs. 2,600" },
        { name: "Chicken Schnitty", description: "Chicken schnitzel served with chips, seasonal salad and mushroom gravy.", price: "Rs. 2,400" },
        { name: "Bangers & Mash", description: "Italian spiced fresh pork sausages in thick onion gravy served with creamy mash & garlic bread.", price: "Rs. 2,500" },
        { name: "Shawarma Bowl with Moroccan Spiced Chicken", description: "Served with hummus, fresh hand cut chips, crispy pita bread, garlic rice & salad.", price: "Rs. 2,300" },
        { name: "Falafel Bowl", description: "Served with hummus, fresh hand cut chips, crispy pita bread, garlic rice & salad.", price: "Rs. 2,000" },
        { name: "Butter Chicken", description: "Creamy butter chicken, served with garlic rice & naan.", price: "Rs. 2,300" },
        { name: "Steak Au Poivre", description: "Creamy beef pepper steak served with chips.", price: "Rs. 2,900" },
        { name: "Pork Chop Milanese", description: "Crispy fried pork chop, served with creamy mash, salad, mushroom sauce & lemon mustard sauce.", price: "Rs. 2,900" },
        { name: "Apple & Maple Pork Chop", description: "Savor & tender pork chop served with creamy mash and green beans.", price: "Rs. 2,900" }
    ],
    seafood: [
        { name: "Whole Red Mullet", description: "Selection of cooking method: Steamed with lime & chili, Deep fried with Thai hot chili sauce, Grilled with creamy garlicky citrus lemon & caper sauce. Served with vegetable rice.", price: "Rs. 3,500" },
        { name: "Garlic Jumbo Prawns", description: "Jumbo prawns in garlic butter sauce, seasonal salad & chips.", price: "Rs. 4,000" },
        { name: "Barramundi Piccata", description: "Crispy skin-on barramundi in piccata sauce, served with smashed potatoes & boiled vegetables.", price: "Rs. 2,400" },
        { name: "Pan Seared Tuna Steak", description: "Tuna steak in a creamy citrus lemon sauce served with mash & salad.", price: "Rs. 2,800" },
        { name: "Tuna Tataki", description: "Sesame crusted tuna steak in cilantro-lime rice, boiled vegetables, teriyaki sauce.", price: "Rs. 2,800" },
        { name: "Fish & Chips", description: "Golden crispy beer-battered fish with fresh handcut chips.", price: "Rs. 2,200" },
        { name: "Lemon Herb Fish Fingers", description: "Served with fresh handcut chips and salad.", price: "Rs. 2,400" },
        { name: "Boho Seafood Platter (Most Popular)", description: "Our seafood platter features market-fresh selection and is served with garlic bread & chips.", price: "Rs. 9,000" }
    ],
    bar: [
        { name: "El Zorro El Blanco (White Wine - Glass)", description: "White wine from Spain.", price: "Rs. 1,600" },
        { name: "El Zorro El Rojo (Red Wine - Glass)", description: "Red wine from Spain.", price: "Rs. 1,600" },
        { name: "El Zorro El Blanco (White Wine - Bottle)", description: "White wine from Spain.", price: "Rs. 7,000" },
        { name: "Cono Sur Tocornal Sauvignon Blanc (Bottle)", description: "Premium white wine.", price: "Rs. 8,000" },
        { name: "Tall Horse Chardonnay (Bottle)", description: "South African white wine.", price: "Rs. 8,000" },
        { name: "El Zorro El Rojo (Red Wine - Bottle)", description: "Red wine from Spain.", price: "Rs. 7,000" },
        { name: "Cono Sur Tocornal Merlot (Bottle)", description: "Premium red wine.", price: "Rs. 8,000" },
        { name: "Tall Horse Pinotage (Bottle)", description: "South African red wine.", price: "Rs. 9,000" },
        { name: "Torosella Italian Prosecco", description: "Sparkling wine.", price: "Rs. 12,000" },
        { name: "Lion Lager Bottle 325ml", description: "Premium lager beer.", price: "Rs. 600" },
        { name: "Lion Lager Can 330ml", description: "Premium lager beer.", price: "Rs. 600" },
        { name: "Lion Lager Can 500ml", description: "Premium lager beer.", price: "Rs. 900" },
        { name: "Lion Ice 350ml", description: "Ice cold lager.", price: "Rs. 900" },
        { name: "Carlsberg Bottle 325ml", description: "Classic lager.", price: "Rs. 750" },
        { name: "Carlsberg Can 330ml", description: "Classic lager.", price: "Rs. 750" },
        { name: "Carlsberg Can 500ml", description: "Classic lager.", price: "Rs. 1,000" },
        { name: "Somersby Apple Cider", description: "Refreshing apple cider.", price: "Rs. 1,200" },
        { name: "Somersby Blackberry Cider", description: "Blackberry flavored cider.", price: "Rs. 1,200" },
        { name: "Island Cider Passion", description: "Passion fruit cider.", price: "Rs. 1,200" },
        { name: "Island Cider Pineapple", description: "Pineapple flavored cider.", price: "Rs. 1,200" },
        { name: "Russian Standard Vodka 25ml", description: "Premium vodka.", price: "Rs. 1,200" },
        { name: "Smirnoff Vodka 25ml", description: "Classic vodka.", price: "Rs. 1,200" },
        { name: "Absolut Vodka 25ml", description: "Swedish vodka.", price: "Rs. 1,200" },
        { name: "Casco Viejo Tequila 25ml", description: "Premium tequila.", price: "Rs. 1,200" },
        { name: "Bacardi White Rum 25ml", description: "White rum.", price: "Rs. 1,200" },
        { name: "Malibu Rum 25ml", description: "Coconut rum.", price: "Rs. 1,200" },
        { name: "Colombo No.7 Gin 25ml", description: "Local premium gin.", price: "Rs. 1,200" },
        { name: "Gordon's Dry Gin 25ml", description: "Classic dry gin.", price: "Rs. 1,200" },
        { name: "Hendricks Gin 25ml", description: "Premium gin.", price: "Rs. 1,200" },
        { name: "Beefeater Gin 25ml", description: "London dry gin.", price: "Rs. 1,200" },
        { name: "Ceylon Arrack 25ml", description: "Local arrack.", price: "Rs. 1,600" },
        { name: "Ballentines Whisky 25ml", description: "Scotch whisky.", price: "Rs. 1,200" },
        { name: "J.W. Red Whisky 25ml", description: "Johnnie Walker Red Label.", price: "Rs. 1,200" },
        { name: "Monkey Shoulder Whisky 25ml", description: "Blended malt whisky.", price: "Rs. 1,300" },
        { name: "J.W. Black Whisky 25ml", description: "Johnnie Walker Black Label.", price: "Rs. 1,300" },
        { name: "Chivas Regal Whisky 25ml", description: "Premium scotch.", price: "Rs. 1,300" },
        { name: "Jack Daniels Whisky 25ml", description: "Tennessee whiskey.", price: "Rs. 1,300" },
        { name: "Glenfiddish 12yrs Whisky 25ml", description: "Single malt scotch.", price: "Rs. 1,500" },
        { name: "Singleton 500rs Whisky 25ml", description: "Single malt scotch.", price: "Rs. 1,500" },
        { name: "Martell Cognac 25ml", description: "French cognac.", price: "Rs. 1,700" },
        { name: "Hennessy VS Cognac 25ml", description: "Premium cognac.", price: "Rs. 1,700" },
        { name: "Gin (Local) 50ml", description: "Local gin.", price: "Rs. 800" },
        { name: "Vodka (Local) 50ml", description: "Local vodka.", price: "Rs. 800" },
        { name: "Rum (Local) 50ml", description: "Local rum.", price: "Rs. 800" },
        { name: "Brandy (Local) 50ml", description: "Local brandy.", price: "Rs. 800" },
        { name: "Arrack (Local) 50ml", description: "Local arrack.", price: "Rs. 800" },
        { name: "Whisky (Local) 50ml", description: "Local whisky.", price: "Rs. 800" },
        { name: "Rum & Mango Shot", description: "Tropical shot.", price: "Rs. 1,200" },
        { name: "Tequila Shot", description: "Classic tequila shot.", price: "Rs. 1,200" },
        { name: "Sambuca Shot", description: "Anise flavored shot.", price: "Rs. 1,200" },
        { name: "B52 Shot", description: "Layered shot.", price: "Rs. 2,000" }
    ],
    pizzas: [
        { name: "Margherita", description: "Marinara, mozzarella & fresh basil.", price: "Rs. 1,700" },
        { name: "The American", description: "Chicken sausage and chips, marinara, mozzarella & basil.", price: "Rs. 2,000" },
        { name: "Tonno E Cipolla", description: "Tuna & onions, marinara, mozzarella & basil.", price: "Rs. 2,000" },
        { name: "Pizza Bianca", description: "The white pizza, creamy garlicky ricotta cheese, mozzarella, parma & basil.", price: "Rs. 2,200" },
        { name: "Patate E Cipolla", description: "Sliced crispy potatoes, caramelized parma, onions & rosemary, marinara & mozzarella.", price: "Rs. 2,000" },
        { name: "Nice & Spicy Pizza", description: "Chicken devilled, capsicum, onions, marinara, mozzarella & fresh basil. (Our best selling pizza!)", price: "Rs. 2,000" },
        { name: "Frutti Di Mare", description: "Prawns, white fish, calamari, marinara & mozzarella.", price: "Rs. 2,400" },
        { name: "Mediterranean Vegetable", description: "Grilled seasonal vegetables with homemade sundried tomato, black olives, marinara & mozzarella.", price: "Rs. 1,900" },
        { name: "Birria Pizza", description: "Tender pulled beef, onion, jalapeño, marinara, mozzarella & cilantro.", price: "Rs. 1,800" },
        { name: "It's Salame", description: "Salami, jalapeño, marinara, mozzarella.", price: "Rs. 2,400" },
        { name: "Crudo, Burrata & Pesto", description: "Parma ham, burrata, pesto, marinara & mozzarella.", price: "Rs. 3,000" }
    ],
    pastas: [
        { name: "Penne Pomodoro", description: "Penne in a warm tomato sauce.", price: "Rs. 1,700" },
        { name: "Aglio, Olio E Peperoncino", description: "Spaghetti in garlic, extra virgin olive oil and a kick of chili.", price: "Rs. 1,700" },
        { name: "Brinjal Pasta", description: "Local roasted eggplant in a warm tomato sauce.", price: "Rs. 2,000" },
        { name: "Spaghetti Alle Polpette", description: "With Italian style chicken meatballs in a warm tomato sauce.", price: "Rs. 2,200" },
        { name: "Penne All'Arrabbiata", description: "Penne pasta cooked in a spicy tomato sauce.", price: "Rs. 1,800" },
        { name: "Penne Alla Bolognese", description: "Penne pasta in beef Bolognese sauce.", price: "Rs. 2,400" },
        { name: "Negombo Seafood Spaghetti", description: "Spaghetti tossed with white fish, prawns, calamari in tomato sauce.", price: "Rs. 2,700" },
        { name: "Smoked Salmon Pasta", description: "Penne pasta with smoked salmon.", price: "Rs. 2,800" },
        { name: "Penne Alla Vodka", description: "Cooked in a creamy tomato, ricotta & vodka.", price: "Rs. 2,200" },
        { name: "Sausage Pasta", description: "Italian sausages in a warm tomato sauce.", price: "Rs. 1,900" },
        { name: "Creamy Pesto with Prosciutto Crudo & Burrata", description: "Premium pasta with prosciutto and burrata cheese.", price: "Rs. 3,000" }
    ],
    sandwiches: [
        { name: "The Boho Beef Burger", description: "Spiced beef patty, crispy bacon, cheese topped with a sunny side egg. Served with fries & onion rings.", price: "Rs. 2,400" },
        { name: "Fish Sando", description: "Fish battered & fried in tempura batter served with salad and a house made tartar sauce.", price: "Rs. 2,200" },
        { name: "Tower Crispy Chicken", description: "Fried chicken with mayo-sriracha slaw.", price: "Rs. 2,200" },
        { name: "Monster Mushroom Burger", description: "Crispy mushrooms, sautéed onions and homemade sundried tomatoes.", price: "Rs. 2,200" },
        { name: "Crispy Fish Tacos", description: "Battered fish tacos, guac, pico de gallo and red sauce.", price: "Rs. 1,900" },
        { name: "BBQ Pulled Beef Tacos", description: "Shredded beef, guac, pico de gallo and red sauce.", price: "Rs. 2,000" },
        { name: "Bang Bang Shrimp Tacos", description: "Crispy shrimps coated in mayo-sriracha sauce, guac and pico de gallo.", price: "Rs. 1,800" },
        { name: "Tofu Taco", description: "Crispy salt & pepper tofu, guac, spicy crema and pico de gallo.", price: "Rs. 1,600" },
        { name: "The Chip Butty", description: "Sourdough sandwich filled with fried egg & sweet chili.", price: "Rs. 1,500" },
        { name: "Philly Steak Sandwich", description: "Pulled hot beef, sautéed onions and peppers, melty mozzarella on a long roll.", price: "Rs. 2,000" },
        { name: "Meatball Ciabatta", description: "Chicken meatball smothered in warm tomato sauce and melted mozzarella on ciabatta.", price: "Rs. 2,000" },
        { name: "Tunacado Ciabatta", description: "Flaked tuna mixed with creamy avocado, tomatoes, onions on ciabatta.", price: "Rs. 2,000" },
        { name: "Falafel Kebab", description: "Salad, falafel, tomatoes, cucumber, onion, hummus, spicy chili sauce in warm Arabic bread.", price: "Rs. 2,000" },
        { name: "Club Sandwich", description: "Roasted chicken sausage, bacon, fried egg, tomato, cucumber, cheese, lettuce with buttery dijon mustard sauce. Served with chips.", price: "Rs. 2,300" },
        { name: "Texas Pulled Beef Wrap", description: "Spiced pulled beef paired with salad, salsa, guacamole and melted mozzarella.", price: "Rs. 2,400" },
        { name: "Tangy Prawn Wrap", description: "Sautéed prawns tossed in sweet chili sauce nestled in a bed of fresh mixed salad.", price: "Rs. 2,200" },
        { name: "Crispy Buffalo Chicken Wrap", description: "Spicy buffalo sauce crispy chicken dripped with hot honey wrapped with mixed salad.", price: "Rs. 2,000" },
        { name: "Crispy Tofu Peanut Sauce Wrap", description: "Tofu coated in flavorful peanut sauce and salad.", price: "Rs. 1,800" }
    ],
    desserts: [
        { name: "Chocolate Pot De Crème", description: "Classic French creamy, silky chocolate pot, served with whipped cream.", price: "Rs. 1,000" },
        { name: "Italian Coffee Cream", description: "Italian crema di caffè.", price: "Rs. 1,000" },
        { name: "Boho Hot Chocolate Brownie", description: "Homemade fudgy brownie with vanilla ice cream & granola.", price: "Rs. 1,200" },
        { name: "Passion Fruit Pannacotta", description: "Tangy, creamy and sweet passionfruit panna cotta.", price: "Rs. 1,200" },
        { name: "Belgian Waffles: Caramel & Apple Crumble", description: "With butter scotch ice cream.", price: "Rs. 2,200" },
        { name: "Hot Chocolate Ganache & Whipping Cream", description: "Decadent chocolate dessert.", price: "Rs. 1,700" },
        { name: "Fresh Fruits & Whipping Cream", description: "Seasonal fresh fruits with cream.", price: "Rs. 1,700" },
        { name: "Fresh Fruit Salad", description: "Mixed seasonal fruits with honey.", price: "Rs. 1,000" },
        { name: "Regular Ice Cream", description: "Vanilla, chocolate or butterscotch ice cream.", price: "Rs. 900" },
        { name: "Boho Croffle", description: "All butter croffle with vanilla ice cream, kithul honey & caramelized nuts.", price: "Rs. 1,800" }
    ],
    drinks: [
        { name: "Espresso", description: "Single shot of rich espresso.", price: "Rs. 500" },
        { name: "Espresso Doppio", description: "Double shot espresso.", price: "Rs. 900" },
        { name: "Cappuccino", description: "Classic Italian coffee with steamed milk.", price: "Rs. 700" },
        { name: "Americano", description: "Espresso with hot water.", price: "Rs. 600" },
        { name: "Hot Chocolate", description: "Rich and creamy hot chocolate.", price: "Rs. 800" },
        { name: "Italian Hot Chocolate", description: "Extra thick Italian style.", price: "Rs. 950" },
        { name: "Affogato", description: "Espresso poured over vanilla ice cream.", price: "Rs. 1,000" },
        { name: "Latte", description: "Smooth espresso with steamed milk.", price: "Rs. 900" },
        { name: "Matcha Latte", description: "Premium matcha with steamed milk.", price: "Rs. 1,000" },
        { name: "Hazelnut Latte", description: "Latte with hazelnut syrup.", price: "Rs. 900" },
        { name: "Caramel Latte", description: "Latte with caramel syrup.", price: "Rs. 900" },
        { name: "Cafe Mocha", description: "Espresso with chocolate and steamed milk.", price: "Rs. 900" },
        { name: "Irish Coffee", description: "Coffee with a kick!", price: "Rs. 2,000" },
        { name: "Boho Ginseng Cappuccino", description: "House special cappuccino.", price: "Rs. 900" },
        { name: "Pistacchio Cappuccino", description: "Cappuccino with pistachio flavor.", price: "Rs. 1,200" },
        { name: "Nutella Cappuccino", description: "Cappuccino with Nutella.", price: "Rs. 1,000" },
        { name: "Iced Coffee", description: "Cold brew coffee over ice.", price: "Rs. 800" },
        { name: "Iced Milo", description: "Chilled milo drink.", price: "Rs. 800" },
        { name: "Iced Caramel Frappuccino", description: "Blended iced coffee with caramel.", price: "Rs. 1,000" },
        { name: "Mocha Frappuccino", description: "Blended iced mocha.", price: "Rs. 1,100" },
        { name: "Choco Cookie Frappuccino", description: "Blended with chocolate cookies.", price: "Rs. 1,200" },
        { name: "Biscoff Iced Latte", description: "Iced latte with Biscoff spread.", price: "Rs. 1,300" },
        { name: "Iced Matcha", description: "Chilled matcha latte.", price: "Rs. 900" },
        { name: "Iced Salted Caramel Matcha", description: "Matcha with salted caramel.", price: "Rs. 1,100" },
        { name: "Iced Dirty Matcha", description: "Matcha with espresso shot.", price: "Rs. 1,200" },
        { name: "Iced Strawberry Matcha Latte", description: "Matcha with strawberry.", price: "Rs. 1,100" },
        { name: "Earth Day Matcha", description: "Special matcha blend.", price: "Rs. 1,200" },
        { name: "Chocolate Shake", description: "Thick chocolate milkshake.", price: "Rs. 750" },
        { name: "Vanilla Shake", description: "Classic vanilla milkshake.", price: "Rs. 750" },
        { name: "Strawberry & Banana Shake", description: "Fresh fruit shake.", price: "Rs. 900" },
        { name: "Butterscotch Caramel Shake", description: "Rich caramel shake.", price: "Rs. 900" },
        { name: "Biscoff Shake", description: "Shake with Biscoff cookies.", price: "Rs. 1,200" },
        { name: "Fudgy Brownie Shake", description: "Shake with brownie pieces.", price: "Rs. 900" },
        { name: "Dairy Free Choco Shake", description: "Vegan chocolate shake.", price: "Rs. 900" },
        { name: "Brazilian Lemonade", description: "Creamy limeade - crowd favorite!", price: "Rs. 900" },
        { name: "Golden Tropical Mocktail", description: "Tropical fruit blend.", price: "Rs. 900" },
        { name: "Strawberry Mocktail", description: "Fresh strawberry drink.", price: "Rs. 900" },
        { name: "Magic Blue Mocktail", description: "Blue curacao mocktail.", price: "Rs. 900" },
        { name: "Purple Rain Mocktail", description: "Purple fruit mocktail.", price: "Rs. 900" },
        { name: "Flamingo Sunrise Mocktail", description: "Tropical sunrise drink.", price: "Rs. 900" },
        { name: "Cotton Candy Dream Mocktail", description: "Sweet cotton candy flavor.", price: "Rs. 900" },
        { name: "Hibiscus Lemonade", description: "Floral lemonade.", price: "Rs. 900" },
        { name: "Vanilla Lassi", description: "Creamy yogurt drink.", price: "Rs. 700" },
        { name: "Mango Lassi", description: "Fresh mango yogurt drink.", price: "Rs. 800" },
        { name: "Pistacchio & Cardamon Lassi", description: "Aromatic lassi.", price: "Rs. 1,000" },
        { name: "King Coconut", description: "Fresh king coconut water.", price: "Rs. 400" },
        { name: "Fresh Lime Juice", description: "Freshly squeezed lime.", price: "Rs. 700" },
        { name: "Mango Juice", description: "Fresh mango juice.", price: "Rs. 1,000" },
        { name: "Papaya Lime Juice", description: "Papaya with lime.", price: "Rs. 900" },
        { name: "Avocado Juice", description: "Creamy avocado drink.", price: "Rs. 900" },
        { name: "Watermelon Juice", description: "Fresh watermelon juice.", price: "Rs. 900" },
        { name: "Passion Fruit Juice", description: "Tangy passion fruit.", price: "Rs. 1,000" },
        { name: "Pineapple Juice", description: "Fresh pineapple juice.", price: "Rs. 1,000" },
        { name: "Mixed Fruit Juice", description: "Blend of fresh fruits.", price: "Rs. 1,200" },
        { name: "The ABC Juice", description: "Apple, beetroot & carrot.", price: "Rs. 1,000" },
        { name: "Let It Glow Juice", description: "Orange, pineapple & turmeric.", price: "Rs. 1,000" },
        { name: "Classic Green Juice", description: "Cucumber, mint & pineapple.", price: "Rs. 1,000" },
        { name: "Lemon Iced Tea", description: "Refreshing lemon tea.", price: "Rs. 650" },
        { name: "Mango Iced Tea", description: "Mango flavored tea.", price: "Rs. 650" },
        { name: "Strawberry Iced Tea", description: "Strawberry tea.", price: "Rs. 650" },
        { name: "Apple Iced Tea", description: "Apple flavored tea.", price: "Rs. 650" },
        { name: "Peach Iced Tea", description: "Peach tea.", price: "Rs. 650" },
        { name: "Pot of Plain Tea", description: "Classic Ceylon tea.", price: "Rs. 600" },
        { name: "Pot of Earl Grey Tea", description: "Earl Grey tea.", price: "Rs. 400" },
        { name: "Pot of Blue Butterfly Tea", description: "Blue butterfly pea tea.", price: "Rs. 600" },
        { name: "Pot of Hibiscus Tea", description: "Hibiscus flower tea.", price: "Rs. 400" },
        { name: "Pot of Green Tea", description: "Green tea.", price: "Rs. 600" },
        { name: "Coke / Diet Coke", description: "Soft drink.", price: "Rs. 400" },
        { name: "Sprite", description: "Lemon-lime soda.", price: "Rs. 400" },
        { name: "Fanta", description: "Orange soda.", price: "Rs. 400" },
        { name: "Ginger Beer", description: "Spicy ginger beer.", price: "Rs. 400" },
        { name: "Lemonade", description: "Fresh lemonade.", price: "Rs. 400" },
        { name: "Ginger Ale", description: "Ginger ale soda.", price: "Rs. 400" },
        { name: "Soda", description: "Club soda.", price: "Rs. 400" },
        { name: "Tonic", description: "Tonic water.", price: "Rs. 400" },
        { name: "Red Bull", description: "Energy drink.", price: "Rs. 1,600" },
        { name: "Spinner Energy Drink", description: "Local energy drink.", price: "Rs. 1,000" },
        { name: "Cranberry Juice", description: "Cranberry juice.", price: "Rs. 3,000" },
        { name: "Cordial Orange Juice Pitcher", description: "Orange juice pitcher.", price: "Rs. 2,600" },
        { name: "Mineral Water 500ml", description: "Bottled water.", price: "Rs. 200" },
        { name: "Mineral Water 1L", description: "1 liter bottled water.", price: "Rs. 350" },
        { name: "Mineral Water 1.5L", description: "1.5 liter bottled water.", price: "Rs. 400" }
    ]
};

// Functions
const renderMenu = (category) => {
    const menuGrid = document.getElementById('menu-items');
    menuGrid.innerHTML = '';

    menuData[category].forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'menu-item';
        itemEl.innerHTML = `
            <div class="item-left">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            <div class="item-price">${item.price}</div>
        `;
        menuGrid.appendChild(itemEl);
    });
};

// DOM Events
document.addEventListener('DOMContentLoaded', () => {
    // Initial Menu Render - Only if element exists
    const menuGrid = document.getElementById('menu-items');
    if (menuGrid) {
        renderMenu('brunch');
    }

    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update Active Tab
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Render Items - Safety check again
                if (menuGrid) {
                    const category = btn.getAttribute('data-category');
                    renderMenu(category);
                }
            });
        });
    }

    // Nav Scroll Effect
    const nav = document.getElementById('main-nav');
    if (!document.querySelector('.sub-hero')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    } else {
        nav.classList.add('scrolled'); // Always solid on sub-pages
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');

            // Re-inject the correct icon tag based on state
            // This is necessary because Lucide replaces the <i> tag with an <svg>
            if (isActive) {
                menuToggle.innerHTML = '<i data-lucide="x"></i>';
            } else {
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
            }

            // Refresh icons to verify the new tag
            lucide.createIcons();
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            });
        });
    }
});

// Implementation of Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.sig-card, .section-title, .about-content').forEach(el => {
    // Basic animation setup
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// CSS for the intersection observer animation (injection)
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
