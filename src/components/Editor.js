import ReactQuill, {Quill} from "react-quill"
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import ImageCompress from 'quill-image-compress';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';


let Block = Quill.import('blots/block');
Block.tagName = 'div';
Quill.register(Block);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageCompress', ImageCompress);



const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
        matchVisual: false
    },
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    },
    imageCompress: {
        quality: 0.7, // default
        maxWidth: 1000, // default
        maxHeight: 1000, // default
        imageType: 'image/jpeg', // default
        debug: true, // default
    },
    syntax: {
        highlight: (text) => hljs.highlightAuto(text).value,
    },
  }

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

export default function Editor({value,onChange }){

    return(
        <ReactQuill
        theme="snow"
        value={value} 
        onChange={onChange}
        modules={modules} 
        formats={formats}/>
    )
}