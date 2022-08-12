// Find the records
db.student.find()

// Find the records in prettier format
db.student.find().pretty()

// insert the record
db.student.insert({name: "Scott",email: "Scott@ef.com", city: "Boston"})

// update the record
db.student.update({_id:  ObjectId("62f5d6647965453a3ea15028")}, {$set:{name:"Scott"}})

//delete / remove the record
db.student.remove({_id:ObjectId("62f5dacab41c74a403802dc8")})