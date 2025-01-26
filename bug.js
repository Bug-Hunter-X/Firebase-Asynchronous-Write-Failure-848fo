In a Firebase project, I encountered an issue where data wasn't being written to the Realtime Database asynchronously as expected.  The `set()` method appeared to complete successfully, but the data wasn't immediately reflected in the database. This wasn't a simple timing issue because I waited several minutes. The relevant code snippet is below:

```javascript
firebase.database().ref('/myData').set({key: 'value'}).then(() => {
  console.log('Data written successfully!');
}).catch((error) => {
  console.error('Error writing data:', error);
});
```