import express from 'express';
import fs from 'fs';
import expressFileUpload from 'express-fileupload';
import fileUpload from 'express-fileupload';

const server = express();



server.listen(3100, () => {
  console.log('Server is running on port 3100');    });

server.get('/', (req, res) => {
  return res.status(200).send("Hello World");
});


server.use(fileUpload({
    createParentPath: true
}));

server.post('/', (req, res) => {
    const { files } = req;
    const { mach } = files;
    console.log(files);
    mach.mv('./yo/'+mach.name);
    return res.status(200).send(mach.name);

});
export default server;