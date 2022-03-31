import React, {useEffect, useState} from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import bold from "../../../image/mailing/bold.svg"
import italic from "../../../image/mailing/italic.svg"
import underline from "../../../image/mailing/underline.svg"
import textMore from "../../../image/mailing/textMore.svg"
import alignLeft from "../../../image/mailing/alignLeft.svg"
import alignCenter from "../../../image/mailing/alignCenter.svg"
import orderedList from "../../../image/mailing/orderedList.svg"
import insertLink from "../../../image/mailing/insertLink.svg"
import insertImage from "../../../image/mailing/insertImage.svg"
import smile from "../../../image/mailing/smile.svg"
import "./EditorMessage.scss"

const EditorMessage = (props) => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const  [convertedContent, setConvertedContent] = useState(null);

    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
        console.log(state)
    }
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }
    const createMarkup = (html) => {
        return  {
            __html: DOMPurify.sanitize(html)
        }
    }


    return (
        <>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-editor"
                editorClassName="editor"
                toolbarClassName="toolbar"
                toolbar={{
                    options: ['inline', 'textAlign', "list", "link", "image", "emoji"],
                    inline: {
                        inDropdown: false,
                        options: ['bold', 'italic', 'underline'],
                        bold: {icon: bold},
                        italic: {icon: italic},
                        underline: {icon: underline}
                    },
                    textAlign: {
                        inDropdown: false,
                        options: ['left', 'center'],
                        left: {icon: alignLeft},
                        center: {icon: alignCenter},
                    },
                    list: {
                        inDropdown: false,
                        options: ['ordered'],
                        ordered: {icon: orderedList},
                    },
                    link: {
                        inDropdown: false,
                        options: ['link'],
                        ordered: {icon: insertLink},
                    },
                    image: {
                        icon: insertImage,
                        urlEnabled: false,
                        uploadEnabled: true,
                        previewImage: true,
                        inputAccept: 'image/jpeg,image/jpg,image/png',
                        alignmentEnabled: false,
                        defaultSize: {
                            height: "auto",
                            width: "auto",
                        },
                    },
                    emoji: {
                        icon: smile
                    }
                }}
            />
            <div className="mailing-constructor-row">
                <div>
                    #userid
                </div>
                <div>
                    #username
                </div>
                <div>
                    #billingurl
                </div>
                <div>
                    Больше
                </div>
            </div>
            <div className="mailing-constructor-buttons">
                <button className="purple-btn" onClick={() => props.handleSetMessage(editorState.toJS())}>
                    Сохранить
                </button>
                <button className="purple-btn" onClick={() => props.handleSetFavorites(convertedContent)}>
                    Добавить в избранное
                </button>
            </div>
            {/*<div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}/>*/}
        </>

    )
}

export default EditorMessage

// function uploadImageCallBack(file) {
//     return new Promise(
//         (resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             xhr.open('POST', 'https://api.imgur.com/3/image');
//             xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
//             const data = new FormData();
//             data.append('image', file);
//             xhr.send(data);
//             xhr.addEventListener('load', () => {
//                 const response = JSON.parse(xhr.responseText);
//                 console.log(response)
//                 resolve(response);
//             });
//             xhr.addEventListener('error', () => {
//                 const error = JSON.parse(xhr.responseText);
//                 console.log(error)
//                 reject(error);
//             });
//         }
//     );
// }