import React from "react"

import { Preview } from "../types"
import PagePreview from "./page-preview"

export default function PagePreviewList({ title, previews }: { title: string, previews: Preview[]}) {
  return (
    <>
      <h2
        className="text-2xl border-b-2 border-green-700 mb-4"
        id={title.toLowerCase()}
      >{title}</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
      >
        {previews.map((preview) => (
          <PagePreview preview={preview} />
        ))}
      </div>
    </>
  )
}
