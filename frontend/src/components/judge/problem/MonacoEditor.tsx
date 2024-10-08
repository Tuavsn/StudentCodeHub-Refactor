'use client'
import { Editor, OnChange } from "@monaco-editor/react";
import { useState } from "react";

interface MonacoEditorProps {
    language: string;
    code: string;
    setCode: string,
    forPreview: boolean,
    editorOpen: boolean,
    setEditorOpen: boolean,
}

export default function MonacoEditor() {

    const [language, setLanguage] = useState('cpp')
    const [code, setCode] = useState('')
    const [stdIn, setStdIn] = useState('')
    const [ouput, setOutput] = useState('')

    const handleEditorChange: OnChange = (value, e) => {
        setCode(value || '')
    }
    
    return (
        <>
            <Editor
                value={code}
                language={language}
                theme="vs-light"
                width="100%"
                className="max-w-full"
                height="100%"
                options={{
                    fontSize: 15,
                    fontFamily: "Consolas",
                    wordWrap: "on",
                    "semanticHighlighting.enabled": "configuredByTheme",
                    lineNumbers: "on",
                    minimap: {enabled: false}
                }}
                onChange={handleEditorChange}
            />
        </>
    )
}