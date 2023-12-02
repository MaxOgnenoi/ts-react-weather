import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3012;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
