export default function SectionLabel({ text, color = '#374151' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="2">
        <path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}
