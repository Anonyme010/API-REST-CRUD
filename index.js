const express = require('express');
const classesRoutes = require('./routes/classesRoutes');
const enseignantsRoutes = require('./routes/enseignantsRoutes');
const etudiantsRoutes = require('./routes/etudiantsRoutes');

const app = express();
app.use(express.json());

app.use(classesRoutes);
app.use(enseignantsRoutes);
app.use(etudiantsRoutes);

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
