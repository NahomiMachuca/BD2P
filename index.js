const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();


exports.onUserCreate = functions.firestore.document('permiso/{permiso_id}').onCreate(async (snap, context) => {
    const values = snap.data();
    const query = db.collection("permiso");
    const snapshot = await query.where("id_permiso", "==", values.id_permiso).get();
    let duracion_permiso = 0;
    snapshot.forEach(querysnapshot => {
        duracion_permiso = querysnapshot.data().duracion_permiso
    });
    console.log(b);
    if (duracion_permiso > 15) {
        try {
            await db.collection('permiso').doc(snap.id).delete();
        } catch (error) {
            console.log(error);
        }
    }
})