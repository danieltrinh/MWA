db.cars.find({'rental_details.reservation_id': 'A34567'});
db.cars.aggregate([
    {$unwind:'$rental_details'},
    {$match: {'$plate': 'XXCCVV'}},
    {$sort: {'rental_details.rental_end_date': -1}},
    {$group: {_id:{'car_id':'$id.plate'}},'end_milage':{$max: '$rental_details.end_mileage'}}
]).pretty();