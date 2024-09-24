
$mongo = new MongoDB\Client("mongodb://localhost:27017");

$db = $mongo->users;

$collection = $db->profiles;

$insertResult = $collection->insertOne([
    'username' => 'adhi',
    'email' => 'adhithinky@gmail.com',
    'password' => '$2y$10$hB4Pp5E6S8C67xD5U6l5UOzNRgIKcb0mkgdQZ9X08ZrkldmckrO8i' 
]);

// Update a document in the collection
$updateResult = $collection->updateOne(
    ['username' => 'adhithyan'],
    ['$set' => ['email' => 'adhi@gmail.com']]
);

// Delete a document from the collection
$deleteResult = $collection->deleteOne(['username' => 'adhithyan']);

// Find documents in the collection
$cursor = $collection->find(['username' => 'Adhithyan']);
foreach ($cursor as $document) {
    var_dump($document);
}
