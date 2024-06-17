import multer from "multer";
import {v4 as uuid} from "uuid";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Image file will be saved in uploads folder
    },
    filename: (req, file, cb) => {
        const id = uuid(); // create a unique id

        const extName = file.originalname.split('.').pop(); // this will give extensions name of files ex - jpg , png

        const filename = `${id}.${extName}`;

        cb(null, filename);
    }
});

export const uploadFiles = multer({storage}).single("image");