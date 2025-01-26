The issue was resolved by adding a listener to the database reference to confirm data persistence after the `set()` operation.  Here's the corrected code:

```javascript
const dbRef = firebase.database().ref('/myData');
dbRef.set({ key: 'value' }).then(() => {
  console.log('Data written successfully!');
  dbRef.once('value', (snapshot) => {
    console.log('Data in database:', snapshot.val());
  });
}).catch((error) => {
  console.error('Error writing data:', error);
});
```

Alternatively, for critical operations requiring atomicity, use a transaction:

```javascript
dbRef.transaction((currentData) => {
  if (currentData === null) {
    return { key: 'value' };
  } else {
    return null; // Or update as needed
  }
}).then((transactionResult) => {
  console.log('Transaction committed:', transactionResult.committed, transactionResult.snapshot.val());
}).catch((error) => {
  console.error('Error committing transaction:', error);
});
```