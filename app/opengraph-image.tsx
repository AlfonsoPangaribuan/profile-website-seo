import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Alfonso Pangaribuan - Teknik Informatika ITERA"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
      }}
    >
      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          color: "#0f172a",
          marginBottom: 24,
        }}
      >
        Alfonso Pangaribuan
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#64748b",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Teknik Informatika ITERA
      </div>
    </div>,
    {
      ...size,
    },
  )
}
