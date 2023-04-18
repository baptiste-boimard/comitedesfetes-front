import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
// ==IMPORT COMPONENTS==
// ==--IMPORT STYLE--==
import './style.scss'

function NewArticle() {

  const editorRef = useRef(null);

  const handlerValidate = () => {
    console.log(editorRef.current.getContent());
  };


  return (

    //==-- COMPONENT NEWARTICLES --==
    <Card className="newarticle">
    <Card.Title className="newarticle-title" >Un nouvel article</Card.Title>
    <Card.Body className='newarticle-body'>

    <div className="editor">
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          language: 'fr_FR',
          width: 800,
          height: 500,
          menubar: true,
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
      <button onClick={handlerValidate}>Log editor content</button>
    </div>
      


    </Card.Body>
    </Card>
    //==-- COMPONENT NEWARTICLES --==

  );
}

export default NewArticle;