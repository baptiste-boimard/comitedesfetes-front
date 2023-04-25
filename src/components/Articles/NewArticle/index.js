import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import Papa from 'papaparse';

import { useCSVReader } from 'react-papaparse';
import { usePapaParse } from 'react-papaparse';


// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';
// ==--IMPORT IMAGE--==
// ==IMPORT COMPONENTS==
// ==--IMPORT STYLE--==
import './style.scss'

// ==IMPORT ACTION==
import { saveTinymce } from '../../../slice/tinymce';

// ==-- IMPORT THUNK MIDDLEWARE --==
import { uploadToGdrive, downloadFromGdrive } from '../../../slice/tinymce';


function NewArticle() {

  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const {readRemoteFile} = usePapaParse();

// ==CALL STORE==
const { saveTinymceContent, loadTinymceContent } = useSelector((state) => state.tinymceReducer);


  // == ACTIONS ==
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const relog = () => {
    editorRef.current.setContent("Coucouc ca marche");
  };
  const save = () => {
    const myContent = editorRef.current.getContent();
    console.log('DEPAERT COMPONEENT',myContent);
    dispatch(uploadToGdrive(myContent));
  };
  const load = async () => {
    const coucou = await dispatch(downloadFromGdrive());
    console.log(coucou);
    editorRef.current.setContent(coucou.payload);


    //PAPAPARSE

    // const file = fs.createReadStream(result);
    //   Papa.parse(coucou, {
    //     download: true,
    //     delimiter:" ",
    //     // header: true,
    //     // worker: true,
    //     complete: function(result) {
    //         console.log(result.data);
    //     }
    // });
    //PAPAPARSE



    //PAPAPARSE REACT








    //PAPAPARSE REACT


  };




  return (

    //==-- COMPONENT NEWARTICLES --==
    <Card className="newarticle">
    <Card.Title className="newarticle-title" >Un nouvel article</Card.Title>
    <Card.Body className='newarticle-body'>

    <div className="editor">
      <Editor
        apiKey='kld7ck1c97j2pg1fv0u16qo3eg2li40efauwx6p9nvh14vf7'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          language: 'fr_FR',
          width: 800,
          height: 500,
          menubar: true,
          image_title: true,
          /* enable automatic uploads of images represented by blob or data URIs*/
          automatic_uploads: true,
          /*
            URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
            images_upload_url: 'postAcceptor.php',
            here we add custom filepicker only to Image dialog
          */
          file_picker_types: 'image',
          // images_upload_url: 'postAcceptor.php',
          /* and here's our custom image picker*/
          file_picker_callback: (cb, value, meta) => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            input.addEventListener('change', (e) => {
              const file = e.target.files[0];

              const reader = new FileReader();
              reader.addEventListener('load', () => {
                /*
                  Note: Now we need to register the blob in TinyMCEs image blob
                  registry. In the next release this part hopefully won't be
                  necessary, as we are looking to handle it internally.
                */
                const id = 'blobid' + (new Date()).getTime();
                const blobCache = editorRef.current.editorUpload.blobCache;

                const base64 = reader.result.split(',')[1];
                <button onClick={log}>Log editor content</button>
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
              });
              reader.readAsDataURL(file);
            });

            input.click();
          },
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                  selector: 'textarea',
                  skin: 'oxide-dark',
                  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                  tinycomments_mode: 'embedded',
                  tinycomments_author: 'Author name',
                  mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                  ]
        }}
      />
      <button onClick={log}>Log editor content</button>
      <button onClick={relog}>Setcontent</button>
      <button onClick={save}>Save</button>
      <button onClick={load}>Load</button>
    </div>
      


    </Card.Body>
    </Card>
    //==-- COMPONENT NEWARTICLES --==

  );
}

export default NewArticle;




// ligne pour coinversion bas64 to image
// var image = new Image();

// image.src = 'data:image/png;base64,iVBORw0K...';

// document.body.appendChild(image);