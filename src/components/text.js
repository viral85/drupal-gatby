import * as React from "react"

const Text = ({ text }) => (
    <div dangerouslySetInnerHTML={{ __html: text }} />
)

export default Text
