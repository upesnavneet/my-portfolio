import FlowingMenu from './components/ui/FlowingMenu/FlowingMenu';

import acmlogo from './assets/companies/acm.png'

import bitwittechno from './assets/companies/bitwit-logo-removebg-preview.png'


const menuItems = [
    { link: '#', text: 'ACM', image: acmlogo },
    { link: '#', text: 'Bitwit-technologies', image: bitwittechno },
    { link: '#', text: 'Contact', image: 'https://picsum.photos/600/400?random=12' },
    { link: '#', text: 'Resume', image: 'https://picsum.photos/600/400?random=13' },
];

function FlowingMenuSection() {
    return (
        <div style={{ height: '600px', position: 'relative' }}>
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
    );
}

export default FlowingMenuSection;
