import Multer from "multer";
import path from 'path'

const storage = Multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Upload/images/");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

export const Upload = Multer({storage});
