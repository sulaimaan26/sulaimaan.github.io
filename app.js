let db = new Localbase('db')

    db.collection('users').add({
        id: 1,
        name: 'Bill',
        age: 47
    })

    try {
         //Valid Search
        db.collection('users').doc({id:1}).get().then(users => {
            console.log('Valid Search:');
            console.log(users)
        })

        //Invalid Search
        db.collection('users').doc({id:2}).get().then(users => {
            console.log('Invalid Search');
            console.log(users)
        })
        
    } catch (error) {
        console.log('Error Block');
        console.log(error);
    }