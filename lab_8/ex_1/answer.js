//1/ Display all docs
db.restaurants.find({}).pretty();

//2/ Display restaurant_id, name, district, cuisine
db.restaurants.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine:1}).pretty();

//3/ Display restaurant_id, name, district, cuisine and no _id field
db.restaurants.find({}, {_id:0, restaurant_id: 1, name: 1, district: 1, cuisine:1}).pretty();

//4/ Display restaurant_id, name, district, zipcode and no _id field
db.restaurants.find({}, {_id:0, restaurant_id: 1, name: 1, district: 1, "address.zipcode":1}).pretty();

// 5/ restaurants in district Bronx
db.restaurants.find({"district":'Bronx'}).pretty();

// 6/ first 5 restaurants in Bronx
db.restaurants.find({district:'Bronx'}).limit(5).pretty();

// 7/ next 5 restaurants after skipping first 5 in Bronx
db.restaurants.find({district: 'Bronx'}).skip(5).limit(5).pretty();

// 8/ rtrs were coodrd < -95.754168
db.restaurants.find({'address.coord.0': {$lt: 95.754168}}).pretty();

// 9/ rtrs where cuisine not American, grade score > 70, cors < -65.754168
db.restaurants.find({'cuisine': {$ne: 'American '}, 'address.coord.0': {$lt: -65.754168},  'grades.score' : {$gt:70}}).pretty();

// 10/ rests id, name, district, cuisine where 'Wil' as first 3 letter of name
db.restaurants.find({name: {$regex: '^Wil'}}, {_id:0, name: 1, district: 1, cuisine:1}).pretty();

// 11/ rests id, name, district, cuisine where name ends with 'ces'
db.restaurants.find({name: {$regex: 'ces$'}}, {_id:0, name: 1, district: 1, cuisine:1}).pretty();

// 12/ rests id, name, district, cuisine where name contains 'Reg
db.restaurants.find({name: {$regex: 'Reg'}}, {_id:0, name: 1, district: 1, cuisine:1}).pretty();

// 13/ Bronx's rtrs, cuisine American or Chinese
db.restaurants.find({'district': 'Bronx', 'cuisine': {$in: ['American ', 'Chinese']}}).pretty();

// 14/ rests in Staten Island', 'Queens', 'Bronx', 'Brooklyn'
db.restaurants.find({'district': {$in : ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {_id:0, restaurant_id:1, name: 1, district: 1, cuisine:1}).pretty();

// 15/ rtrs not in Staten Island', 'Queens', 'Bronx', 'Brooklyn'
db.restaurants.find({'district': {$nin : ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {_id:0, restaurant_id:1, name: 1, district: 1, cuisine:1}).pretty();

// 16/ rsts score <= 10
db.restaurants.find({'grades.score': {$lte: 10}}, {_id:0, restaurant_id:1, name: 1, district: 1, cuisine:1}).pretty();

// 17/