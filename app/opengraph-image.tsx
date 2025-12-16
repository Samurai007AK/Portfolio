import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Arijit Konar | System Developer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '20px solid black',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'black',
                        color: 'white',
                        padding: '40px 80px',
                        transform: 'rotate(-2deg)',
                        boxShadow: '15px 15px 0px 0px rgba(0,0,0,0.2)',
                    }}
                >
                    <h1 style={{ fontSize: 80, fontFamily: 'sans-serif', fontWeight: 900, margin: 0, letterSpacing: '-0.05em', textTransform: 'uppercase' }}>
                        Arijit Konar
                    </h1>
                </div>
                <div
                    style={{
                        display: 'flex',
                        background: 'white',
                        border: '4px solid black',
                        padding: '20px 40px',
                        marginTop: '40px',
                        transform: 'rotate(1deg)',
                        boxShadow: '10px 10px 0px 0px black',
                    }}
                >
                    <h2 style={{ fontSize: 40, fontFamily: 'monospace', fontWeight: 'bold', margin: 0 }}>
                        SYSTEM // DEVELOPER
                    </h2>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
