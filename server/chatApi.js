import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
const __dirname = dirname(fileURLToPath(import.meta.url));

import path from 'path';
import multer from 'multer';

export const chatApi = ({app, db}) => {
  const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };

  const upload = multer({
    dest: "upload-temp/",
  });

  const exts = ['.png', '.jpg', '.jpeg', '.webm', '.mp4'];

  app.post(
    "/chat/file",
    upload.single("file"),
    (req, res) => {
      console.log('req.file: ', req.file);
      const tempPath = req.file.path;
      const mediaDir = path.join(__dirname, `../upload`);
      fs.mkdirSync(mediaDir, { recursive: true });
      const targetPath = `${mediaDir}/${req.file.originalname}`;
      console.log('targetPath: ' ,targetPath);

      if (exts.includes(path.extname(req.file.originalname).toLowerCase())) {
        fs.rename(tempPath, targetPath, err => {
          if (err) return handleError(err, res);

          res
            .status(200)
            .contentType("text/plain")
            .end("File uploaded!");
        });
      } else {
        fs.unlink(tempPath, err => {
          if (err) return handleError(err, res);

          res
            .status(403)
            .contentType("text/plain")
            .end(`Only ${exts.join(', ')} files are allowed!`);
        });
      }
    }
  );
};
