import React from "react"

import { Preview } from "../types"
import PagePreview from "./page-preview"

export default function PagePreviewList({ title, previews }: { title: string, previews: Preview[]}) {
  return (
    <>
      <h2>{title}</h2>
      <>
        {previews.map((preview) => (
          <PagePreview preview={preview} />
        ))}
      </>
    </>
  )
}
