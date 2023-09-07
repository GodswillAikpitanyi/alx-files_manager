import AppController from '../controllers/AppController';
import app from '../server';

app.get('/status', async(req, res) => {
  await AppController.getStatus(req, res)
});
app.get('/stats', async (req, res) => {
  await AppController.getStats(req, res)
});
