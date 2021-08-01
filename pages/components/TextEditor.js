import React from 'react';
import dynamic from "next/dynamic";
import { useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';



const Editor =  dynamic(
    () => import("react-draft-wysiwyg").then((module) => module.Editor),
    {
        ssr: false,
    }
)

function TextEditor() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }

    return (
        <div className="bg-[#f8F9FA] min-h-screen pb-16">
            <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}

            toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
            editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
            />
        </div>
    )
}

export default TextEditor
