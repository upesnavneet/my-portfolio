import FlowingMenu from './components/ui/FlowingMenu/FlowingMenu';

import acmlogo from './assets/companies/acm.png'
import lionslogo from './assets/companies/lionsclub.webp'
import bitwittechno from './assets/companies/bitwit.png'


const menuItems = [
    { link: '#', text: 'ACM', image: acmlogo },
    { link: '#', text: 'Bitwit-technologies', image: bitwittechno },
    { link: '#', text: 'Lions Club International', image: lionslogo },
];

function FlowingMenuSection() {
    return (
        <section style={{ backgroundColor: '#f5f5f5', padding: '10vh 0', width: '100%', overflow: 'hidden' }}>
            <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '8vh',
                padding: '0 4vw',
                gap: '15vw',
                flexWrap: 'wrap'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                    <h2 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 'clamp(3rem, 4.5vw, 5rem)',
                        fontWeight: 900,
                        color: '#0A2463',
                        lineHeight: 0.85,
                        textTransform: 'uppercase',
                        margin: 0,
                        letterSpacing: '-0.03em'
                    }}>
                        PROFESSIONAL
                    </h2>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(3.2rem, 5vw, 5.5rem)',
                        fontWeight: 600,
                        color: '#0A2463',
                        lineHeight: 0.8,
                        textTransform: 'uppercase',
                        margin: 0,
                        letterSpacing: '0.02em'
                    }}>
                        EXPERIENCE
                    </h2>
                </div>
                <div style={{ maxWidth: '420px', paddingTop: '5px' }}>
                    <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                        fontWeight: 400,
                        color: 'rgba(10, 36, 99, 0.75)',
                        margin: 0,
                        lineHeight: 1.5
                    }}>
                        A brief look at the places where I've contributed, grown, and helped build impactful solutions.
                    </p>
                </div>
            </div>

            <div style={{ height: '600px', width: '100%', position: 'relative' }}>
                <FlowingMenu
                    items={menuItems}
                    speed={20}
                    textColor="#0A2463"
                    bgColor="#f5f5f5"
                    marqueeBgColor="#0A2463"
                    marqueeTextColor="#f5f5f5"
                    borderColor="rgba(10, 36, 99, 0.15)"
                />
            </div>
        </section>
    );
}

export default FlowingMenuSection;
