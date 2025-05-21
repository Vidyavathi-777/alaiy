import React from 'react'
import ReactMde from "@uiw/react-md-editor"
import Showdown from "showdown"
import { useState } from 'react'

const Editorial = ({currentNote,updateNote}) => {
    const [selectedTab , setSelectedTab] = useState("write")
    const converter = new Showdown.Converter({
        tables : true,
        simplifiedAutoLink : true,
        strikethrough : true,
        tasklists : true
    })
  return (
    <section className='pane editor'>
        <ReactMde
            value={currentNote.body}
            onChange={updateNote}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
                Promise.resolve(converter.makeHtml(markdown))
            }
            minEditorHeight={80}
            heightUnits="vh"
        
        />

    </section>
  )
}

export default Editorial
