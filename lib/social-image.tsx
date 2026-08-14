import { ImageResponse } from 'next/og';

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = 'image/png';

export function createSocialImage({
  eyebrow,
  title,
  accent,
  detail,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  detail: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          color: '#ffffff',
          background: 'linear-gradient(135deg, #171126 0%, #241936 52%, #4f3a9e 150%)',
          fontFamily: 'Arial, sans-serif',
          padding: '68px 76px',
        }}
      >
        <div style={{ position: 'absolute', width: 440, height: 440, borderRadius: 999, background: 'rgba(126, 92, 255, .24)', filter: 'blur(60px)', right: -100, top: -170 }} />
        <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: 999, border: '1px solid rgba(255,255,255,.1)', right: 70, bottom: -150 }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ display: 'flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 16, background: '#7657e8', fontSize: 23, fontWeight: 800 }}>D</div>
              <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, letterSpacing: '-1px' }}>Digital <span style={{ color: '#a991ff', marginLeft: 7 }}>Thriv</span></div>
            </div>
            <div style={{ display: 'flex', border: '1px solid rgba(255,255,255,.14)', borderRadius: 999, padding: '10px 18px', color: 'rgba(255,255,255,.68)', fontSize: 15 }}>digitalthriv.com</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 970 }}>
            <div style={{ display: 'flex', color: '#bcaaf2', fontSize: 17, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase' }}>{eyebrow}</div>
            <div style={{ display: 'flex', marginTop: 18, fontSize: 62, lineHeight: 1.04, fontWeight: 800, letterSpacing: '-3px' }}>{title}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 28 }}>
              <div style={{ display: 'flex', borderRadius: 16, background: '#ffffff', color: '#241936', padding: '13px 20px', fontSize: 22, fontWeight: 800 }}>{accent}</div>
              <div style={{ display: 'flex', color: 'rgba(255,255,255,.64)', fontSize: 20 }}>{detail}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
