/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Switch to nodejs runtime to allow file system access
export const runtime = "nodejs";

export const alt = "Penta Studio - Transform Ideas Into Secure Digital Products";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    // Read the vector files
    const logoIconPath = join(process.cwd(), "public", "Logo.svg");
    const logoTextPath = join(process.cwd(), "public", "Penta.svg");

    const logoIconBuffer = readFileSync(logoIconPath);
    const logoTextBuffer = readFileSync(logoTextPath);

    // Convert to base64 to ensure reliable rendering in ImageResponse
    const logoIconB64 = `data:image/svg+xml;base64,${logoIconBuffer.toString("base64")}`;
    const logoTextB64 = `data:image/svg+xml;base64,${logoTextBuffer.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#060B27",
                    color: "white",
                }}
            >
                {/* Background decorative elements */}
                <div
                    style={{
                        position: "absolute",
                        top: "-20%",
                        right: "-10%",
                        width: "600px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(41, 230, 140, 0.1) 0%, rgba(6, 11, 39, 0) 70%)",
                        borderRadius: "50%",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row", // Side by side
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        gap: "24px",
                    }}
                >
                    {/* Icon Logo */}
                    <img
                        src={logoIconB64}
                        alt="Penta Studio Icon"
                        width={200}
                        height={123} // Approx aspect ratio 52/32 * 200
                        style={{
                            objectFit: "contain",
                        }}
                    />

                    {/* Text Logo */}
                    <img
                        src={logoTextB64}
                        alt="Penta Studio Text"
                        width={400}
                        height={109} // Approx aspect ratio 95/26 * 400
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>

            </div>
        ),
        {
            ...size,
        }
    );
}
