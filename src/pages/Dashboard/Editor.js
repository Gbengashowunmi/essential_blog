
// import React from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Dashboard from './Dashboard';




// export default function Editor() {

//   return (
//     // <Dashboard>
//     <div className="editor">
//       <CKEditor
//                     editor={ ClassicEditor }
//                     data="<p>Start typing your post...</p>"
//                     // pla
//                     onInit={ editor => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log( 'Editor is ready to use!', editor );
//                     } }
//                     onChange={ ( event, editor ) => {
//                         const data = editor.getData();
//                         console.log( { event, editor, data } );
//                     } }
                    
//                     onBlur={ ( event, editor ) => {
//                         console.log( 'Blur.', editor );
//                     } }
//                     onFocus={ ( event, editor ) => {
//                         console.log( 'Focus.', editor );
//                     } }
//                 />
//       {/* <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2> */}
//     </div>
//     // </Dashboard>
//   );
// }


// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import Dashboard from './Dashboard';


// export default function Editor() {
//   const [value, setValue] = useState('');

//   return (  <ReactQuill theme="snow" value={value} onChange={setValue} />)
//   // <Dashboard>
//   // </Dashboard>)
// }