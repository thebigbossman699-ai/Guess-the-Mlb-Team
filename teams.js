const teams = [

{
    team: "New York Yankees",
    players: [
        { name: "Aaron Judge", position: "RF", number: 99 },
        { name: "Trent Grisham", position: "CF", number: 12 },
        { name: "Jasson Domínguez", position: "LF", number: 24 },
        { name: "Anthony Volpe", position: "SS", number: 11 },
        { name: "Jazz Chisholm Jr.", position: "2B", number: 13 },
        { name: "Oswaldo Cabrera", position: "3B", number: 95 },
        { name: "Paul Goldschmidt", position: "1B", number: 48 },
        { name: "Austin Wells", position: "C", number: 28 },
        { name: "Carlos Rodón", position: "P", number: 55 },
        { name: "Ben Rice", position: "DH", number: 22 }
    ]
},

{
    team: "Los Angeles Dodgers",
    players: [
        { name: "Tommy Edman", position: "CF", number: 25 },
        { name: "Michael Conforto", position: "LF", number: 23 },
        { name: "Teoscar Hernández", position: "RF", number: 37 },
        { name: "Mookie Betts", position: "SS", number: 50 },
        { name: "Hyeseong Kim", position: "2B", number: 6 },
        { name: "Max Muncy", position: "3B", number: 13 },
        { name: "Freddie Freeman", position: "1B", number: 5 },
        { name: "Will Smith", position: "C", number: 16 },
        { name: "Yoshinobu Yamamoto", position: "P", number: 18 },
        { name: "Shohei Ohtani", position: "DH", number: 17 }
    ]
},

{
    team: "New York Mets",
    players: [
        { name: "Tyrone Taylor", position: "CF", number: 15 },
        { name: "Brandon Nimmo", position: "LF", number: 9 },
        { name: "Juan Soto", position: "RF", number: 22 },
        { name: "Francisco Lindor", position: "SS", number: 12 },
        { name: "Jeff McNeil", position: "2B", number: 1 },
        { name: "Mark Vientos", position: "3B", number: 27 },
        { name: "Pete Alonso", position: "1B", number: 20 },
        { name: "Francisco Alvarez", position: "C", number: 4 },
        { name: "Kodai Senga", position: "P", number: 34 },
        { name: "Starling Marte", position: "DH", number: 6 }
    ]
},

{
    team: "Atlanta Braves",
    players: [
        { name: "Michael Harris II", position: "CF", number: 23 },
        { name: "Jarred Kelenic", position: "LF", number: 24 },
        { name: "Ronald Acuña Jr.", position: "RF", number: 13 },
        { name: "Orlando Arcia", position: "SS", number: 11 },
        { name: "Ozzie Albies", position: "2B", number: 1 },
        { name: "Austin Riley", position: "3B", number: 27 },
        { name: "Matt Olson", position: "1B", number: 28 },
        { name: "Sean Murphy", position: "C", number: 12 },
        { name: "Spencer Strider", position: "P", number: 65 },
        { name: "Marcell Ozuna", position: "DH", number: 20 }
    ]
},

{
    team: "Philadelphia Phillies",
    players: [
        { name: "Johan Rojas", position: "CF", number: 18 },
        { name: "Brandon Marsh", position: "LF", number: 16 },
        { name: "Nick Castellanos", position: "RF", number: 8 },
        { name: "Trea Turner", position: "SS", number: 7 },
        { name: "Bryson Stott", position: "2B", number: 5 },
        { name: "Alec Bohm", position: "3B", number: 28 },
        { name: "Bryce Harper", position: "1B", number: 3 },
        { name: "J.T. Realmuto", position: "C", number: 10 },
        { name: "Zack Wheeler", position: "P", number: 45 },
        { name: "Kyle Schwarber", position: "DH", number: 12 }
    ]
},

{
    team: "Boston Red Sox",
    players: [
        { name: "Jarren Duran", position: "CF", number: 16 },
        { name: "Ceddanne Rafaela", position: "LF", number: 3 },
        { name: "Wilyer Abreu", position: "RF", number: 52 },
        { name: "Trevor Story", position: "SS", number: 10 },
        { name: "Alex Bregman", position: "2B", number: 2 },
        { name: "Rafael Devers", position: "3B", number: 11 },
        { name: "Triston Casas", position: "1B", number: 36 },
        { name: "Connor Wong", position: "C", number: 12 },
        { name: "Garrett Crochet", position: "P", number: 35 },
        { name: "Masataka Yoshida", position: "DH", number: 7 }
    ]
},

{
    team: "Toronto Blue Jays",
    players: [
        { name: "Nathan Lukes", position: "CF", number: 38 },
        { name: "Daulton Varsho", position: "LF", number: 25 },
        { name: "George Springer", position: "RF", number: 4 },
        { name: "Bo Bichette", position: "SS", number: 11 },
        { name: "Andrés Giménez", position: "2B", number: 0 },
        { name: "Ernie Clement", position: "3B", number: 28 },
        { name: "Vladimir Guerrero Jr.", position: "1B", number: 27 },
        { name: "Alejandro Kirk", position: "C", number: 30 },
        { name: "Kevin Gausman", position: "P", number: 34 },
        { name: "Addison Barger", position: "DH", number: 47 }
    ]
},

{
    team: "Baltimore Orioles",
    players: [
        { name: "Colton Cowser", position: "CF", number: 17 },
        { name: "Cedric Mullins", position: "LF", number: 31 },
        { name: "Tyler O'Neill", position: "RF", number: 27 },
        { name: "Gunnar Henderson", position: "SS", number: 2 },
        { name: "Jackson Holliday", position: "2B", number: 7 },
        { name: "Jordan Westburg", position: "3B", number: 11 },
        { name: "Ryan Mountcastle", position: "1B", number: 6 },
        { name: "Adley Rutschman", position: "C", number: 35 },
        { name: "Grayson Rodriguez", position: "P", number: 30 },
        { name: "Heston Kjerstad", position: "DH", number: 13 }
    ]
},

{
    team: "Tampa Bay Rays",
    players: [
        { name: "Jonny DeLuca", position: "CF", number: 21 },
        { name: "José Caballero", position: "LF", number: 7 },
        { name: "Josh Lowe", position: "RF", number: 15 },
        { name: "Taylor Walls", position: "SS", number: 6 },
        { name: "Brandon Lowe", position: "2B", number: 8 },
        { name: "Junior Caminero", position: "3B", number: 1 },
        { name: "Yandy Díaz", position: "1B", number: 2 },
        { name: "Ben Rortvedt", position: "C", number: 30 },
        { name: "Shane McClanahan", position: "P", number: 18 },
        { name: "Christopher Morel", position: "DH", number: 5 }
    ]
},

{
    team: "Houston Astros",
    players: [
        { name: "Jake Meyers", position: "CF", number: 6 },
        { name: "Chas McCormick", position: "LF", number: 20 },
        { name: "Cam Smith", position: "RF", number: 11 },
        { name: "Jeremy Peña", position: "SS", number: 3 },
        { name: "Jose Altuve", position: "2B", number: 27 },
        { name: "Isaac Paredes", position: "3B", number: 15 },
        { name: "Christian Walker", position: "1B", number: 8 },
        { name: "Yainer Diaz", position: "C", number: 21 },
        { name: "Framber Valdez", position: "P", number: 59 },
        { name: "Yordan Alvarez", position: "DH", number: 44 }
    ]
},
{
    team: "Texas Rangers",
    players: [
        { name: "Leody Taveras", position: "CF", number: 3 },
        { name: "Wyatt Langford", position: "LF", number: 36 },
        { name: "Adolis García", position: "RF", number: 53 },
        { name: "Corey Seager", position: "SS", number: 5 },
        { name: "Marcus Semien", position: "2B", number: 2 },
        { name: "Josh Jung", position: "3B", number: 6 },
        { name: "Jake Burger", position: "1B", number: 21 },
        { name: "Jonah Heim", position: "C", number: 28 },
        { name: "Jacob deGrom", position: "P", number: 48 },
        { name: "Joc Pederson", position: "DH", number: 31 }
    ]
},

{
    team: "Seattle Mariners",
    players: [
        { name: "Julio Rodríguez", position: "CF", number: 44 },
        { name: "Randy Arozarena", position: "LF", number: 56 },
        { name: "Luke Raley", position: "RF", number: 20 },
        { name: "J.P. Crawford", position: "SS", number: 3 },
        { name: "Jorge Polanco", position: "2B", number: 7 },
        { name: "Josh Rojas", position: "3B", number: 4 },
        { name: "Rowdy Tellez", position: "1B", number: 23 },
        { name: "Cal Raleigh", position: "C", number: 29 },
        { name: "Logan Gilbert", position: "P", number: 36 },
        { name: "Mitch Garver", position: "DH", number: 18 }
    ]
},

{
    team: "Athletics",
    players: [
        { name: "JJ Bleday", position: "CF", number: 33 },
        { name: "Lawrence Butler", position: "LF", number: 4 },
        { name: "Brent Rooker", position: "RF", number: 25 },
        { name: "Jacob Wilson", position: "SS", number: 5 },
        { name: "Zack Gelof", position: "2B", number: 20 },
        { name: "Gio Urshela", position: "3B", number: 13 },
        { name: "Tyler Soderstrom", position: "1B", number: 21 },
        { name: "Shea Langeliers", position: "C", number: 23 },
        { name: "Luis Severino", position: "P", number: 40 },
        { name: "Miguel Andujar", position: "DH", number: 22 }
    ]
},

{
    team: "Los Angeles Angels",
    players: [
        { name: "Jo Adell", position: "CF", number: 7 },
        { name: "Taylor Ward", position: "LF", number: 3 },
        { name: "Mike Trout", position: "RF", number: 27 },
        { name: "Zach Neto", position: "SS", number: 9 },
        { name: "Luis Rengifo", position: "2B", number: 2 },
        { name: "Yoán Moncada", position: "3B", number: 5 },
        { name: "Nolan Schanuel", position: "1B", number: 18 },
        { name: "Logan O'Hoppe", position: "C", number: 14 },
        { name: "Yusei Kikuchi", position: "P", number: 16 },
        { name: "Jorge Soler", position: "DH", number: 12 }
    ]
},

{
    team: "Cleveland Guardians",
    players: [
        { name: "Lane Thomas", position: "CF", number: 8 },
        { name: "Steven Kwan", position: "LF", number: 38 },
        { name: "Will Brennan", position: "RF", number: 17 },
        { name: "Brayan Rocchio", position: "SS", number: 4 },
        { name: "Andrés Giménez", position: "2B", number: 0 },
        { name: "José Ramírez", position: "3B", number: 11 },
        { name: "Carlos Santana", position: "1B", number: 41 },
        { name: "Bo Naylor", position: "C", number: 23 },
        { name: "Shane Bieber", position: "P", number: 57 },
        { name: "Kyle Manzardo", position: "DH", number: 9 }
    ]
},

{
    team: "Detroit Tigers",
    players: [
        { name: "Parker Meadows", position: "CF", number: 22 },
        { name: "Riley Greene", position: "LF", number: 31 },
        { name: "Kerry Carpenter", position: "RF", number: 30 },
        { name: "Javier Báez", position: "SS", number: 28 },
        { name: "Gleyber Torres", position: "2B", number: 25 },
        { name: "Matt Vierling", position: "3B", number: 8 },
        { name: "Spencer Torkelson", position: "1B", number: 20 },
        { name: "Jake Rogers", position: "C", number: 34 },
        { name: "Tarik Skubal", position: "P", number: 29 },
        { name: "Colt Keith", position: "DH", number: 33 }
    ]
},

{
    team: "Minnesota Twins",
    players: [
        { name: "Byron Buxton", position: "CF", number: 25 },
        { name: "Matt Wallner", position: "LF", number: 38 },
        { name: "Trevor Larnach", position: "RF", number: 9 },
        { name: "Carlos Correa", position: "SS", number: 4 },
        { name: "Willi Castro", position: "2B", number: 50 },
        { name: "Royce Lewis", position: "3B", number: 23 },
        { name: "Ty France", position: "1B", number: 13 },
        { name: "Ryan Jeffers", position: "C", number: 27 },
        { name: "Pablo López", position: "P", number: 49 },
        { name: "Jose Miranda", position: "DH", number: 64 }
    ]
},

{
    team: "Kansas City Royals",
    players: [
        { name: "Kyle Isbel", position: "CF", number: 28 },
        { name: "MJ Melendez", position: "LF", number: 1 },
        { name: "Hunter Renfroe", position: "RF", number: 16 },
        { name: "Bobby Witt Jr.", position: "SS", number: 7 },
        { name: "Michael Massey", position: "2B", number: 19 },
        { name: "Maikel Garcia", position: "3B", number: 11 },
        { name: "Vinnie Pasquantino", position: "1B", number: 9 },
        { name: "Salvador Perez", position: "C", number: 13 },
        { name: "Cole Ragans", position: "P", number: 55 },
        { name: "Jonathan India", position: "DH", number: 6 }
    ]
},

{
    team: "Chicago White Sox",
    players: [
        { name: "Luis Robert Jr.", position: "CF", number: 88 },
        { name: "Andrew Benintendi", position: "LF", number: 23 },
        { name: "Mike Tauchman", position: "RF", number: 18 },
        { name: "Colson Montgomery", position: "SS", number: 12 },
        { name: "Lenyn Sosa", position: "2B", number: 50 },
        { name: "Miguel Vargas", position: "3B", number: 20 },
        { name: "Andrew Vaughn", position: "1B", number: 25 },
        { name: "Korey Lee", position: "C", number: 26 },
        { name: "Martin Pérez", position: "P", number: 54 },
        { name: "Andrew Taylor", position: "DH", number: 32 }
    ]
},

{
    team: "Cincinnati Reds",
    players: [
        { name: "TJ Friedl", position: "CF", number: 29 },
        { name: "Spencer Steer", position: "LF", number: 7 },
        { name: "Jake Fraley", position: "RF", number: 27 },
        { name: "Elly De La Cruz", position: "SS", number: 44 },
        { name: "Matt McLain", position: "2B", number: 9 },
        { name: "Jeimer Candelario", position: "3B", number: 3 },
        { name: "Christian Encarnacion-Strand", position: "1B", number: 33 },
        { name: "Tyler Stephenson", position: "C", number: 37 },
        { name: "Hunter Greene", position: "P", number: 21 },
        { name: "Austin Hays", position: "DH", number: 12 }
    ]
},
{
    team: "Milwaukee Brewers",
    players: [
        { name: "Jackson Chourio", position: "CF", number: 11 },
        { name: "Christian Yelich", position: "LF", number: 22 },
        { name: "Sal Frelick", position: "RF", number: 10 },
        { name: "Joey Ortiz", position: "SS", number: 3 },
        { name: "Brice Turang", position: "2B", number: 2 },
        { name: "Oliver Dunn", position: "3B", number: 21 },
        { name: "Rhys Hoskins", position: "1B", number: 12 },
        { name: "William Contreras", position: "C", number: 24 },
        { name: "Freddy Peralta", position: "P", number: 51 },
        { name: "Jake Bauers", position: "DH", number: 9 }
    ]
},

{
    team: "St. Louis Cardinals",
    players: [
        { name: "Victor Scott II", position: "CF", number: 11 },
        { name: "Lars Nootbaar", position: "LF", number: 21 },
        { name: "Jordan Walker", position: "RF", number: 18 },
        { name: "Masyn Winn", position: "SS", number: 0 },
        { name: "Brendan Donovan", position: "2B", number: 33 },
        { name: "Nolan Arenado", position: "3B", number: 28 },
        { name: "Willson Contreras", position: "1B", number: 40 },
        { name: "Iván Herrera", position: "C", number: 48 },
        { name: "Sonny Gray", position: "P", number: 54 },
        { name: "Alec Burleson", position: "DH", number: 41 }
    ]
},

{
    team: "Chicago Cubs",
    players: [
        { name: "Pete Crow-Armstrong", position: "CF", number: 4 },
        { name: "Ian Happ", position: "LF", number: 8 },
        { name: "Seiya Suzuki", position: "RF", number: 27 },
        { name: "Dansby Swanson", position: "SS", number: 7 },
        { name: "Nico Hoerner", position: "2B", number: 2 },
        { name: "Matt Shaw", position: "3B", number: 6 },
        { name: "Michael Busch", position: "1B", number: 29 },
        { name: "Miguel Amaya", position: "C", number: 9 },
        { name: "Shota Imanaga", position: "P", number: 18 },
        { name: "Kyle Tucker", position: "DH", number: 30 }
    ]
},

{
    team: "Pittsburgh Pirates",
    players: [
        { name: "Oneil Cruz", position: "CF", number: 15 },
        { name: "Tommy Pham", position: "LF", number: 28 },
        { name: "Bryan Reynolds", position: "RF", number: 10 },
        { name: "Isiah Kiner-Falefa", position: "SS", number: 7 },
        { name: "Nick Gonzales", position: "2B", number: 39 },
        { name: "Ke'Bryan Hayes", position: "3B", number: 13 },
        { name: "Spencer Horwitz", position: "1B", number: 23 },
        { name: "Joey Bart", position: "C", number: 14 },
        { name: "Paul Skenes", position: "P", number: 30 },
        { name: "Andrew McCutchen", position: "DH", number: 22 }
    ]
},

{
    team: "Arizona Diamondbacks",
    players: [
        { name: "Jake McCarthy", position: "CF", number: 31 },
        { name: "Lourdes Gurriel Jr.", position: "LF", number: 12 },
        { name: "Corbin Carroll", position: "RF", number: 7 },
        { name: "Geraldo Perdomo", position: "SS", number: 2 },
        { name: "Ketel Marte", position: "2B", number: 4 },
        { name: "Eugenio Suárez", position: "3B", number: 28 },
        { name: "Josh Naylor", position: "1B", number: 22 },
        { name: "Gabriel Moreno", position: "C", number: 14 },
        { name: "Corbin Burnes", position: "P", number: 39 },
        { name: "Pavin Smith", position: "DH", number: 26 }
    ]
},
{
    team: "San Diego Padres",
    players: [
        { name: "Jackson Merrill", position: "CF", number: 3 },
        { name: "Jurickson Profar", position: "LF", number: 10 },
        { name: "Fernando Tatís Jr.", position: "RF", number: 23 },
        { name: "Xander Bogaerts", position: "SS", number: 2 },
        { name: "Luis Arraez", position: "2B", number: 4 },
        { name: "Manny Machado", position: "3B", number: 13 },
        { name: "Jake Cronenworth", position: "1B", number: 9 },
        { name: "Luis Campusano", position: "C", number: 12 },
        { name: "Dylan Cease", position: "P", number: 84 },
        { name: "Elias Díaz", position: "DH", number: 35 }
    ]
},

{
    team: "San Francisco Giants",
    players: [
        { name: "Jung Hoo Lee", position: "CF", number: 51 },
        { name: "Heliot Ramos", position: "LF", number: 17 },
        { name: "Mike Yastrzemski", position: "RF", number: 5 },
        { name: "Willy Adames", position: "SS", number: 2 },
        { name: "Tyler Fitzgerald", position: "2B", number: 49 },
        { name: "Matt Chapman", position: "3B", number: 26 },
        { name: "LaMonte Wade Jr.", position: "1B", number: 31 },
        { name: "Patrick Bailey", position: "C", number: 14 },
        { name: "Logan Webb", position: "P", number: 62 },
        { name: "Wilmer Flores", position: "DH", number: 41 }
    ]
},

{
    team: "Colorado Rockies",
    players: [
        { name: "Brenton Doyle", position: "CF", number: 9 },
        { name: "Nolan Jones", position: "LF", number: 22 },
        { name: "Jordan Beck", position: "RF", number: 27 },
        { name: "Ezequiel Tovar", position: "SS", number: 14 },
        { name: "Kyle Farmer", position: "2B", number: 6 },
        { name: "Ryan McMahon", position: "3B", number: 24 },
        { name: "Michael Toglia", position: "1B", number: 4 },
        { name: "Hunter Goodman", position: "C", number: 15 },
        { name: "Kyle Freeland", position: "P", number: 21 },
        { name: "Kris Bryant", position: "DH", number: 23 }
    ]
},

{
    team: "Miami Marlins",
    players: [
        { name: "Derek Hill", position: "CF", number: 3 },
        { name: "Kyle Stowers", position: "LF", number: 28 },
        { name: "Jesús Sánchez", position: "RF", number: 7 },
        { name: "Xavier Edwards", position: "SS", number: 9 },
        { name: "Otto Lopez", position: "2B", number: 6 },
        { name: "Connor Norby", position: "3B", number: 1 },
        { name: "Matt Mervis", position: "1B", number: 36 },
        { name: "Nick Fortes", position: "C", number: 4 },
        { name: "Sandy Alcantara", position: "P", number: 22 },
        { name: "Agustín Ramírez", position: "DH", number: 50 }
    ]
},

{
    team: "Washington Nationals",
    players: [
        { name: "Jacob Young", position: "CF", number: 30 },
        { name: "James Wood", position: "LF", number: 29 },
        { name: "Dylan Crews", position: "RF", number: 3 },
        { name: "CJ Abrams", position: "SS", number: 5 },
        { name: "Luis García Jr.", position: "2B", number: 2 },
        { name: "Paul DeJong", position: "3B", number: 14 },
        { name: "Nathaniel Lowe", position: "1B", number: 30 },
        { name: "Keibert Ruiz", position: "C", number: 20 },
        { name: "MacKenzie Gore", position: "P", number: 1 },
        { name: "Josh Bell", position: "DH", number: 19 }
    ]
}

];
