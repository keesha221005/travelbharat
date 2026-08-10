const express = require('express');
const {
  getAllPlacesAdmin,
  getPlaceByIdAdmin,
  createPlace,
  updatePlace,
  verifyPlace,
  deletePlace,
  uploadPlaceImages,
  addPlaceImageByUrl,
  deletePlaceImage,
  addNearbyAttraction
} = require('../../controllers/placeController');
const { requireAuth, requireRole } = require('../../middleware/auth');
const upload = require('../../middleware/upload');

const router = express.Router();

router.use(requireAuth);

router.get('/', getAllPlacesAdmin);
router.get('/:id', getPlaceByIdAdmin);
router.post('/', createPlace);
router.put('/:id', updatePlace);
router.delete('/:id', deletePlace);

// Only super_admin can verify/publish content (moderation control)
router.patch('/:id/verify', requireRole('super_admin'), verifyPlace);

router.post('/:id/images', upload.array('images', 10), uploadPlaceImages);
router.post('/:id/images/url', addPlaceImageByUrl);
router.delete('/:placeId/images/:imageId', deletePlaceImage);

router.post('/:id/nearby', addNearbyAttraction);

module.exports = router;