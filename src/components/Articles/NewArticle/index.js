import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

// ==CALL STORE==
const { loadTinymceContent } = useSelector((state) => state.tinymceReducer);
const { summary, title, date, poster, author } = useSelector((state) => state.articleFormReducer);


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
    dispatch(uploadToGdrive(myContent));
  };
  const load = async () => {
    await dispatch(downloadFromGdrive());
    editorRef.current.setContent(loadTinymceContent);
  };
  const saveButton = (e) => {
    e.preventDefault();
    console.log(title, summary, date, poster, author);
  }




  return (

    //==-- COMPONENT NEWARTICLES --==
    <Card className="newarticle">
    <Card.Title className="newarticle-title" >Ecrire un nouvel article</Card.Title>
    <Card.Body className='newarticle-body'>

      {/* //==-- COMPONENT NEWARTICLES FORM --== */}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="Entrer le titre de l'article" value={title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Résumé de l'événement</Form.Label>
          <Form.Control type="text" placeholder="Taper un résumé de l'événement" value={summary} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date de l'événement</Form.Label>
          <Form.Control type="date" placeholder="Taper un résumé de l'événement" value={date}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPoster">
          <Form.Label>Affiche</Form.Label>
          <Form.Control type="text" placeholder="Bouton pour uploader l'affiche" value={poster}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTinymce">
          <Form.Label>Contenu</Form.Label>

            {/* //==-- COMPONENT TINYMCE --== */}
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
                          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | spellcheckdialog | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
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
            {/* //==-- COMPONENT TINYMCE --== */}

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAuthor" value={author}>
          <Form.Label>Auteur</Form.Label>
          <Form.Control type="text" placeholder="Taper votre nom" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={saveButton}>Sauvegarder</Button>
      </Form>
      {/* //==-- COMPONENT NEWARTICLES FORM --== */}

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