import { createReadStream } from 'streamifier';
import concat from 'concat-stream';

export default function applyTransform(buffer, transform, cb) {
    createReadStream(buffer)
    .pipe(transform)
    .pipe(concat((data) => cb(null, data)))
    .on('error', cb);
}
