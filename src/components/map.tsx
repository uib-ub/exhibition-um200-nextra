import fs from 'fs';
import path from 'path';

export default function Map() {
    const filePath = path.join(process.cwd(), 'public', 'hello.html');
    const html = fs.readFileSync(filePath, 'utf-8');

    return <div dangerouslySetInnerHTML={{__html: html}}/>;
}